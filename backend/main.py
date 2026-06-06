from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import pandas as pd
import json
import os
from sklearn.neighbors import KNeighborsRegressor
from typing import List, Optional

app = FastAPI(title="Annam Farm Intelligence API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

DATA_FILE = "data.json"

def load_data():
    if not os.path.exists(DATA_FILE):
        return {"harvests": []}
    with open(DATA_FILE, "r") as f:
        return json.load(f)

def save_data(data):
    with open(DATA_FILE, "w") as f:
        json.dump(data, f, indent=2)

class HarvestEntry(BaseModel):
    farmer: str
    variety: str
    seed_qty: float
    sowing_time: str
    fertilizer_freq: str
    irrigations: int
    pest_level: str
    rainfall_mm: float
    yield_q: float
    year: Optional[int] = None

class PredictionRequest(BaseModel):
    variety: str
    sowing_time: str
    fertilizer_freq: str
    irrigations: int

@app.get("/api/harvests")
def get_harvests():
    return load_data()

@app.post("/api/harvests")
def add_harvest(entry: HarvestEntry):
    data = load_data()
    new_id = max([h.get("id", 0) for h in data["harvests"]] + [0]) + 1
    new_record = entry.dict()
    new_record["id"] = new_id
    data["harvests"].append(new_record)
    save_data(data)
    return {"message": "Harvest added successfully", "id": new_id}

@app.get("/api/analytics/trends")
def get_trends():
    data = load_data()["harvests"]
    if not data:
        return {"message": "No data available"}
    df = pd.DataFrame(data)
    if "year" not in df.columns:
        return {"trends": []}
    
    df_yearly = df[df['year'].notna()]
    if df_yearly.empty:
         return {"trends": []}
         
    yearly_stats = df_yearly.groupby('year').agg({
        'yield_q': 'mean',
        'rainfall_mm': 'mean'
    }).reset_index()
    
    return {"trends": yearly_stats.to_dict(orient="records")}

@app.get("/api/analytics/best-combinations")
def get_best_combinations():
    data = load_data()["harvests"]
    if not data:
        return []
    df = pd.DataFrame(data)
    
    # Case Study 4 functionality
    grouped = df.groupby(['variety', 'fertilizer_freq', 'sowing_time']).agg(
        avg_yield=('yield_q', 'mean'),
        count=('yield_q', 'count')
    ).reset_index()
    
    best = grouped.sort_values(by='avg_yield', ascending=False).head(5)
    return best.to_dict(orient="records")

@app.post("/api/predict")
def predict_yield(req: PredictionRequest):
    data = load_data()["harvests"]
    if not data:
        raise HTTPException(status_code=400, detail="No historical data for prediction")
        
    df = pd.DataFrame(data)
    
    df_features = df[['variety', 'sowing_time', 'fertilizer_freq', 'irrigations']].copy()
    y = df['yield_q']
    
    pred_row = pd.DataFrame([{
        'variety': req.variety,
        'sowing_time': req.sowing_time,
        'fertilizer_freq': req.fertilizer_freq,
        'irrigations': req.irrigations
    }])
    
    combined = pd.concat([df_features, pred_row], ignore_index=True)
    combined_encoded = pd.get_dummies(combined)
    
    X_train = combined_encoded.iloc[:-1]
    X_pred = combined_encoded.iloc[-1:]
    
    # K-Nearest Neighbors Regression (Case Study 6 approach)
    n_neighbors = min(3, len(X_train))
    knn = KNeighborsRegressor(n_neighbors=n_neighbors, weights='uniform')
    knn.fit(X_train, y)
    
    prediction = knn.predict(X_pred)[0]
    
    # Check for exact matches (as the farmer Gurpreet did)
    exact_matches = df[
        (df['variety'] == req.variety) &
        (df['sowing_time'] == req.sowing_time) &
        (df['fertilizer_freq'] == req.fertilizer_freq) &
        (df['irrigations'] == req.irrigations)
    ]
    
    if not exact_matches.empty:
        min_yield = exact_matches['yield_q'].min()
        max_yield = exact_matches['yield_q'].max()
        avg_yield = exact_matches['yield_q'].mean()
    else:
        min_yield = prediction - 1
        max_yield = prediction + 1
        avg_yield = prediction
        
    return {
        "predicted_avg": round(float(avg_yield), 2),
        "range_min": round(float(min_yield), 2),
        "range_max": round(float(max_yield), 2),
        "exact_matches_found": len(exact_matches)
    }

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)

# Annam Farm Intelligence — API Reference

> **Note:** The Python FastAPI backend is **optional**. The frontend operates fully offline without it. The API enhances prediction accuracy when available.

---

## Base URL
```
http://localhost:8000
```

## Interactive Docs
```
http://localhost:8000/docs       # Swagger UI
http://localhost:8000/redoc      # ReDoc
```

---

## Endpoints

### `GET /`
Health check — confirms the server is running.

**Response:**
```json
{
  "status": "ok",
  "message": "Annam Farm Intelligence API v3.0",
  "timestamp": "2026-08-28T13:00:00Z"
}
```

---

### `GET /api/data`
Returns all harvest records in the dataset.

**Response:**
```json
[
  {
    "id": 1,
    "farmer": "Shankar",
    "variety": "Bunny",
    "seed_qty": 2.5,
    "sowing_time": "Mid June",
    "fertilizer_freq": "Twice",
    "irrigations": 2,
    "pest_level": "Low",
    "rainfall_mm": 500,
    "yield_q": 19,
    "year": 2023
  }
]
```

---

### `POST /api/log`
Submit a new harvest record to the dataset.

**Request Body:**
```json
{
  "farmer": "Madhu",
  "variety": "PBW-343",
  "seed_qty": 2.0,
  "sowing_time": "Late Oct",
  "fertilizer_freq": "Twice",
  "irrigations": 3,
  "pest_level": "Low",
  "rainfall_mm": 80,
  "yield_q": 21.5,
  "year": 2026
}
```

**Response:**
```json
{
  "status": "success",
  "message": "Harvest log saved successfully",
  "id": 42
}
```

---

### `POST /api/predict`
Get a KNN-based yield prediction.

**Request Body:**
```json
{
  "variety": "PBW-343",
  "sowing_time": "Late Oct",
  "fertilizer_freq": "Twice",
  "irrigations": 3
}
```

**Response:**
```json
{
  "predicted_yield_avg": 21.2,
  "predicted_yield_min": 19.0,
  "predicted_yield_max": 23.5,
  "matched_records": 4,
  "confidence": "high"
}
```

---

### `GET /api/trends`
Returns yearly aggregate statistics for the dashboard chart.

**Response:**
```json
[
  {
    "year": 2023,
    "avg_yield": 18.5,
    "avg_rainfall": 490,
    "record_count": 7
  },
  {
    "year": 2024,
    "avg_yield": 20.1,
    "avg_rainfall": 530,
    "record_count": 12
  }
]
```

---

### `GET /api/combinations`
Returns the top 5 performing variety × sowing × fertilizer combinations by average yield.

**Response:**
```json
[
  {
    "variety": "PBW-343",
    "sowing_time": "Late Oct",
    "fertilizer_freq": "Twice",
    "avg_yield": 21.8,
    "record_count": 5
  }
]
```

---

## Error Responses

All errors follow this format:

```json
{
  "status": "error",
  "code": 422,
  "message": "Validation failed: 'variety' field is required"
}
```

| Code | Meaning |
|---|---|
| `200` | Success |
| `201` | Created successfully |
| `400` | Bad request / missing fields |
| `404` | Record not found |
| `422` | Validation error |
| `500` | Internal server error |

---

## Running the Backend

```bash
cd backend
pip install -r requirements.txt
uvicorn main:app --reload --port 8000
```

The frontend automatically detects if the API is available and falls back to offline mode if not.

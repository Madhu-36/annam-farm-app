from pydantic import BaseModel
from typing import List, Optional

class HarvestLog(BaseModel):
    id: Optional[int] = None
    farmer: str
    variety: str
    seed_qty: float
    sowing_time: str
    fertilizer_freq: str
    irrigations: int
    pest_level: str
    rainfall_mm: float
    yield_q: float
    year: int

class PredictionRequest(BaseModel):
    variety: str
    sowing_time: str
    fertilizer_freq: str
    irrigations: int

class PredictionResponse(BaseModel):
    predicted_yield_avg: float
    predicted_yield_min: float
    predicted_yield_max: float
    matched_records: int
    confidence: str
    estimated_revenue: float

def calculate_revenue(yield_q: float, crop_variety: str) -> float:
    """
    Calculate estimated revenue based on crop variety and predicted yield.
    Uses simulated APMC Mandi rates.
    """
    mandi_rates = {
        "Wheat": 2275.0,
        "PBW-343": 2275.0,
        "Cotton": 6620.0,
        "Bunny": 6620.0,
        "Soybean": 4600.0,
        "Rice": 2183.0,
        "Sugarcane": 315.0
    }
    
    rate = mandi_rates.get(crop_variety, 2000.0) # Default to 2000 if unknown
    return round(yield_q * rate, 2)

def normalize_feature(value: float, min_val: float, max_val: float) -> float:
    """Min-max normalization for KNN feature scaling."""
    if max_val == min_val:
        return 0.0
    return (value - min_val) / (max_val - min_val)

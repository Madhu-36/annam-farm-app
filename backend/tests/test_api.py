from fastapi.testclient import TestClient
from main import app

client = TestClient(app)

def test_predict_success():
    payload = {
        "variety": "Wheat",
        "sowing_time": "Late Oct",
        "fertilizer_freq": "Twice",
        "irrigations": 3
    }
    response = client.post("/api/predict", json=payload)
    assert response.status_code == 200
    assert "predicted_yield_avg" in response.json()

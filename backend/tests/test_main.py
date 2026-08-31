import pytest
from fastapi.testclient import TestClient
from main import app

client = TestClient(app)

def test_read_main():
    response = client.get("/")
    assert response.status_code == 200
    assert response.json() == {"status": "ok", "message": "Annam Farm Intelligence API v3.0"}

def test_get_data():
    response = client.get("/api/data")
    assert response.status_code == 200
    data = response.json()
    assert isinstance(data, list)

def test_predict_yield_validation():
    # Test missing fields
    response = client.post("/api/predict", json={})
    assert response.status_code == 422

import json
import os

def create_seed_data():
    data = [
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
        },
        {
            "id": 2,
            "farmer": "Ramesh",
            "variety": "PBW-343",
            "seed_qty": 2.0,
            "sowing_time": "Late Oct",
            "fertilizer_freq": "Twice",
            "irrigations": 3,
            "pest_level": "Low",
            "rainfall_mm": 120,
            "yield_q": 21,
            "year": 2024
        }
    ]
    with open('data.json', 'w') as f:
        json.dump(data, f, indent=4)
    print("Seed data created successfully.")

if __name__ == "__main__":
    create_seed_data()

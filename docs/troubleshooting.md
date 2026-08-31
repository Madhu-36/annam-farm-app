# Troubleshooting Guide

## Offline Mode Not Working
If the app does not load without internet:
1. Ensure you have loaded the app at least once *with* internet to cache assets.
2. Check if your browser supports Service Workers (most modern browsers do).
3. If using HTTPS, ensure the certificate is valid, as Service Workers require a secure context (or localhost).
4. Clear browser cache and hard reload.

## Backend API Not Responding
If using the optional Python backend:
1. Ensure you have run `pip install -r requirements.txt`.
2. Check that `uvicorn` is running (`make start`).
3. Verify you are making requests to the correct port (default is 8000).

## Yield Prediction is Unrealistic
1. The KNN model relies on historical data. If the dataset is too small, predictions may vary.
2. Ensure you have logged at least a few harvests in the system.

## Voice Recognition Failing
1. The Web Speech API requires microphone permissions. Check your browser settings.
2. Ensure you are using a supported browser (Chrome, Edge, Safari).

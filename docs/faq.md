# Frequently Asked Questions (FAQ)

## 1. Do I need to be connected to the internet to use Annam Farm Intelligence?
No! After you load the application for the first time, all files are stored on your device. You can log harvests, get AI predictions, and view agronomy guides completely offline.

## 2. Where is my harvest data stored?
If you are using the app offline, your data is stored securely in your browser's `localStorage`. This means the data stays on your physical device and is not sent to any central server.

## 3. What happens if I clear my browser history/cache?
Since data is stored in `localStorage`, clearing your browser data **will erase your harvest logs**. Please be cautious when clearing your phone's browser cache.

## 4. How does the AI yield prediction work?
The app uses a K-Nearest Neighbors (KNN) algorithm. It looks at your inputs (crop variety, rainfall, fertilizer) and searches your device's history for the most similar past harvests, averaging them out to predict your future yield.

## 5. Can I use the app in Hindi or Kannada?
Currently, the app is in English, but it supports Indian English accents for voice dictation. Full regional language support is planned for v4.0.0.

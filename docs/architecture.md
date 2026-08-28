# Annam Farm Intelligence - Architecture Documentation

## System Overview

```
┌──────────────────────────────────────────────────────────────────┐
│                    ANNAM FARM INTELLIGENCE                        │
│                    System Architecture v3.0                       │
└──────────────────────────────────────────────────────────────────┘

┌─────────────────────────┐        ┌──────────────────────────────┐
│     PRESENTATION LAYER  │        │        OPTIONAL BACKEND       │
│                         │        │                              │
│  login.html             │        │  Python FastAPI Server       │
│  index.html             │◄──────►│  ├── /api/predict (KNN)      │
│  admin.html             │  HTTP  │  ├── /api/log                │
│                         │  (opt) │  ├── /api/trends             │
│  styles.css             │        │  └── /api/combinations       │
│  login.css              │        │                              │
└────────────┬────────────┘        │  Scikit-Learn KNN Model      │
             │                     │  Pandas DataFrame            │
             ▼                     └──────────────────────────────┘
┌─────────────────────────┐
│      LOGIC LAYER        │
│                         │
│  app.js                 │
│  ├── KNN Algorithm      │
│  ├── Chart Renderer     │
│  ├── Voice Recognition  │
│  ├── GPS Weather Fetch  │
│  └── Form Handlers      │
│                         │
│  login.js               │
│  ├── Auth Manager       │
│  ├── Password Validator │
│  └── Session Handler    │
│                         │
│  admin.js               │
│  └── User Table Manager │
└────────────┬────────────┘
             │
             ▼
┌─────────────────────────┐
│      STORAGE LAYER      │
│                         │
│  localStorage           │
│  ├── annam_users        │  ← All registered users
│  ├── annam_logs_{user}  │  ← Per-user harvest history
│  └── annam_stats        │  ← Platform-wide statistics
│                         │
│  sessionStorage         │
│  ├── annam_active_user  │  ← Logged-in user's name
│  └── annam_active_id    │  ← Logged-in user's username
└────────────┬────────────┘
             │
             ▼
┌─────────────────────────┐
│    OFFLINE LAYER (PWA)  │
│                         │
│  service-worker.js      │
│  ├── Cache on Install   │
│  ├── Cache-First fetch  │
│  └── Offline fallback   │
│                         │
│  manifest.json          │
│  ├── App name & icons   │
│  ├── Theme color        │
│  └── Display: standalone│
└─────────────────────────┘
```

## Data Flow: Yield Prediction

```
Farmer Input
    │
    ▼
[Try FastAPI Backend]──FAIL──►[JS KNN Fallback]
    │                                │
    ▼                                ▼
Server-side Scikit-Learn    Browser-side JS Algorithm
KNN with full dataset       vs. localStorage dataset
    │                                │
    └─────────────┬──────────────────┘
                  ▼
         Predicted Yield (q/ac)
                  │
                  ▼
         × APMC Mandi Rate
                  │
                  ▼
         Revenue Estimate (₹/ac)
```

## Data Flow: User Session

```
Login / Register
    │
    ├── sessionStorage.setItem('annam_active_user', name)
    └── sessionStorage.setItem('annam_active_id', username)
                  │
    ┌─────────────┼─────────────────┐
    ▼             ▼                 ▼
app.js        Profile Tab      My Works Table
reads         reads user        filters by
session       from              farmer === activeUser
              localStorage
```

## Technology Decision Log

| Decision | Choice | Reason |
|---|---|---|
| Framework | None (Vanilla JS) | Zero bundle size, instant load on 2G |
| Storage | localStorage | No server needed, offline first |
| Charts | Chart.js | Lightweight, canvas-based, mobile-friendly |
| ML Algorithm | KNN | Interpretable, no training needed, runs in browser |
| PWA | Service Workers | True offline capability, installable |
| Voice | Web Speech API | Native browser, no cost, no latency |
| CSS | Vanilla CSS | Full control, no framework overhead |

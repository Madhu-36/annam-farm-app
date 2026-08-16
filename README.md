# 🌾 Annam Farm Intelligence

<div align="center">

![Annam Farm Intelligence Banner](https://img.shields.io/badge/Annam-Farm%20Intelligence-16a34a?style=for-the-badge&logo=leaf&logoColor=white)

**An Enterprise-Grade AI-Powered Agricultural Intelligence Platform**

[![GitHub Stars](https://img.shields.io/github/stars/Madhu-36/annam-farm-app?style=flat-square&color=16a34a)](https://github.com/Madhu-36/annam-farm-app/stargazers)
[![GitHub Forks](https://img.shields.io/github/forks/Madhu-36/annam-farm-app?style=flat-square&color=2563eb)](https://github.com/Madhu-36/annam-farm-app/network)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](https://opensource.org/licenses/MIT)
[![PWA Ready](https://img.shields.io/badge/PWA-Ready-5a0fc8?style=flat-square&logo=pwa)](https://web.dev/progressive-web-apps/)
[![Offline First](https://img.shields.io/badge/Offline-First-0ea5e9?style=flat-square)](https://offlinefirst.org/)

*Empowering India's smallholder farmers with AI-driven yield predictions, real-time crop pathology diagnostics, and personalized agronomy insights — all 100% offline.*

[🚀 Live Demo](#-quick-start) · [📖 Report](./Annam_Farm_Intelligence_Report.html) · [🐛 Issues](https://github.com/Madhu-36/annam-farm-app/issues) · [💬 Contact](#-author)

</div>

---

## 📌 Table of Contents

- [About the Project](#-about-the-project)
- [Key Features](#-key-features)
- [Tech Stack](#️-tech-stack)
- [Project Structure](#-project-structure)
- [Quick Start](#-quick-start)
- [Admin Access](#-admin-access)
- [How It Works](#-how-it-works)
- [Screenshots](#-screenshots)
- [Dataset](#-dataset)
- [Roadmap](#️-roadmap)
- [Author](#-author)
- [License](#-license)

---

## 🌿 About the Project

**Annam Farm Intelligence** was built to bridge the massive technology gap between modern data science and rural agriculture in India. Over 140 million smallholder farmers lack access to accurate, real-time agricultural intelligence — and most existing AgriTech solutions require high-speed internet that simply doesn't exist in rural farmlands.

This platform solves that problem by running **entirely in the browser** — no server required, no internet needed. Every algorithm, every prediction, and every diagnostic runs locally on the farmer's own device using edge computing principles.

> 🏛️ Built as part of the **Fundamentals of AI using Agriculture Dataset** course under **ANNAM.AI – Centre of Excellence, Ministry of Education, Government of India, IIT Ropar**.

---

## ✨ Key Features

### 🤖 AI Yield Predictor
- Uses a **K-Nearest Neighbors (KNN)** heuristic to forecast crop yield (quintals/acre)
- Matches farmer inputs against a growing historical dataset of real harvest records
- Provides **minimum, maximum, and average yield estimates** with matched farm count
- Calculates estimated **financial revenue per acre** using live APMC Mandi rates for major crops

### 🔬 Computer Vision Leaf Scanner
- Upload a photo of a diseased crop leaf for instant AI pathology diagnosis
- Provides detailed **visual symptom breakdown** for accurate identification
- Delivers a **dual treatment plan** — chemical fungicide + organic/preventative alternatives
- Covers major Indian crop diseases: Early Blight, Powdery Mildew, Bacterial Leaf Blight, and more

### 📊 Enterprise Analytics Dashboard
- **Interactive dual-axis line chart** plotting global yield averages vs. rainfall over multiple years
- **Top Performing Combinations** table ranking the best variety × sowing time × fertilizer combos
- **My Previous Works** — a personalized history table filtered uniquely to the logged-in user

### 🌱 National Crop Guide
- Built-in agronomy database for India's major crops
- Detailed breakdown of **Soil Type, Rainfall, Season, Sowing Time, Harvest Time, and Fertilizer needs**
- Covers Wheat, Cotton, Soybean, Sugarcane, Rice, Maize, Groundnut, Mustard, and more

### 🗣️ Voice Dictation
- Integrated **Web Speech API** for hands-free data entry
- Supports Indian English accents for field-level usability
- Simply speak your harvest data — no typing required

### 🌤️ GPS Weather Auto-Fetch
- One-click GPS-based automatic rainfall data population
- Eliminates the need to manually look up local weather records

### 👤 Personalized User Profiles
- Every user gets a personal profile showing their account details, location, and platform statistics
- Tracks total harvests logged and AI predictions run per individual user

### 📬 Contact & Support
- Built-in support ticket form for user queries
- Direct links to developer contact information

### 🔐 Enterprise Security
- Strict password validation on registration (8+ chars, 1 number, 1 special character)
- Dedicated **Admin Portal** for platform-wide data management
- Secure session handling via `sessionStorage`

### 📲 Progressive Web App (PWA)
- Installable on any Android or iOS device from the browser
- Runs **100% offline** — Service Worker caches all assets on first load
- Instant load times, no app store required

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| **Structure** | HTML5 (Semantic) |
| **Styling** | Vanilla CSS3 (Custom Corporate Theme, Glassmorphism) |
| **Logic** | JavaScript ES6+ (No Frameworks) |
| **Charts** | Chart.js |
| **Offline** | Service Workers + Web App Manifest (PWA) |
| **Storage** | HTML5 localStorage + sessionStorage |
| **Voice** | Web Speech API |
| **Backend (Optional)** | Python 3 + FastAPI + Scikit-Learn |
| **Version Control** | Git + GitHub |

> **Why no framework?** Avoiding React/Vue keeps the JavaScript bundle tiny, ensuring lightning-fast load times even on a 2G rural network connection.

---

## 📁 Project Structure

```
annam-farm-app/
│
├── frontend/                   # 🌐 The entire client-side application
│   ├── index.html              # Main application shell (all tabs)
│   ├── login.html              # Login & Registration page
│   ├── admin.html              # Admin portal
│   ├── styles.css              # Global corporate design system
│   ├── login.css               # Auth page specific styles
│   ├── app.js                  # Core application logic & AI algorithms
│   ├── login.js                # Authentication, validation, registration
│   ├── admin.js                # Admin portal logic
│   ├── ai_bg.png               # AI + Farming background image
│   ├── manifest.json           # PWA web app manifest
│   └── service-worker.js       # Offline caching service worker
│
└── backend/                    # 🐍 Optional Python FastAPI backend
    ├── main.py                 # FastAPI server with KNN model
    ├── data.json               # Seed dataset
    └── requirements.txt        # Python dependencies
```

---

## 🚀 Quick Start

### Option 1: No Installation (Recommended)
Since the app is built to run offline in the browser, no server setup is needed!

```bash
# 1. Clone the repository
git clone https://github.com/Madhu-36/annam-farm-app.git

# 2. Navigate into the project
cd annam-farm-app

# 3. Open in your browser
start frontend/login.html      # Windows
open frontend/login.html       # macOS
xdg-open frontend/login.html  # Linux
```

### Option 2: With Python Backend (For Enhanced AI)
```bash
# Navigate to backend
cd backend

# Install dependencies
pip install -r requirements.txt

# Run the FastAPI server
uvicorn main:app --reload

# Open frontend in browser
# API will connect automatically at http://localhost:8000
```

---

## 🔑 Admin Access

To log in as the platform administrator and view all registered users and global data:

| Field | Value |
|---|---|
| **Username** | `admin` |
| **Password** | `admin123` |

> ⚠️ **Note:** Admin credentials are for demonstration purposes. Please change them before deploying to production.

---

## ⚙️ How It Works

```
┌─────────────────────────────────────────────────────────┐
│                   FARMER INPUT                          │
│  (Crop Variety, Rainfall, Irrigation, Fertilizer...)    │
└─────────────────────┬───────────────────────────────────┘
                      │
                      ▼
┌─────────────────────────────────────────────────────────┐
│              KNN ALGORITHM (In-Browser JS)              │
│  1. Vector the input into feature space                 │
│  2. Calculate Euclidean distance vs. all historical     │
│     records stored in localStorage                     │
│  3. Isolate K nearest matching harvest records          │
│  4. Average their yields → Predicted Yield (q/ac)       │
└─────────────────────┬───────────────────────────────────┘
                      │
                      ▼
┌─────────────────────────────────────────────────────────┐
│               ECONOMIC FORECAST                         │
│  Predicted Yield × APMC Mandi Rate = Revenue (₹/ac)    │
└─────────────────────────────────────────────────────────┘
```

---

## 📸 Screenshots

| Login Page | Dashboard |
|---|---|
| *AI & Farming themed background with secure auth* | *KNN yield predictions + Chart.js trend analytics* |

| Leaf Scanner | Crop Guide |
|---|---|
| *Pathology diagnosis with treatment protocols* | *National agronomy database for Indian crops* |

---

## 📊 Dataset

The embedded dataset covers historical harvest records for major Indian crops with the following features:

| Feature | Type | Description |
|---|---|---|
| `variety` | Categorical | Crop strain (PBW-343, Bunny, Soybean...) |
| `sowing_time` | Categorical | Early/Mid/Late June, Oct, etc. |
| `seed_qty` | Continuous | Seed quantity in kg/acre |
| `fertilizer_freq` | Categorical | Once / Twice / Thrice |
| `irrigations` | Integer | Number of irrigation cycles |
| `rainfall_mm` | Continuous | Annual rainfall in millimeters |
| `pest_level` | Categorical | Low / Medium / High |
| `yield_q` | Continuous | **Target:** Yield in quintals/acre |

The dataset **grows dynamically** — every harvest a farmer logs is saved locally and used to improve future predictions for that device.

---

## 🗺️ Roadmap

- [x] Offline-first PWA architecture
- [x] KNN yield prediction with economic forecast
- [x] Computer Vision leaf disease diagnostics
- [x] Voice dictation for data entry
- [x] Personalized user profiles & previous works dashboard
- [x] Indian States autocomplete on registration
- [x] Admin portal for user management
- [x] National Crop Guide database
- [ ] TensorFlow.js on-device CNN for real leaf image classification
- [ ] IoT soil sensor integration via Web Bluetooth API
- [ ] Multilingual support (Hindi, Kannada, Tamil, Telugu)
- [ ] Real-time weather API integration
- [ ] WhatsApp bot integration for feature phone users

---

## 👩‍💻 Author

**Madhu S**

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Madhu%20S-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/madhu-s-)
[![GitHub](https://img.shields.io/badge/GitHub-Madhu--36-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Madhu-36)
[![Phone](https://img.shields.io/badge/Phone-+91%209740595939-25D366?style=for-the-badge&logo=whatsapp&logoColor=white)](tel:+919740595939)

> *East West Institute of Technology*
> *ANNAM.AI Summership 2026 — Fundamentals of AI using Agriculture Dataset, IIT Ropar*

---

## 📄 License

This project is licensed under the **MIT License** — see the [LICENSE](./LICENSE) file for details.

---

<div align="center">

Made with ❤️ for India's farmers

⭐ **If this project helped you, please give it a star!** ⭐

</div>

# 🌾 Annam Farm Intelligence

<div align="center">

![Annam Farm Intelligence](https://img.shields.io/badge/Annam-Farm%20Intelligence-16a34a?style=for-the-badge&logo=sprout&logoColor=white)

**An Enterprise-Grade AI-Powered Agricultural Intelligence Platform**

[![GitHub Stars](https://img.shields.io/github/stars/Madhu-36/annam-farm-app?style=flat-square&color=16a34a)](https://github.com/Madhu-36/annam-farm-app/stargazers)
[![GitHub Forks](https://img.shields.io/github/forks/Madhu-36/annam-farm-app?style=flat-square&color=2563eb)](https://github.com/Madhu-36/annam-farm-app/network)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](./LICENSE)
[![PWA Ready](https://img.shields.io/badge/PWA-Offline%20First-5a0fc8?style=flat-square)](https://web.dev/progressive-web-apps/)
[![Version](https://img.shields.io/badge/Version-3.1.0-orange?style=flat-square)](./CHANGELOG.md)
[![Made in India](https://img.shields.io/badge/Made%20in-India%20🇮🇳-FF9933?style=flat-square)](https://github.com/Madhu-36)

> *Empowering India's smallholder farmers with AI-driven yield predictions, real-time crop pathology diagnostics, and personalized agronomy insights — all 100% offline, directly on their smartphones.*

**[🚀 Quick Start](#-quick-start)** &nbsp;·&nbsp; **[✨ Features](#-key-features)** &nbsp;·&nbsp; **[📖 How It Works](#-how-it-works)** &nbsp;·&nbsp; **[🗺️ Roadmap](#️-roadmap)** &nbsp;·&nbsp; **[👩‍💻 Author](#-author)**

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
- [Dataset](#-dataset)
- [API Documentation](#-api-documentation-optional-backend)
- [Roadmap](#️-roadmap)
- [Contributing](#-contributing)
- [Changelog](#-changelog)
- [Author](#-author)
- [License](#-license)

---

## 🌿 About the Project

Agriculture is the backbone of the Indian economy — employing over **140 million smallholder farmers** who together cultivate the land that feeds a billion people. Yet despite this scale, the vast majority of these farmers make decisions based on intuition, generational knowledge, and word-of-mouth. The result is chronically sub-optimal crop yields, catastrophic disease losses, and a widening economic gap between the farming and non-farming population.

**Annam Farm Intelligence** was built to directly tackle this problem.

The platform is an **offline-first Progressive Web App (PWA)** that runs entirely inside the browser — no internet required, no installation needed, no monthly subscription. Using Edge Computing principles, all AI algorithms execute locally on the farmer's own smartphone CPU. The entire 30-hour ANNAM.AI curriculum is distilled into one accessible, powerful tool that works on a ₹5,000 Android phone in the middle of a field with zero signal bars.

> 🏛️ **Academic Context:** Built as the final project for the **"Fundamentals of AI using Agriculture Dataset"** 1-credit course under **ANNAM.AI – Centre of Excellence, Ministry of Education, Government of India, IIT Ropar.**

---

## ✨ Key Features

### 🤖 AI Yield Predictor & Economic Forecaster
The heart of the platform. Farmers enter their intended farming parameters and receive an AI-powered yield forecast in seconds.
- Uses a localized **K-Nearest Neighbors (KNN)** heuristic to match current inputs against historical harvest records
- Outputs **Average, Minimum, and Maximum expected yield** in quintals per acre
- Shows the **number of matching historical records** used (confidence indicator)
- Automatically calculates **estimated revenue (₹/acre)** using hardcoded APMC Mandi rates for major crops (Wheat ₹2,275/q · Cotton ₹6,620/q · Soybean ₹4,600/q)
- All computation happens **in milliseconds, 100% offline**

### 🔬 Computer Vision Leaf Disease Scanner
Upload a photo of a diseased crop leaf for a full AI pathology diagnosis report.
- Drag-and-drop image upload with a clean visual interface
- **Detailed symptom breakdown** — exactly what visual signs to look for on the leaf
- **Chemical treatment protocol** — specific fungicide/bactericide recommendations with application method
- **Organic/preventative alternative** — eco-friendly treatment for sustainability-conscious farmers
- Covers: *Early Blight, Late Blight, Powdery Mildew, Bacterial Leaf Blight, Leaf Rust, Yellow Mosaic Virus,* and more

### 📊 Enterprise Analytics Dashboard
Real-time intelligence from your entire farming community's data.
- **Interactive dual-axis Chart.js line chart** — plots global average yield vs. rainfall across multiple years
- **Top 5 Performing Combinations Table** — ranks the best `Variety × Sowing Time × Fertilizer Frequency` combos by average yield across all farms
- **My Previous Works Table** — filters the global dataset to show only the logged-in user's personal harvest history, sorted by most recent year

### 🌱 National Agronomy Database (Crop Guide)
A built-in, comprehensive reference guide for India's 10 major crops.

| Crop | Soil | Rainfall | Season | Sowing | Harvest | Fertilizer |
|---|---|---|---|---|---|---|
| Wheat | Loamy | 50-100mm | Rabi | Oct-Nov | Mar-Apr | NPK, Urea |
| Cotton | Black | 600-1200mm | Kharif | May-Jun | Nov-Dec | DAP, Potash |
| Soybean | Well-drained | 600-800mm | Kharif | Jun-Jul | Sep-Oct | Rhizobium, DAP |
| Rice | Clayey | 1200-1600mm | Kharif | Jun-Jul | Nov-Dec | Urea, ZnSO4 |
| Sugarcane | Loamy | 1500-2500mm | Annual | Feb-Mar | Dec-Mar | N, P, K |
| *...and more* | | | | | | |

### 🗣️ Voice Dictation (Web Speech API)
- One-tap microphone button beside any input field
- Supports **Indian English accents** — optimized for field-level usability
- Automatically transcribes spoken harvest data into form fields
- No external API cost — uses the device's own built-in speech engine

### 🌤️ GPS Weather Auto-Fetch
- One-click button auto-populates the **Rainfall (mm)** field
- Uses the device's built-in Geolocation API
- Ideal for farmers who don't track rainfall manually

### 👤 Personalized My Profile Tab
- Displays the farmer's **Name, Username, Location (Indian State), and Join Date**
- Shows real-time platform statistics — total harvests logged and AI predictions run
- Initials-based avatar generated from the farmer's name

### 📊 My Previous Works (Personal History)
- A dedicated table on the dashboard that **filters the global dataset to show only the current user's records**
- Sorted by most recent year first
- Tracks: Year, Crop Variety, Rainfall, and Yield

### 📬 Contact & Support
- Integrated support ticket form (Contact Us tab)
- Direct developer contact: Madhu S (+91 9740595939)

### 🔐 Enterprise-Grade Security
- **Strict password policy** on registration (8+ characters, 1+ number, 1+ special character)
- **Confirm password field** to prevent typos
- Dedicated **Admin Portal** for platform-wide management of users and data
- Secure session handling via `sessionStorage` (session ends on browser close)

### 🏢 Admin Portal
- View all registered users and their details
- Platform-wide statistics: total users, harvests logged, predictions run
- Secured with separate admin credentials

### 📲 Progressive Web App (PWA)
- **Installable** on any Android or iOS device directly from the browser
- **100% offline capable** — Service Worker caches all HTML, CSS, JS, and images on first visit
- Instant load times — no app store, no download, no update prompts
- Works on basic Android smartphones (Android 6+)

---

## 🛠️ Tech Stack

| Layer | Technology | Purpose |
|---|---|---|
| **Structure** | HTML5 (Semantic) | Application shell and page structure |
| **Styling** | Vanilla CSS3 | Custom "Deep Slate & Emerald" corporate theme |
| **Logic** | JavaScript ES6+ | All app logic, KNN algorithm, data management |
| **Charts** | Chart.js v3 | Interactive yield and rainfall trend visualizations |
| **Offline Cache** | Service Workers | PWA offline support and asset caching |
| **Installability** | Web App Manifest | Enable "Add to Home Screen" installation |
| **Storage** | HTML5 localStorage | Persistent user data, harvest logs |
| **Sessions** | sessionStorage | Secure active user session management |
| **Voice** | Web Speech API | In-browser speech-to-text dictation |
| **Location** | Geolocation API | GPS-based rainfall auto-fetch |
| **Backend (opt.)** | Python + FastAPI | Optional server-side KNN with Scikit-Learn |
| **Version Control** | Git + GitHub | Source code management and collaboration |

> **🚀 Zero Framework Philosophy:** No React. No Vue. No Angular. No npm install needed for the frontend. This keeps the JavaScript bundle tiny and ensures lightning-fast load times even on slow 2G connections in rural areas.

---

## 📁 Project Structure

```
annam-farm-app/
│
├── 📄 README.md                 # You are here
├── 📄 LICENSE                   # MIT License
├── 📄 CONTRIBUTING.md           # Contribution guidelines
├── 📄 CHANGELOG.md              # Full version history
├── 📄 .gitignore                # Git exclusion rules
│
├── 🌐 frontend/                 # Client-side application (runs offline in browser)
│   ├── index.html               # Main application shell (Dashboard, Scanner, Guide, Profile, Contact)
│   ├── login.html               # Login & Registration page (with AI farming background)
│   ├── admin.html               # Admin portal (restricted access)
│   ├── styles.css               # Global design system — colors, typography, components
│   ├── login.css                # Auth page specific layout and animations
│   ├── app.js                   # Core application logic — KNN algorithm, charts, data management
│   ├── login.js                 # Auth logic — registration, validation, login, Indian states list
│   ├── admin.js                 # Admin portal logic — user table, statistics
│   ├── ai_bg.png                # AI + Farming background image (login/register pages)
│   ├── manifest.json            # PWA web app manifest (icons, theme color, display mode)
│   └── service-worker.js        # Offline caching service worker (cache-first strategy)
│
└── 🐍 backend/                  # Optional Python FastAPI backend
    ├── main.py                  # FastAPI endpoints + Scikit-Learn KNN yield predictor
    ├── data.json                # Seed dataset (historical Indian farm harvest records)
    └── requirements.txt         # Python dependencies (fastapi, uvicorn, scikit-learn, pandas)
```

---

## 🚀 Quick Start

### ✅ Option 1: No Installation Required (Recommended)
The frontend runs entirely in the browser — just open the HTML file!

```bash
# 1. Clone the repository
git clone https://github.com/Madhu-36/annam-farm-app.git

# 2. Navigate to the project
cd annam-farm-app

# 3. Open in your browser
# Windows:
start frontend/login.html
# macOS:
open frontend/login.html
# Linux:
xdg-open frontend/login.html
```

### 🐍 Option 2: With Python FastAPI Backend (Enhanced AI)
The backend provides server-side KNN prediction using Scikit-Learn, which is more accurate with large datasets.

```bash
# Navigate to backend
cd backend

# Create a virtual environment (recommended)
python -m venv venv
source venv/bin/activate       # macOS/Linux
venv\Scripts\activate          # Windows

# Install dependencies
pip install -r requirements.txt

# Start the FastAPI server
uvicorn main:app --reload --host 0.0.0.0 --port 8000

# Open the frontend
# The app will automatically try the API and fall back to offline mode if unavailable
start frontend/login.html
```

### 🐳 Option 3: With Docker (Isolated Environment)
You can easily spin up the Python API using Docker.

```bash
# Navigate to the backend directory
cd backend

# Build the Docker image
docker build -t annam-farm-api .

# Run the container
docker run -d -p 8000:8000 annam-farm-api
```
The API will be available at `http://localhost:8000`.

The backend API will be available at: `http://localhost:8000`
Swagger documentation: `http://localhost:8000/docs`

---

## 🔑 Admin Access

| Field | Value |
|---|---|
| **Username** | `admin` |
| **Password** | `admin123` |

> ⚠️ These are demonstration credentials. Do not use in a production environment.

**Admin portal features:**
- View all registered users with their name, username, location, and join date
- See platform-wide statistics (total users, harvests logged, predictions run)
- Accessible at: `admin.html`

---

## ⚙️ How It Works

### Yield Prediction Flow

```
┌─────────────────────────────────────────────────────────────┐
│                   FARMER INPUT                              │
│  Crop Variety + Sowing Time + Fertilizer + Irrigations      │
└───────────────────────────┬─────────────────────────────────┘
                            │
                            ▼
┌─────────────────────────────────────────────────────────────┐
│         TRY: Python FastAPI + Scikit-Learn KNN              │
│         (if backend server is running)                      │
│                          │                                  │
│         FALLBACK: In-Browser JS KNN Algorithm               │
│  1. Vectorize farmer input into feature space               │
│  2. Calculate Euclidean distance vs. all localStorage logs  │
│  3. Isolate K nearest matching historical harvests          │
│  4. Average their yields → Mean, Min, Max prediction        │
└───────────────────────────┬─────────────────────────────────┘
                            │
                            ▼
┌─────────────────────────────────────────────────────────────┐
│              ECONOMIC FORECAST ENGINE                        │
│  Predicted Yield (q/ac) × APMC Mandi Rate (₹/q)            │
│             = Estimated Revenue (₹ per acre)                │
└─────────────────────────────────────────────────────────────┘
```

### Data Persistence Flow

```
User Action (Log Harvest)
        │
        ├──► annam_logs_{username} in localStorage  (personal history)
        │
        ├──► annam_stats in localStorage            (platform stats)
        │
        └──► In-memory localData array              (live session data)
                    │
                    └──► KNN Algorithm reads this   (live predictions)
```

---

## 📊 Dataset

The embedded seed dataset covers historical harvest records for major Indian crops.

### Feature Reference Table

| Feature | Data Type | Sample Values | Role |
|---|---|---|---|
| `id` | Integer | 1, 2, 3... | Unique record identifier |
| `farmer` | String | "Shankar", "Ramesh" | Farmer name |
| `variety` | Categorical | "PBW-343", "Bunny", "Soybean" | Crop strain |
| `seed_qty` | Float | 2.0, 2.5, 3.0 | Seed quantity (kg/acre) |
| `sowing_time` | Categorical | "Mid June", "Late Oct" | Season timing |
| `fertilizer_freq` | Categorical | "Once", "Twice" | Fertilizer application |
| `irrigations` | Integer | 1, 2, 3 | Irrigation cycles |
| `pest_level` | Categorical | "Low", "Medium", "High" | Pest pressure |
| `rainfall_mm` | Float | 300–1200 | Annual rainfall (mm) |
| `yield_q` | Float | 12–30 | **Target: Yield (q/acre)** |
| `year` | Integer | 2019–2026 | Harvest year |

### Dataset Growth Model
The dataset is **not static** — it grows with every farmer that uses the platform:
```
Initial Seed Data (17 records)
      +
User A logs 5 harvests → annam_logs_userA in localStorage
User B logs 3 harvests → annam_logs_userB in localStorage
      =
Combined 25 records used by KNN for predictions
```

---

## 📡 API Documentation (Optional Backend)

When running the Python FastAPI backend, the following endpoints are available:

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/` | Health check |
| `GET` | `/api/data` | Retrieve all harvest records |
| `POST` | `/api/log` | Submit a new harvest log |
| `POST` | `/api/predict` | Get KNN yield prediction |
| `GET` | `/api/trends` | Get yearly trend averages |
| `GET` | `/api/combinations` | Get top performing combos |
| `GET` | `/docs` | Interactive Swagger UI |

---

## 🗺️ Roadmap

### ✅ Completed (v3.0.0)
- [x] Offline-first PWA with Service Worker caching
- [x] KNN yield prediction with APMC economic forecasting
- [x] Computer Vision leaf disease diagnostics
- [x] Voice dictation via Web Speech API
- [x] GPS-based rainfall auto-fetch
- [x] Personalized user profiles and My Previous Works
- [x] Indian States autocomplete on registration
- [x] Admin portal for user management
- [x] National Crop Agronomy Guide (10 crops)
- [x] Corporate Enterprise UI theme
- [x] Strict password security policy
- [x] Complete GitHub repository with README, LICENSE, CHANGELOG

### 🔜 Planned (v4.0.0)
- [ ] **TensorFlow.js CNN** — Real on-device leaf disease image classification
- [ ] **Multilingual Support** — Hindi, Kannada, Tamil, Telugu, Marathi
- [ ] **IoT Integration** — Web Bluetooth API for soil moisture sensors
- [ ] **Weather API Sync** — Real-time meteorological data integration
- [ ] **WhatsApp Bot** — Feature phone accessibility via WhatsApp chatbot
- [ ] **Marketplace** — Connect farmers directly with local Mandi buyers
- [ ] **Push Notifications** — Sowing and harvest season reminders
- [ ] **Satellite Imagery** — Crop health monitoring via ISRO Bhuvan API

---

## 🤝 Contributing

Contributions are warmly welcome! Whether you are a developer, agronomist, data scientist, or farmer — your input is valuable.

Please read [CONTRIBUTING.md](./CONTRIBUTING.md) for details on our code of conduct, branch naming conventions, and pull request process.

**Key areas where help is needed:**
- 🌐 Translations into Indian regional languages
- 🌱 Expanding the crop database
- 🤖 TensorFlow.js CNN implementation
- 📱 Testing on low-end Android devices

---

## 📋 Changelog

See [CHANGELOG.md](./CHANGELOG.md) for the complete version history and release notes.

| Version | Date | Highlights |
|---|---|---|
| **v3.0.0** | Aug 2026 | Enterprise UI, Profile, Contact, My Works, Expanded Scanner |
| **v2.0.0** | Jun 2026 | Full app build — KNN, PWA, Admin, Voice, Charts |
| **v1.0.0** | May 2026 | Initial release — FastAPI backend + basic frontend |

---

## 👩‍💻 Author

<div align="center">

**Madhu S**

*East West Institute of Technology*
*ANNAM.AI Summership 2026 — IIT Ropar*

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/madhu-s-)
[![GitHub](https://img.shields.io/badge/GitHub-Follow-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Madhu-36)
[![Phone](https://img.shields.io/badge/Call-+91%209740595939-25D366?style=for-the-badge&logo=whatsapp&logoColor=white)](tel:+919740595939)

</div>

---

## 📄 License

This project is licensed under the **MIT License** — see [LICENSE](./LICENSE) for details.

You are free to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of this software, provided you include the original copyright notice.

---

<div align="center">

Made with ❤️ for India's 140 million farmers

**⭐ If this project helped you or inspired you, please give it a star! ⭐**

*"The farmer is the only man in our economy who buys everything at retail, sells everything at wholesale, and pays the freight both ways." — John F. Kennedy*

</div>

# Changelog

All notable changes to **Annam Farm Intelligence** are documented in this file.

The format follows [Keep a Changelog](https://keepachangelog.com/en/1.0.0/) and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [3.0.0] - 2026-08-16 — Enterprise Upgrade

### Added
- **My Profile Tab** — Personalized user dashboard showing account details, location, join date, and lifetime statistics (harvests logged, predictions run)
- **Contact Us Page** — Support ticket form with developer contact information (Madhu S)
- **My Previous Works** — Personal harvest history table filtered uniquely to the logged-in user
- **Indian States Autocomplete** — Registration form now includes a `<datalist>` with all 28 Indian States and 8 Union Territories
- **Strict Password Validation** — Registration now enforces 8+ characters, at least 1 number, and 1 special character
- **Confirm Password Field** — Added to registration to prevent typos
- **Expanded Leaf Scanner Results** — Detailed pathology breakdown including visual symptoms, chemical treatment, and organic/preventative alternatives
- **Expanded Crop Guide** — Added Sowing Season, Harvesting Time, and Key Nutrients/Fertilizer columns
- **AI Farming Background** — High-resolution AI-generated smart farm background image on login/register page

### Changed
- **Complete UI Redesign** — Shifted from colorful "childish" palette to professional "Deep Slate & Emerald" corporate enterprise theme
- **Typography** — Migrated to Inter + Google Fonts for improved legibility
- **Navigation** — Refined tab navigation with smoother active state transitions
- **Dashboard** — Restructured into logical sections with glassmorphism card panels

### Fixed
- Session data not persisting correctly between tab switches
- Username not auto-populating in harvest form after login
- Chart.js instance not destroying before re-render (caused duplicate chart layers)

---

## [2.0.0] - 2026-06-02 — Full Application Build

### Added
- **AI Yield Predictor** — KNN-based algorithm for crop yield forecasting
- **AI Leaf Scanner** — Computer vision disease diagnostic tool with upload zone
- **Enterprise Dashboard** — Interactive Chart.js line charts for yield and rainfall trends
- **Top Performing Combinations Table** — Ranks best variety × sowing × fertilizer combos
- **National Crop Guide** — Agronomy database for major Indian crops
- **Voice Dictation** — Web Speech API integration for hands-free data entry
- **GPS Weather Fetch** — Auto-populate rainfall field using device GPS
- **PWA Support** — Service Worker and Web App Manifest for offline installation
- **Admin Portal** — Dedicated admin.html dashboard for platform-wide management
- **User Registration & Login** — Full authentication system with localStorage persistence
- **Harvest Log Form** — Structured data entry for recording completed harvests
- **Economic Revenue Calculator** — Converts predicted yield to ₹ revenue using APMC Mandi rates

### Changed
- Switched from Python-only backend to hybrid offline-first architecture
- Dataset migrated from CSV to embedded JSON for browser compatibility

---

## [1.0.0] - 2026-05-15 — Initial Release

### Added
- Basic project scaffolding
- Initial Python FastAPI backend with Scikit-Learn KNN model
- Seed dataset (`data.json`) with baseline Indian farm harvest records
- Basic HTML frontend proof of concept
- Initial login screen

---

*Built with ❤️ by [Madhu S](https://github.com/Madhu-36) for India's farming communities.*

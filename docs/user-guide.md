# Annam Farm Intelligence — User Guide

Welcome to **Annam Farm Intelligence**! This guide will walk you through every feature of the platform step by step.

---

## 📲 Getting Started

### Step 1: Open the App
Open `login.html` in any modern browser (Chrome, Firefox, Edge, or Safari). The app works **completely offline** once loaded.

### Step 2: Register an Account
1. Click **"New User? Register Here"** on the login page
2. Fill in your **Full Name**
3. Choose a unique **Username**
4. Select your **State** from the Indian States dropdown (start typing to filter)
5. Set a **Password** (must be 8+ characters, include 1 number and 1 special character like `!@#$%`)
6. Re-enter your password in **Confirm Password**
7. Click **Register**

### Step 3: Log In
1. Enter your **Username** and **Password**
2. Click **Login**
3. You'll be taken to the main dashboard

> **Admin Login:** Username: `admin` | Password: `admin123`

---

## 🏠 Dashboard Tab

The dashboard gives you an overview of **global farm intelligence**.

### Global Yield Trends Chart
- Plots **Average Yield (q/ac)** vs **Rainfall (mm)** across multiple years
- Use this to identify optimal rainfall ranges for maximum yield
- The chart updates automatically as new harvest logs are added

### Top Performing Combinations
- A table ranking the **Top 5** crop variety × sowing time × fertilizer combinations by average yield
- Use this to discover what the most successful farms in the dataset are doing

### My Previous Works
- Shows **only your personal harvest logs**, sorted by most recent year
- Track your farm's performance season over season

---

## 📝 Log Harvest Tab

Record your completed harvest for the season.

1. **Farmer Name** — pre-filled with your name
2. **Year** — the harvest year
3. **Crop Variety** — select your crop strain (PBW-343, Bunny Cotton, Soybean, etc.)
4. **Seed Quantity** — how much seed you used (kg/acre)
5. **Sowing Time** — when you planted (Early/Mid/Late + Month)
6. **Rainfall** — annual rainfall in mm
   - 🌤️ Click **GPS Auto-Fetch** to fill this automatically using your device location
7. **Irrigations** — number of irrigation cycles applied
8. **Fertilizer Frequency** — how often you applied fertilizer
9. **Pest Level** — overall pest pressure (Low / Medium / High)
10. **Actual Yield** — what you harvested (q/acre)

Click **Submit Record** to save. Your log immediately appears in **My Previous Works**.

### 🗣️ Voice Dictation
Click the **🎤 microphone icon** next to any field and speak your value. The app transcribes it automatically.

---

## 🤖 AI Predictor Tab

Get an AI-powered yield forecast **before** you plant.

1. Select **Crop Variety**
2. Choose **Sowing Time**
3. Choose **Fertilizer Frequency**
4. Set **Irrigations**
5. Click **Predict Yield**

The AI will show you:
- **Predicted Average Yield** (quintals/acre)
- **Expected Range** (minimum to maximum)
- **Matched Historical Records** (how many farms had similar conditions)
- **Estimated Revenue** (₹ per acre, using APMC Mandi rates)

> **Tip:** The more harvest logs in the system, the more accurate the prediction becomes!

---

## 🔬 AI Leaf Scanner Tab

Diagnose a diseased crop leaf instantly.

1. Click the **upload zone** (or drag and drop a leaf photo)
2. Select your photo from your device gallery
3. Wait 2 seconds for the AI to analyze
4. Read your full **Diagnostic Report**:
   - **Disease Name** and scientific classification
   - **Visual Symptoms** — what to look for on the leaf
   - **Chemical Treatment** — specific fungicide with application method
   - **Organic/Preventative Measures** — eco-friendly alternatives

---

## 🌱 Crop Guide Tab

A national agronomy reference database for India's major crops.

Browse the table to find:
- **Suitable Soil Type**
- **Required Rainfall (mm)**
- **Growing Season** (Kharif / Rabi / Annual)
- **Sowing Time**
- **Harvest Time**
- **Key Fertilizers Needed**

---

## 👤 My Profile Tab

View your personal platform profile.

Shows:
- Your **Name, Username, and Location (State)**
- **Account creation date**
- Total **Harvests Logged** and **AI Predictions Run**

---

## 📬 Contact Tab

Submit a support request to the development team.

Fill in your name, email, subject, and message then click **Submit Ticket**. A confirmation message will appear when submitted.

**Direct Contact:**
- **Madhu S** | +91 9740595939
- LinkedIn: [linkedin.com/in/madhu-s-](https://www.linkedin.com/in/madhu-s-)
- GitHub: [github.com/Madhu-36](https://github.com/Madhu-36)

---

## 📲 Installing as a Mobile App (PWA)

1. Open the app in **Chrome** on your Android phone
2. Tap the **three-dot menu** (top right)
3. Tap **"Add to Home Screen"**
4. Give it a name and tap **Add**

The app will now appear on your home screen and works fully offline, just like a native app!

---

## ❓ Frequently Asked Questions

**Q: Does the app need internet to work?**
A: No! Once loaded, the app runs 100% offline. All data is saved on your device.

**Q: Is my data shared with anyone?**
A: No. All your harvest data stays on your own device in browser storage. Nothing is sent to any server in offline mode.

**Q: What if I clear my browser data?**
A: Your harvest logs and account data will be erased. Export or note down important data before clearing browser storage.

**Q: Can I use this on any phone?**
A: Yes — it works on any smartphone with a modern browser (Chrome 80+, Firefox 80+, Safari 14+).

**Q: How accurate is the AI prediction?**
A: Accuracy improves with more data. With a small dataset, expect ±2-3 q/ac variance. With 100+ records, accuracy improves significantly.

# Annam Farm Intelligence — Deployment Guide

## Deployment Options

This guide covers three ways to deploy **Annam Farm Intelligence** so farmers can access it.

---

## Option 1: GitHub Pages (Free, Recommended)

Deploy the frontend for free using GitHub Pages. No server needed.

### Steps

1. Go to your repository: `https://github.com/Madhu-36/annam-farm-app`
2. Click **Settings** → **Pages**
3. Under **Source**, select `main` branch and `/frontend` folder
4. Click **Save**
5. Your app will be live at: `https://madhu-36.github.io/annam-farm-app/`

> ✅ **Pros:** Free, instant, HTTPS enabled (required for PWA/Service Workers)
> ❌ **Cons:** Frontend only — backend Python API won't run here

---

## Option 2: Netlify Drop (Zero Config)

1. Go to [netlify.com/drop](https://app.netlify.com/drop)
2. Drag and drop the entire `frontend/` folder onto the page
3. Netlify generates a live URL instantly (e.g., `https://random-name.netlify.app`)
4. Optional: Connect to your GitHub repo for auto-deploy on push

> ✅ **Pros:** Instant, free, custom domain support, HTTPS
> ❌ **Cons:** Frontend only

---

## Option 3: Full Stack on Railway / Render (With Python Backend)

For the complete experience with server-side KNN:

### Using Render (Free Tier)

1. Push your full repo to GitHub (already done!)
2. Go to [render.com](https://render.com) and sign up
3. Click **New → Web Service**
4. Connect your GitHub repo `Madhu-36/annam-farm-app`
5. Set **Root Directory** to `backend`
6. Set **Build Command**: `pip install -r requirements.txt`
7. Set **Start Command**: `uvicorn main:app --host 0.0.0.0 --port $PORT`
8. Deploy!

Your API will be live at: `https://annam-farm-app.onrender.com`

Then update `app.js` line:
```javascript
const API_BASE = 'https://annam-farm-app.onrender.com/api';
```

---

## Production Checklist

Before going live, ensure you have:

- [ ] Changed admin credentials from `admin123`
- [ ] Serving over HTTPS (required for Service Workers)
- [ ] Tested on low-end Android devices (Chrome, 3G connection)
- [ ] Verified offline mode works (airplane mode test)
- [ ] Updated `manifest.json` with your custom app name and icon
- [ ] Tested PWA installation on Android home screen
- [ ] Validated all forms submit correctly and store to localStorage

---

## Environment Variables (Backend)

Create a `.env` file in the `backend/` directory:

```env
# Backend Configuration
HOST=0.0.0.0
PORT=8000
DEBUG=False
CORS_ORIGINS=https://madhu-36.github.io

# Dataset
DATA_FILE=data.json
KNN_NEIGHBORS=5
```

---

## Updating the Deployment

Since the repo is on GitHub, updating is simple:

```bash
# Make your changes locally
git add .
git commit -m "feat: your new feature"
git push origin main

# GitHub Pages / Netlify auto-deploys within 1-2 minutes
```

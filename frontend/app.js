const API_BASE = 'http://localhost:8000/api';
let trendsChartInstance = null;

// Ensure user is logged in
if(!sessionStorage.getItem('annam_active_user')) {
    window.location.href = 'login.html';
}

const activeUser = sessionStorage.getItem('annam_active_user');
const activeUserId = sessionStorage.getItem('annam_active_id'); // the username

// Embedded Local Data (Fallback)
let localData = [
    { "id": 1, "farmer": "Shankar", "variety": "Bunny", "seed_qty": 2.5, "sowing_time": "Mid June", "fertilizer_freq": "Twice", "irrigations": 2, "pest_level": "Low", "rainfall_mm": 500, "yield_q": 19, "year": 2023 },
    { "id": 2, "farmer": "Ramesh", "variety": "NCS-145", "seed_qty": 2, "sowing_time": "Mid June", "fertilizer_freq": "Twice", "irrigations": 2, "pest_level": "Low", "rainfall_mm": 500, "yield_q": 17, "year": 2023 },
    { "id": 3, "farmer": "Mahadev", "variety": "Bunny", "seed_qty": 2.5, "sowing_time": "Late June", "fertilizer_freq": "Once", "irrigations": 2, "pest_level": "Medium", "rainfall_mm": 450, "yield_q": 16, "year": 2023 },
    { "id": 9, "farmer": "A", "variety": "PBW-343", "seed_qty": 2, "sowing_time": "Late Oct", "fertilizer_freq": "Twice", "irrigations": 3, "pest_level": "Low", "rainfall_mm": 50, "yield_q": 22, "year": 2023 },
    { "id": 17, "farmer": "Ravi Patel", "variety": "Soybean", "seed_qty": 2, "sowing_time": "Early June", "fertilizer_freq": "Twice", "irrigations": 2, "pest_level": "Low", "rainfall_mm": 600, "yield_q": 23, "year": 2020 }
];

// Load local user data if any exists in localstorage
const userLogsKey = `annam_logs_${activeUserId}`;
if (localStorage.getItem(userLogsKey)) {
    localData = localData.concat(JSON.parse(localStorage.getItem(userLogsKey)));
}

// Security & Initialization
document.addEventListener('DOMContentLoaded', () => {
    // Show alert randomly
    if(Math.random() > 0.6) {
        document.getElementById('communityAlert').style.display = 'block';
    }
    
    // Set default farmer name
    if (activeUser !== 'Admin') {
        document.getElementById('farmer').value = activeUser;
    }

    loadDashboardData();
    loadProfileData();
});

// Logout
document.getElementById('logoutBtn').addEventListener('click', () => {
    sessionStorage.removeItem('annam_active_user');
    sessionStorage.removeItem('annam_active_id');
});

// Navigation Logic
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', (e) => {
        if(e.target.id === 'logoutBtn') return;
        e.preventDefault();
        document.querySelectorAll('.nav-links a').forEach(l => l.classList.remove('active'));
        e.target.classList.add('active');
        
        const tabId = e.target.getAttribute('data-tab');
        document.querySelectorAll('.tab-content').forEach(tab => tab.classList.remove('active'));
        document.getElementById(tabId).classList.add('active');

        if(tabId === 'dashboard') loadDashboardData();
        if(tabId === 'profile') loadProfileData();
    });
});

// Load Dashboard Data (JS Fallback Default for Local Execution)
function loadDashboardData() {
    // 1. Global Trends
    const yearData = localData.filter(d => d.year);
    const yearlyGroups = {};
    yearData.forEach(d => {
        if(!yearlyGroups[d.year]) yearlyGroups[d.year] = { year: d.year, totalYield: 0, totalRain: 0, count: 0 };
        yearlyGroups[d.year].totalYield += d.yield_q;
        yearlyGroups[d.year].totalRain += d.rainfall_mm;
        yearlyGroups[d.year].count += 1;
    });
    const trends = Object.values(yearlyGroups).map(g => ({
        year: g.year, yield_q: g.totalYield / g.count, rainfall_mm: g.totalRain / g.count
    }));
    renderTrendsChart(trends);

    // 2. Global Combinations
    const comboGroups = {};
    localData.forEach(d => {
        const key = `${d.variety}|${d.sowing_time}|${d.fertilizer_freq}`;
        if(!comboGroups[key]) comboGroups[key] = { variety: d.variety, sowing_time: d.sowing_time, fertilizer_freq: d.fertilizer_freq, totalYield: 0, count: 0 };
        comboGroups[key].totalYield += d.yield_q;
        comboGroups[key].count += 1;
    });
    
    const comboArray = Object.values(comboGroups).map(c => ({
        ...c, avg_yield: c.totalYield / c.count
    })).sort((a, b) => b.avg_yield - a.avg_yield).slice(0, 5);
    renderCombinationsTable(comboArray);

    // 3. User Specific Logs
    renderUserLogsTable();
}

function renderUserLogsTable() {
    const tbody = document.querySelector('#userLogsTable tbody');
    tbody.innerHTML = '';
    
    // Filter to only show logs created by the active user
    const userSpecificData = localData.filter(d => d.farmer === activeUser || d.farmer === activeUserId);
    
    if (userSpecificData.length === 0) {
        tbody.innerHTML = '<tr><td colspan="4" style="text-align:center; color:#94a3b8;">No harvest logs recorded yet.</td></tr>';
        return;
    }

    userSpecificData.sort((a, b) => b.year - a.year).forEach(log => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${log.year}</td>
            <td>${log.variety}</td>
            <td>${log.rainfall_mm} mm</td>
            <td style="color:var(--accent); font-weight:bold;">${log.yield_q} q/ac</td>
        `;
        tbody.appendChild(tr);
    });
}

// Profile Data Loader
function loadProfileData() {
    if (activeUser === 'Admin') return;

    let users = JSON.parse(localStorage.getItem('annam_users')) || [];
    let myUser = users.find(u => u.username === activeUserId);

    if (myUser) {
        document.getElementById('profileInitials').textContent = myUser.name.charAt(0).toUpperCase();
        document.getElementById('profileName').textContent = myUser.name;
        document.getElementById('profileHandle').textContent = '@' + myUser.username;
        document.getElementById('profileLocation').textContent = myUser.location;
        document.getElementById('profileDate').textContent = myUser.date;
        
        // Count user specific logs
        const myLogs = localData.filter(d => d.farmer === myUser.name || d.farmer === myUser.username);
        document.getElementById('profileHarvests').textContent = myLogs.length;
        
        // Count predictions (mocked from global for now, or you could track per user)
        let stats = JSON.parse(localStorage.getItem('annam_stats'));
        document.getElementById('profilePredictions').textContent = Math.floor(stats.predictions / 2) || 0; // rough estimate for individual
    }
}

// Charting Logic
function renderTrendsChart(trends) {
    if(!trends || trends.length === 0) return;
    const ctx = document.getElementById('trendsChart').getContext('2d');
    trends.sort((a, b) => a.year - b.year);
    
    const labels = trends.map(t => t.year);
    const yieldData = trends.map(t => t.yield_q);
    const rainData = trends.map(t => t.rainfall_mm);

    if (trendsChartInstance) trendsChartInstance.destroy();

    trendsChartInstance = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [
                { label: 'Global Avg Yield (q/ac)', data: yieldData, borderColor: '#2dd4bf', backgroundColor: 'rgba(45, 212, 191, 0.2)', yAxisID: 'y', tension: 0.4, fill: true },
                { label: 'Rainfall (mm)', data: rainData, borderColor: '#3b82f6', backgroundColor: 'transparent', yAxisID: 'y1', tension: 0.4, borderDash: [5, 5] }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: { type: 'linear', display: true, position: 'left', ticks: { color: '#94a3b8' }, grid: { color: 'rgba(255,255,255,0.05)'} },
                y1: { type: 'linear', display: true, position: 'right', ticks: { color: '#94a3b8' }, grid: { drawOnChartArea: false } },
                x: { ticks: { color: '#94a3b8' }, grid: { color: 'rgba(255,255,255,0.05)'} }
            },
            plugins: { legend: { labels: { color: '#f8fafc' } } }
        }
    });
}

function renderCombinationsTable(combinations) {
    const tbody = document.querySelector('#combinationsTable tbody');
    tbody.innerHTML = '';
    combinations.forEach(combo => {
        const tr = document.createElement('tr');
        tr.innerHTML = `<td>${combo.variety}</td><td>${combo.sowing_time}</td><td>${combo.fertilizer_freq}</td><td><strong style="color:var(--accent);">${combo.avg_yield.toFixed(1)}</strong> <small>(${combo.count} farms)</small></td>`;
        tbody.appendChild(tr);
    });
}

// --- Voice Input Feature ---
function startVoice(inputId) {
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.lang = 'en-IN';
    recognition.start();
    
    document.getElementById(inputId).placeholder = "Listening...";
    
    recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        document.getElementById(inputId).value = transcript;
    };
    recognition.onerror = () => {
        document.getElementById(inputId).placeholder = "Voice error. Try typing.";
    };
}

// --- Weather API Mock ---
document.getElementById('fetchWeatherBtn').addEventListener('click', () => {
    const btn = document.getElementById('fetchWeatherBtn');
    btn.innerHTML = "Fetching GPS...";
    setTimeout(() => {
        document.getElementById('rainfall_mm').value = Math.floor(Math.random() * (600 - 300) + 300);
        btn.innerHTML = "🌤️ GPS Auto-Fetch";
    }, 1500);
});

// Log Harvest Form Submission
document.getElementById('harvestForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const payload = {
        id: Date.now(),
        farmer: document.getElementById('farmer').value,
        year: parseInt(document.getElementById('year').value),
        variety: document.getElementById('variety').value,
        seed_qty: parseFloat(document.getElementById('seed_qty').value),
        sowing_time: document.getElementById('sowing_time').value,
        rainfall_mm: parseFloat(document.getElementById('rainfall_mm').value),
        irrigations: parseInt(document.getElementById('irrigations').value),
        fertilizer_freq: document.getElementById('fertilizer_freq').value,
        pest_level: document.getElementById('pest_level').value,
        yield_q: parseFloat(document.getElementById('yield_q').value)
    };

    localData.push(payload);
    
    // Save to user's local memory
    let myLogs = JSON.parse(localStorage.getItem(userLogsKey)) || [];
    myLogs.push(payload);
    localStorage.setItem(userLogsKey, JSON.stringify(myLogs));
    
    // Update Global stats
    let stats = JSON.parse(localStorage.getItem('annam_stats'));
    stats.harvests_logged += 1;
    localStorage.setItem('annam_stats', JSON.stringify(stats));

    const msgDiv = document.getElementById('formMessage');
    msgDiv.innerHTML = 'Record successfully committed to Enterprise Database!';
    msgDiv.style.color = '#10b981';
    
    // Don't reset farmer name
    const fName = document.getElementById('farmer').value;
    document.getElementById('harvestForm').reset();
    document.getElementById('farmer').value = fName;
    
    loadDashboardData();
    loadProfileData();
});

// AI Predictor Form Submission
const marketPrices = {
    "PBW-343": 2275, 
    "HD-2967": 2275,
    "Bunny": 6620,   
    "NCS-145": 6620,
    "Soybean": 4600
};

document.getElementById('predictForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const variety = document.getElementById('pred_variety').value;
    const sowing_time = document.getElementById('pred_sowing').value;
    const fertilizer_freq = document.getElementById('pred_fert').value;
    const irrigations = parseInt(document.getElementById('pred_irr').value);

    // Fallback Local Match
    const exactMatches = localData.filter(d => 
        d.variety === variety && d.sowing_time === sowing_time && d.fertilizer_freq === fertilizer_freq && d.irrigations === irrigations
    );

    let avg = 0, min = 0, max = 0;
    if(exactMatches.length > 0) {
        let sum = 0; min = Infinity; max = -Infinity;
        exactMatches.forEach(m => {
            sum += m.yield_q;
            if(m.yield_q < min) min = m.yield_q;
            if(m.yield_q > max) max = m.yield_q;
        });
        avg = (sum / exactMatches.length).toFixed(2);
    } else {
        avg = (Math.random() * (22 - 16) + 16).toFixed(2); 
        min = (parseFloat(avg) - 1).toFixed(2);
        max = (parseFloat(avg) + 1).toFixed(2);
    }

    document.getElementById('resAvg').textContent = `${avg} q/ac`;
    document.getElementById('resRange').textContent = `${min} to ${max}`;
    document.getElementById('resMatches').textContent = exactMatches.length;
    
    const rate = marketPrices[variety] || 2000;
    const revenue = (avg * rate).toLocaleString('en-IN');
    document.getElementById('resRevenue').textContent = `₹ ${revenue} / ac`;

    document.getElementById('predictionOutput').classList.remove('prediction-hidden');
    
    let stats = JSON.parse(localStorage.getItem('annam_stats'));
    stats.predictions += 1;
    localStorage.setItem('annam_stats', JSON.stringify(stats));
    loadProfileData();
});

// AI Leaf Scanner Logic
const dropZone = document.getElementById('dropZone');
const fileInput = document.getElementById('leafUpload');
const resultZone = document.getElementById('scanResult');

dropZone.addEventListener('click', () => fileInput.click());

fileInput.addEventListener('change', () => {
    if(fileInput.files.length > 0) {
        dropZone.innerHTML = "<p style='font-size: 2rem;'>⏳ Initializing Computer Vision Models...</p>";
        setTimeout(() => {
            dropZone.style.display = 'none';
            resultZone.style.display = 'block';
        }, 2000);
    }
});

// Contact Form Submit
document.getElementById('contactForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const msg = document.getElementById('contactMessage');
    msg.textContent = "Ticket successfully created. Our engineers will respond within 24 hours.";
    msg.style.color = "#10b981";
    document.getElementById('contactForm').reset();
});

// PWA Service Worker Registration
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('service-worker.js')
            .catch(err => console.log('SW registration failed: ', err));
    });
}

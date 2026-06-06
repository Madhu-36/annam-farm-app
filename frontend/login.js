// Tab Switching Logic
document.getElementById('tab-login').addEventListener('click', () => switchTab('login'));
document.getElementById('tab-register').addEventListener('click', () => switchTab('register'));

function switchTab(tab) {
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.auth-form').forEach(form => form.classList.remove('active'));
    
    document.getElementById(`tab-${tab}`).classList.add('active');
    document.getElementById(`${tab}Form`).classList.add('active');
}

// Initialize User DB in LocalStorage if not exists
if (!localStorage.getItem('annam_users')) {
    localStorage.setItem('annam_users', JSON.stringify([]));
}
if (!localStorage.getItem('annam_stats')) {
    localStorage.setItem('annam_stats', JSON.stringify({ logins: 0, predictions: 0, harvests_logged: 0 }));
}

// Password Validation Logic
function validatePassword(password) {
    // Min 8 chars, 1 number, 1 special character
    const re = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;
    return re.test(password);
}

// Handle Registration
document.getElementById('registerForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('regName').value;
    const location = document.getElementById('regLocation').value;
    const user = document.getElementById('regUser').value;
    const pass = document.getElementById('regPass').value;
    const passConfirm = document.getElementById('regPassConfirm').value;
    const msg = document.getElementById('registerMessage');

    // Confirm Password
    if (pass !== passConfirm) {
        msg.textContent = "Passwords do not match.";
        msg.style.color = "#ef4444"; // red-500
        return;
    }

    // Password Strength Validation
    if (!validatePassword(pass)) {
        msg.textContent = "Password must be at least 8 chars, contain 1 number & 1 special character.";
        msg.style.color = "#ef4444";
        return;
    }

    let users = JSON.parse(localStorage.getItem('annam_users'));
    
    if (users.find(u => u.username === user) || user === 'admin') {
        msg.textContent = "Username already taken.";
        msg.style.color = "#ef4444";
        return;
    }

    users.push({ name, username: user, password: pass, location, date: new Date().toLocaleDateString() });
    localStorage.setItem('annam_users', JSON.stringify(users));
    
    msg.textContent = "Account created successfully! Please sign in.";
    msg.style.color = "#10b981"; // emerald-500
    document.getElementById('registerForm').reset();
    setTimeout(() => switchTab('login'), 2000);
});

// Handle Login
document.getElementById('loginForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const user = document.getElementById('loginUser').value;
    const pass = document.getElementById('loginPass').value;
    const msg = document.getElementById('loginMessage');

    // Admin Check
    if (user === 'admin' && pass === 'admin123') {
        sessionStorage.setItem('annam_active_user', 'Admin');
        sessionStorage.setItem('annam_active_id', 'admin');
        window.location.href = 'admin.html';
        return;
    }

    // User Check
    let users = JSON.parse(localStorage.getItem('annam_users'));
    let found = users.find(u => u.username === user && u.password === pass);

    if (found) {
        sessionStorage.setItem('annam_active_user', found.name);
        sessionStorage.setItem('annam_active_id', found.username);
        
        // Update stats
        let stats = JSON.parse(localStorage.getItem('annam_stats'));
        stats.logins += 1;
        localStorage.setItem('annam_stats', JSON.stringify(stats));

        msg.textContent = "Authentication successful. Redirecting...";
        msg.style.color = "#10b981";
        setTimeout(() => window.location.href = 'index.html', 1000);
    } else {
        msg.textContent = "Invalid credentials.";
        msg.style.color = "#ef4444";
    }
});

// PWA Service Worker Registration
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('service-worker.js');
    });
}

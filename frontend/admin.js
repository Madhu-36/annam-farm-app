document.addEventListener('DOMContentLoaded', () => {
    // Security check
    if(sessionStorage.getItem('annam_active_user') !== 'Admin') {
        alert("Unauthorized access. Redirecting to login.");
        window.location.href = 'login.html';
        return;
    }

    loadAdminData();
});

function loadAdminData() {
    // Load Stats
    let stats = JSON.parse(localStorage.getItem('annam_stats')) || { logins: 0, predictions: 0, harvests_logged: 0 };
    document.getElementById('statLogins').textContent = stats.logins;
    document.getElementById('statHarvests').textContent = stats.harvests_logged;
    document.getElementById('statPredictions').textContent = stats.predictions;

    // Load Users
    let users = JSON.parse(localStorage.getItem('annam_users')) || [];
    const tbody = document.querySelector('#usersTable tbody');
    tbody.innerHTML = '';
    
    if(users.length === 0) {
        tbody.innerHTML = '<tr><td colspan="4">No users registered yet.</td></tr>';
        return;
    }

    users.forEach(u => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${u.name}</td>
            <td>@${u.username}</td>
            <td>${u.location}</td>
            <td>${u.date}</td>
        `;
        tbody.appendChild(tr);
    });
}

document.getElementById('logoutBtn').addEventListener('click', () => {
    sessionStorage.removeItem('annam_active_user');
});

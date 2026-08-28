const CACHE_NAME = 'annam-farm-v3';
const ASSETS_TO_CACHE = [
    './',
    './index.html',
    './login.html',
    './admin.html',
    './styles.css',
    './login.css',
    './app.js',
    './login.js',
    './admin.js',
    './manifest.json',
    './ai_bg.png',
    'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap',
    'https://cdn.jsdelivr.net/npm/chart.js'
];

// Install: Cache all assets
self.addEventListener('install', (event) => {
    console.log('[SW] Installing Annam Farm Intelligence v3...');
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                console.log('[SW] Caching core assets');
                return cache.addAll(ASSETS_TO_CACHE);
            })
            .then(() => {
                console.log('[SW] All assets cached. App is offline-ready!');
                return self.skipWaiting();
            })
            .catch((err) => {
                console.error('[SW] Cache failed:', err);
            })
    );
});

// Activate: Clear old caches
self.addEventListener('activate', (event) => {
    console.log('[SW] Activating new service worker...');
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames
                    .filter((name) => name !== CACHE_NAME)
                    .map((name) => {
                        console.log('[SW] Deleting old cache:', name);
                        return caches.delete(name);
                    })
            );
        }).then(() => {
            console.log('[SW] Activated! Now serving from cache:', CACHE_NAME);
            return self.clients.claim();
        })
    );
});

// Fetch: Cache-first strategy with network fallback
self.addEventListener('fetch', (event) => {
    // Skip non-GET requests and chrome-extension requests
    if (event.request.method !== 'GET' || event.request.url.startsWith('chrome-extension')) {
        return;
    }

    event.respondWith(
        caches.match(event.request)
            .then((cachedResponse) => {
                if (cachedResponse) {
                    // Serve from cache (offline support)
                    return cachedResponse;
                }

                // Not in cache — fetch from network
                return fetch(event.request)
                    .then((networkResponse) => {
                        // Cache the new response for future offline use
                        if (networkResponse && networkResponse.status === 200) {
                            const responseClone = networkResponse.clone();
                            caches.open(CACHE_NAME).then((cache) => {
                                cache.put(event.request, responseClone);
                            });
                        }
                        return networkResponse;
                    })
                    .catch(() => {
                        // If both cache and network fail, show offline page
                        if (event.request.destination === 'document') {
                            return caches.match('./index.html');
                        }
                    });
            })
    );
});

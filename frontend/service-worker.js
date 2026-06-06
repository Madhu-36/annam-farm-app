const CACHE_NAME = 'annam-farm-v1';
const urlsToCache = [
  './login.html',
  './login.css',
  './login.js',
  './index.html',
  './styles.css',
  './app.js',
  './admin.html',
  './admin.js',
  './manifest.json',
  'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Cache hit - return response
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});

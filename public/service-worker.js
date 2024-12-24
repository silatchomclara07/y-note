const CACHE_NAME = 'invoice-management-v1';
const urlsToCache = [
    '/',
    '/index.html',
    '/css/custom.css',
    '/js/main.js',
    '/js/app.js',
    '/assets/images/logo.png',
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                console.log('Opened cache');
                return cache.addAll(urlsToCache);
            })
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                if (response) {
                    return response;
                }
                return fetch(event.request);
            })
    );
});
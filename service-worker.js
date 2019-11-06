const FILES_TO_CACHE = ['./index.html', './main.js', './style.css'];

const CACHE_NAME = 'pwa-app-cache';

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            console.log('[ServiceWorker] Pre-caching offline page');
            return cache.addAll(FILES_TO_CACHE);
        })
    );
});

self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(keyList => {
            return Promise.all(
                keyList.map(key => {
                    if (key !== FILES_TO_CACHE) {
                        console.log('[ServiceWorker] Removing old cache', key);
                        return caches.delete(key);
                    }
                })
            );
        })
    );
});

self.addEventListener('fetch', event => {

    if (event.request.method != 'GET') return;

    event.respondWith(async function () {
        const cache = await caches.open(CACHE_NAME);
        const cachedResponse = await cache.match(event.request);

        if (cachedResponse) {
            event.waitUntil(cache.add(event.request));

            console.log('[Service Worker] Fetched resource ' + event.request.url);
            return cachedResponse;
        }

        console.log('[Service Worker] Fetched resource ' + event.request.url);
        return fetch(event.request);
    }());
});
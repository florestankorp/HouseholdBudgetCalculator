const FILES_TO_CACHE = ["./index.html", "./main.js", "./style.css"];

const CACHE_NAME = "pwa-app-cache";

self.addEventListener("install", event => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            console.log("[ServiceWorker] Pre-caching offline page");
            return cache.addAll(FILES_TO_CACHE);
        })
    );
});

self.addEventListener("activate", event => {
    event.waitUntil(
        caches.keys().then(keyList => {
            return Promise.all(
                keyList.map(key => {
                    if (key !== FILES_TO_CACHE) {
                        console.log("[ServiceWorker] Removing old cache", key);
                        return caches.delete(key);
                    }
                })
            );
        })
    );
});

self.addEventListener("fetch", event => {
    if (event.request.mode !== "navigate") {
        // Not a page navigation, bail.
        return;
    }
    event.respondWith(
        fetch(event.request).catch(() =>
            caches.open(CACHE_NAME).then(cache => {
                return cache.match("index.html");
            })
        )
    );
});
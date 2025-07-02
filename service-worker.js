const cacheName = 'covid19-awareness-v1';
const assetsToCache = [
  '/',
  '/index.html',
  '/assets/css/style.css',
  '/assets/js/script.js',
  '/manifest.json',
  '/assets/images/favicon.svg',
  '/assets/images/logo.svg',
  // Add other assets (images, fonts) as needed
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(cacheName).then(cache => cache.addAll(assetsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(res => res || fetch(event.request))
  );
});
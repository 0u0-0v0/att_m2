const CACHE_NAME = 'attendance-pro-offline-v1';

// ✅ 모든 부품을 내 폴더에서 가져오도록 리스트 작성
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './js/react.js',
  './js/react-dom.js',
  './js/babel.js',
  './js/tailwind.js',
  './css/all.min.css'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
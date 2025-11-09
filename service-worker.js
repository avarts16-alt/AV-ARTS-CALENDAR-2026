self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('av-arts-cache').then((cache) => {
      return cache.addAll([
        './',
        './index.html',
        './style.css',
        './manifest.json',
        './av.jpg',
        './AV_ARTS_CALENDAR_2026.pdf'
      ]);
    })
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request))
  );
});

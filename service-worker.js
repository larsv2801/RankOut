self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('v1').then((cache) => {
      return cache.addAll([
        '/RankOut/index.html',
        '/RankOut/rankoutlogo192.png',
        '/RankOut/rankoutlogo144.png',
        '/RankOut/rankoutlogo512.png'
      ]);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});

const CACHE='pangeran-str-v1';
const ASSETS=['./','./index.html','./manifest.json','./assets/pangeran-reference.png','./assets/qris-dana.jpg','./assets/satu-dalam-ikatan.mp3'];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS))));
self.addEventListener('fetch',e=>e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request))));

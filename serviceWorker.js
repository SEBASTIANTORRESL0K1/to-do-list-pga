const staticDevCoffee = "to-do-list";
const assets = [
  "./",
  "./index.html",
  "./css/style.css",
  "./js/app.js",
  "./icons/prain.webp",
  "./manifest.json"
];

self.addEventListener("install", (installEvent) => {
  installEvent.waitUntil(
    caches.open(staticDevCoffee).then((cache) => {
      cache.addAll(assets);
    })
  );
});
self.addEventListener("fetch", (fetchEvent) => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then((res) => {
      return res || fetch(fetchEvent.request);
    })
  );
});

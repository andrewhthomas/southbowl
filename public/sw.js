// Offline support. The league bowls in a basement with bad signal, so anything
// visited once should still open with no connection at all.
//
// Bump CACHE when the strategies below change; old caches are dropped on activate.
const CACHE = 'southbowl-v1';

// Stable unhashed routes for the current season: the shell worth having before
// the first visit to each page.
const SHELL = ['/', '/schedule', '/standings', '/teams', '/bowlers', '/statistics'];

self.addEventListener('install', event => {
  event.waitUntil(
    caches
      .open(CACHE)
      // One at a time: a single missing route shouldn't fail the whole install.
      .then(cache =>
        Promise.allSettled(SHELL.map(url => cache.add(new Request(url, { cache: 'reload' }))))
      )
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches
      .keys()
      .then(keys => Promise.all(keys.filter(key => key !== CACHE).map(key => caches.delete(key))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  const { request } = event;
  if (request.method !== 'GET') return;

  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;

  // Build output is content-hashed and immutable, so a hit is always current.
  if (url.pathname.startsWith('/_astro/')) {
    event.respondWith(cacheFirst(request, request));
    return;
  }

  // Pages: try the network first so a newly added week shows up right away.
  // Keyed by pathname, so ?week=3 and ?week=4 share one cached page.
  if (request.mode === 'navigate' || !/\.[a-z0-9]+$/i.test(url.pathname)) {
    event.respondWith(networkFirst(request, new Request(url.pathname)));
    return;
  }

  // Icons, the manifest, anything else static.
  event.respondWith(cacheFirst(request, request));
});

async function cacheFirst(request, key) {
  const cache = await caches.open(CACHE);
  const cached = await cache.match(key);
  if (cached) return cached;

  const response = await fetch(request);
  if (response.ok) cache.put(key, response.clone());
  return response;
}

async function networkFirst(request, key) {
  const cache = await caches.open(CACHE);
  try {
    const response = await fetch(request);
    if (response.ok) cache.put(key, response.clone());
    return response;
  } catch (err) {
    // Offline: this page if it has been seen, otherwise the dashboard.
    const cached = (await cache.match(key)) || (await cache.match('/'));
    if (cached) return cached;
    throw err;
  }
}

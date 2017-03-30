/**
 * Created by bnjm on 3/30/17.
 */
importScripts('./sw-toolbox.js');



self.addEventListener('install', event => {
  console.log("SW installed");
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  console.log("SW activated")
});

self.addEventListener('fetch', event => {
  console.log("fetching: " + event.request.url);

  if (!navigator.onLine) {
    event.respondWith(new Response('<h1>Offline...</h1>', {headers: {'Content-Type': 'text/html'}}));
  } else {
    event.respondWith(fetch(event.request));
  }
});

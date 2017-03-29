/**
 * Created by bnjm on 3/30/17.
 */


importScripts('../../../node_modules/sw-toolbox/sw-toolbox.js');


const CACHENAME = "Tethys Cache";

const TOCACHE = [
  '/',
  '/#/',
  'main.build.js'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHENAME).then(cache => {
      return cache.addAll(TOCACHE);
    })
  );
});


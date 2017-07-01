var CACHE_NAME = 'my-site-cache-v1';
var urlsToCache = [
  '/',
  'assets/css/preload.min.css',
  'assets/css/plugins.min.css',
  'assets/css/style.light-blue-500.min.css',
  'assets/js/plugins.min.js',
  'assets/js/app.min.js',
  'assets/js/index.js'
];

self.addEventListener('install', function(event) {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        return cache.addAll(urlsToCache);
      })
  );  
});

self.addEventListener('activate', function(event) {
  console.log('Finally active. Ready to start serving content!');  
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Cache hit - return response
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});

/*self.addEventListener('push', function(event) {  
  var title = 'Notification';  
  var body = 'Masuk request dari Achmad Novandy.';  
  var icon = 'img/icons.png';  
  var tag = 'simple-push-example-tag';
  event.waitUntil(  
    self.registration.showNotification(title, {  
      body: body,  
      icon: icon,  
      tag: tag  
    })  
  );  
})*/
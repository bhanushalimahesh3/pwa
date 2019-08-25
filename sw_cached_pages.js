const cacheName = 'v1';

const cacheAssets = [
'js/app.js',
'js/bootstrap.js',
'js/jquery.js',
'stylesheet/bootstrap.css',
'stylesheet/custom.css',
'about.html',
'index.html'
];

// call install event
self.addEventListener('install', function(e){
	
	e.waitUntil(
		caches
		.open(cacheName)
		.then(function(cache){
			
			cache.addAll(cacheAssets);
		})
		.then(function(){
			self.skipWaiting();
		})
		);

});

// call activate event
/*self.addEventListener('activate', function(e){
	console.log(`service worker activated`);
});*/

self.addEventListener('fetch', event => {
  
  event.respondWith(
    caches.match(event.request)
    .then(response => {
      if (response) {        
        return response;
      }

      return fetch(event.request).then(response => {

				  // TODO 5 - Respond with custom 404 page
				  return caches.open(cacheName).then(cache => {
				    cache.put(event.request, response.clone());
				    return response;
				  });
				});



    }).catch(error => {
    	console.log(`error ${error}`);
      // TODO 6 - Respond with custom offline page

    })
  );
});
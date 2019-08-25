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
	console.log(`service worker installed`);
	e.waitUntil(
		caches
		.open(cacheName)
		.then(function(cache){
			console.log('service worker caching files');
			cache.addAll(cacheAssets);
		})
		.then(function(){
			self.skipWaiting();
		})
		);

});

// call activate event
self.addEventListener('activate', function(e){
	console.log(`service worker activated`);
});
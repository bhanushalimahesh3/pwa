if(navigator.serviceWorker) {
	window.addEventListener('load', function() {
		// register service worker
		navigator.serviceWorker
		.register('sw_cached_pages.js')
		.then(function(response) {
			console.log('service worker registered');
		})
		.catch(function(error){
			console.log(`error ${error}`);
		});
	});
	
}
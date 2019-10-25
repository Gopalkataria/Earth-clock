
//     The MIT License

//          Copyright(c) 2019 Gopal Kataria


//      Permission is hereby granted, free of charge, to any person
//      obtaining a copy of this software and associated documentation
//      files(the "Software"), to deal in the Software without
//      restriction, including without limitation the rights to use,
//          copy, modify, merge, publish, distribute, sublicense, and / or sell
//      copies of the Software, and to permit persons to whom the
//      Software is furnished to do so, subject to the following
//      conditions:

//      The above copyright notice and this permission notice shall be
//      included in all copies or substantial portions of the Software.

//      THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
//          EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
//      OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
//      NONINFRINGEMENT.IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
//      HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
//          WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
//      FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
//      OTHER DEALINGS IN THE SOFTWARE





const Cache_name = "com.crossbox.cache.V_0.1";
const Cache_items = [ // items to cache 
    '/',
    'index.html',
    '/main.js',
    '/res/main.css',
    '/res/timezones.js',
    '/404.html'


];

const Static_cache_name = "com.cossbox.static_cache.V_0.1"


self.addEventListener('install', function (event) {
    // Perform install steps
    console.log("[ServiceWorker] Caching Items")
    event.waitUntil(
        caches.open(Cache_name)
            .then(function (cache) {
                console.log('[ServiceWorker] Cached all Items' + Cache_items);
                return cache.addAll(Cache_items);
            })
    );
    self.skipWaiting()
});


//deleting old cache 
self.addEventListener('activate', (evt) => {
    evt.waitUntil(
        caches.keys().then((keyList) => {
            return Promise.all(keyList.map((key) => {
                if (key !== Cache_name || key !== Static_cache_name) {
                    console.log('[ServiceWorker] Removing old cache', key);
                    return caches.delete(key);
                }
            }));
        })
    );

    self.clients.claim();
})


// returning offline copy even if online 

self.addEventListener('fetch', event => {
    console.log('[ServiceWorker] Fetch event for ', event.request.url);
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                if (response) {
                    console.log('[ServiceWorker] Found cache ', event.request.url);
                    return response;
                }
                console.log('[ServiceWorker] Network request for ', event.request.url);
                return fetch(event.request)
                    .then(response => {
                        return caches.open(Static_cache_name)
                            .then(cache => {
                                cache.put(event.request.url, response.clone());
                                console.log("[ServiceWorker] cached unavailable resource  " + event.request.url)
                                return response
                            });
                    });

            }).catch(error => {
                caches.open(Cache_name).then(cache => {
                    console.log("[ServiceWorker]  error 404  " + error);
                    return cache.match('/404.html');
                });


            })
    );
});





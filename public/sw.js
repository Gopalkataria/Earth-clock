
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

'use strict';



// This is the service worker with the Cache-first network

// Add this below content to your HTML page, or add the js file to your page at the very top to register service worker



const CACHE = "com.crossbox.cache.V_1.10.107";
const precacheFiles = [ // items to cache
    '/',
    'index.html',
    '/main.js',
    '/res/main.css',
    '/res/timezones.js',
    '/404.html'



];


// TODO: replace the following with the correct offline fallback page i.e.: const offlineFallbackPage = "offline.html";
const offlineFallbackPage = "/offline.html";

// Install stage sets up the offline page in the cache and opens a new cache
self.addEventListener("install", function (event) {
    console.log("[PWA Builder] Install Event processing");

    event.waitUntil(
        caches.open(CACHE).then(function (cache) {
            console.log("[PWA Builder] Cached offline page during install");

            if (offlineFallbackPage === "/offline.html") {
                return cache.add(new Response("TODO: Update the value of the offlineFallbackPage constant in the serviceworker."));
            }

            return cache.add(offlineFallbackPage);
        })
    );
});

// If any fetch fails, it will look for the request in the cache and serve it from there first
self.addEventListener("fetch", function (event) {
    if (event.request.method !== "GET") return;

    event.respondWith(
        fetch(event.request)
            .then(function (response) {
                console.log("[PWA Builder] add page to offline cache: " + response.url);

                // If request was success, add or update it in the cache
                event.waitUntil(updateCache(event.request, response.clone()));

                return response;
            })
            .catch(function (error) {
                console.log("[PWA Builder] Network request Failed. Serving content from cache: " + error);
                return fromCache(event.request);
            })
    );
});

function fromCache(request) {
    // Check to see if you have it in the cache
    // Return response
    // If not in the cache, then return the offline page
    return caches.open(CACHE).then(function (cache) {
        return cache.match(request).then(function (matching) {
            if (!matching || matching.status === 404) {
                // The following validates that the request was for a navigation to a new document
                if (request.destination !== "document" || request.mode !== "navigate") {
                    return Promise.reject("no-match");
                }

                return cache.match(offlineFallbackPage);
            }

            return matching;
        });
    });
}

function updateCache(request, response) {
    return caches.open(CACHE).then(function (cache) {
        return cache.put(request, response);
    });
}

//Here you find install and activate and fetch events
//register event is located in app.js file
const staticCache = 'Static-cache-v1'
const dynamicCache = 'Dynamic-cache-v1' //called V1 to change to V2 and forward when updating app

const assets = [
    "/",
    "/html/FunFinder.html",
    "/html/fallback.html",
    "/app.js",
    "/js/ui.js",
    "/js/materialize.min.js",
    "/css/assignment2.css",
    "/css/materialize.min.css",
    "https://fonts.googleapis.com/icon?family=Material+Icons",
];

const limitCacheSize = (name, size) => {
    caches.open(name).then((cache) => {
        cache.keys().then((keys) => {
            if (keys.length > size) {

                cache.delete(keys[0]).then(limitCacheSize(name, size));
            }
        })
    })

};

self.addEventListener("install", function(event) {
    //fires when the browswer installs the app
    //here were just logging the event and the contents of the object passed to the event
    //the puropse of this event is to give the service worker a place to setup the local
    //environment after the installation completes.
    console.log(`SW: Event fired: ${event.type}`);
    //used to save data for offline use
    event.waitUntil(
        caches.open(staticCache).then(function(cache) {
            console.log("SW: Precaching App Shell");
            //cache.add('app.js');
            // cache.addAll(assets);
            cache.addAll(assets);
        })
    );
});

self.addEventListener("activate", function(event) {
    //fires when the service worker completes the installation installation
    //its a place for the service worker to clean up from
    //previous service worker versions
    console.log(`SW:Event fired ${event.type}`);

    event.waitUntil(
        caches.keys().then((keys) => {
            return Promise.all(
                keys.filter((key) => key !== staticCache).map((key) => caches.delete(key))
            );

        })
    );
});

self.addEventListener("fetch", function(event) {
    //fires when the app requests a resource (file or data)
    console.log(`SW: Fetching ${event.request.url}`);
    //next go get the requested resource from the network
    event.respondWith(
        //REMEMBER: request is the key, and response is the value
        caches.match(event.request).then((response) => {
            return (response || fetch(event.request).then((fetchRes) => {
                return caches.open(dynamicCache).then((cache) => {
                    cache.put(event.request.url, fetchRes.clone());
                    limitCacheSize(dynamicCache, 3);
                    return fetchRes;
                });

            }));
        })
        .catch(() => caches.match('/html/fallback.html'))
    );

});
# Custom Hooks

# What is Code Splitting, Dynamic Bundling, chunking and etc ???
* Bundling is great, but as our app grows, our bundle will grow too. Especially if you are including large third-party libraries. You need to keep an eye on the code you are including in our bundle so that you don’t accidentally make it so large that our app takes a long time to load.

* To avoid winding up with a large bundle, it’s good to get ahead of the problem and start “splitting” our bundle. Code-Splitting is a feature supported by bundlers like Webpack, Rollup and Browserify (via factor-bundle) which can create multiple bundles that can be dynamically loaded at runtime.

* Code-splitting our app can help you “lazy-load” just the things that are currently needed by the user, which can dramatically improve the performance of our app. While you haven’t reduced the overall amount of code in our app, you’ve avoided loading code that the user may never need, and reduced the amount of code needed during the initial load.

# why we need lazy loading ???
* Whenever we are building a large scale application then our bundles will grow, and it will take a long time to load. To solve this problem we need lazy loading which will help us on demand loading, i.e. when user wants the specific part of the application then only loads that component and it will create a new bundle file for us.

# What is Suspense in react ???
* Suspense is a component which is given by react. Basically when an user demands a specific part of the application then we do lazy loading which will help us on demand loading. And React is so fast in dom manipulation that it will take a very less amount of time to load the specified part of the application. The timeframe between the request and the response is handled by Suspense component. It will hold the until the response has come. In Suspense component, there is a props fallback, which is basically a loading functionality. Between the request and the response timeframe it will show a loading indicator so that user can understand that something is coming on his/her request.
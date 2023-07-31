# Note:- If no dependency is present in the useEffect, then the useEffect will be called on every render.
# Note:- If inside the useEffect the empty array is present, then the useEffect will be called on initial render (just once).
# Note:- If the dependency array is not empty, then whenever the dependency changes, the useEffect will be called.
# Note:- The default behavior of the useEffect is it will be called on every initial render.

* createBrowserRouter in reacr-router-dom takes a list of configuration where paths and element will present where path will be the route and element will be the component.

* whatever router configuration we create using createBrowserRouter, RouterProvider will help us to implement that routes in our application.
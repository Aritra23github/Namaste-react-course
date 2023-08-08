# Note:- If no dependency is present in the useEffect, then the useEffect will be called on every render.
# Note:- If inside the useEffect the empty array is present, then the useEffect will be called on initial render (just once).
# Note:- If the dependency array is not empty, then whenever the dependency changes, the useEffect will be called.
# Note:- The default behavior of the useEffect is it will be called on every initial render.

# Note:- The useState set method is not reflecting a change immediately, the reason is:-
* The main issue here is not just the asynchronous nature but the fact that state values are used by functions based on their current closures, and state updates will reflect in the next re-render by which the existing closures are not affected, but new ones are created.

* createBrowserRouter in react-router-dom takes a list of configuration where paths and element will present where path will be the route and element will be the component.

* whatever router configuration we create using createBrowserRouter, RouterProvider will help us to implement that routes in our application.

* useRouteError() is a hook which is provided by react-router-dom. This hook will used to show error during an action loader or rendering any routes.

# Note:- Never ever use anchor tags inside react project, because in react whenever we will use anchor tags then by clicking on the anchor tag the whole application or page will be reloaded and which is not a good for performance in our application. Instead of using anchor tags we should use Link component which is provided by react-router-dom. While using Link component the whole application or page will not be reloaded, it will only load the exact component where we want to navigate.

# How many types of routing is present ???
* There are two different types of routing is present

* First one is Client side routing i.e. when we navigate between pages inside our application then that pages or components is present there very first time. It will not make any network requests, this is called the client side routing. In React we are using Client side routing.

* Second one is Server side routing i.e. when we navigate between pages inside our application then that pages or components are not present. It will make a network request to load the web page.
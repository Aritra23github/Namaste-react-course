# Note:- React and Redux are two different libraries, they are not same and it is not mandatory to use redux in react.

# Redux Theory:-
* Suppose we are making a cart system in our application and for that we are taking redux into our project. 
* In Redux we have multiple slices inside redux
* Suppose while clicking on ADD button we will see cart count. Just clicking on ADD button our redux slice will not update.
* For updating redux slice first when an user clicks on ADD button then we have to dispatch an action, then it will call an reducer function then it will update the redux slice store. This is write process of our cart slice.
* For reading the data from the cart slice redux use a selector. This phenomenon is called SUBSCRIBING TO THE STORE. Basically it will sync data between the store and component. Whenever the store is updated then data will be reflected to our component. Subscription the data is done by selector.


* For creating store using redux we have to use configureStore() method. And for providing store to our application, we need to use Provider component which will take store as props, which will imported from the react-redux library. If we want to provide store data to some specific component then we need to wrap Provider component with the specified component.


* To write value inside our redux store we need to call an action which will call a reducer and this will do by useDisptach() hook, which will return a function and takes a reducer function. Ex:-

const dispatch = useDisptach();
dispatch(reducerFunction());

Here reducerFunction is an action and reducerFunction() is a reducer which will help us to update our store.

* Now we have to read data from the redux store, for that we have to subscribe our component with our store. 

* To access the store data all around our application we need to use a component which is called Provider component. This component takes store as props, whatever we create using configureStore() method, we have to pass that as a props in Provider component.

* Now for using data in our component we need to use useSelector hook. We need to fetch which part of our store we want to use, otherwise it will effect our application performance. Example:-

const items = useSelector((store) => store.cart.items);

* Basically useSelector returns whole store, if we keep whole store then it will effect our performance of our application.

const items = useSelector((store) => store);
const cartItems = items.cart.items;

This code will effect our performance of our application.


* A slice is made of multiple reducers, so inside slice when we write createSlice method, inside this createSlice method we write reducers and we export one reducer from the slice, where reducer is the consists of multiple reducers inside the slice.

* In configureStore method we write reducer because the whole reducer is consists of multiple reducers.


* In older versions of redux we can't mutate state directly, but in newer versions of redux we have to mutate state or return a new state.

* Behind the scene redux use immer js package to update the state.
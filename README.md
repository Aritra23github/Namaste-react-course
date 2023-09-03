# Note:- React and Redux are two different libraries, they are not same and it is not mandatory to use redux in react.

# Redux Theory:-
* Suppose we are making a cart system in our application and for that we are taking redux into our project. 
* In Redux we have multiple slices inside redux
* Suppose while clicking on ADD button we will see cart count. Just clicking on ADD button our redux slice will not update.
* For updating redux slice first when an user clicks on ADD button then we have to dispatch an action, then it will call an reducer function then it will update the redux slice store. This is write process of our cart slice.
* For reading the data from the cart slice redux use a selector. This phenomenon is called SUBSCRIBING TO THE STORE. Basically it will sync data between the store and component. Whenever the store is updated then data will be reflected to our component. Subscription the data is done by selector.


* For creating store using redux we have to use configureStore() method. And for providing store to our application, we need to use Provider component which will take store as props, which will imported from the react-redux library. If we want to provide store data to some specific component then we need to wrap Provider component with the specified component.

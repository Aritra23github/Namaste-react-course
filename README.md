
# What is Higher Order Components ???
* Higher Order Components is a function which takes a component and returns another component with some enhanced feature.

# React Layer 
* In React we have two layers, one is UI layer and one is data layer. UI layer is basically the jsx part. Data layer is basically the props, states, local variables and whatever we write inside curly brackets in jsx which modifies our UI layer. Data layer is very important part, if we can handle data layers smartly then our app becomes so fast.


# Controlled and Uncontrolled components ???
* Controlled components are those components whose state is controlled by parent components, it can have it's own local state but by which state component is controlled that state is controlled by parent component.

* Uncontrolled components are those components whose state is controlled by own. The state by which component is controlled that state is controlled by own.

* We can make components controlled by using lifting state up concept. According to this concept , we need to pass the state of parent component to the child component by which child component is controlled. For more details, see 
https://react.dev/learn/sharing-state-between-components#lifting-state-up-by-example

# What is props drilling ???
* In a big application we have many nested components under a parent component, so sometimes we need to pass data to the last child component. Then we need to pass data as props to the all child components before that particular child component. It is called props drilling. And unnecessarily we need to pass data as props to the all child components. To solve this issue we use react context.

# React Context
* To set data globally across all components we use ReactContext.

* createContext is a function which is provided by React, this function takes an object with some values and after that, those data will be available for all components globally. We can create global context for any component.

like:- 
const userContext = createContext({
    loggedInUser: "Default user",
});

* after creating a context, then we can use that context in functional component using useContext hook which is provided by React.

like:- 
import userContext from 'location';

const {loggedInUser} = useContext(userContext);

Here, inside useContext() we have to pass which context we want to use.


* We can access the data in class based components also. For that React provies a way.

like :-
import userContext from 'location';

<userContext.Consumer>
    {(data) => {//access the data}}
</userContext.Consumer>

In class based components we have userContext.Consumer component and inside the component we have to pass a callback function and using the callback function we can access the data.

* Now we need to specify that either the whole application will access the data or some specific component, for that React gives us a way

like :-
import userContext from 'location';

const userName = 'John Smith';

<userContext.Provider value={{loggedInUser: userName}}>
    <div className="app">
        <userContext.Provider value={{loggedInUser: "React"}}>
            <Header />
        </userContext.Provider>
        <Outlet />
    </div>
</userContext.Provider>

Here we have a component userContext.Provider, using this component we can specify which components will access the global data. 

This is code totally valid, because excpet header component all other components will get loggedInUser value as Jhon Smith. Only header component will get loggedInUser value as React.

This is the way to provide data to across the components.

* We can modify the global data also for that in <userContext.Provider> we need to pass value. This value will modify the current global data.
# Episode-4


# What is props ???
* In React functional component is just like a normal javascript function. So when we use props, then it is just like we are passing arguments in a function. JavaScript wrap our arguments inside an object.

# What is Config Driven Ui ???
* Config Driven Ui is the Ui when Ui is created based on the config or data coming from the backend. Just like a normal swiggy or zomato application, when we are in kolkata then we can see different offer for different products or may be we can see some add on the website for kolkata. It might get different who are in Mumbai or Chennai. So we will bulit our application based on the the data/config coming from the backend. We will definitely not going to build our application based on the different locations. This is called Config Driven Ui.

# Why key is important in map ???
* When we are using map function in react then every time a component is inserting under a div. If we does not provide any key then when a new component is inserted then react will remove all the previous components and again re-render all the components. It will slow down our application.
So we have to provide a unique id for key inside map function. This unique id should come from api. If we use index as a key then it will not a good practice because may be array index is changed then it will give us warning. So the best practice is to use unique id which is coming from backend.
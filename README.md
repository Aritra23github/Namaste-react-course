# Episode-6

# What is monolithic architecture ???
* A monolithic architecture is a traditional model of a software program, which is built as a unified unit that is self-contained and independent from other applications. The word “monolith” is often attributed to something large and glacial, which isn’t far from the truth of a monolith architecture for software design. A monolithic architecture is a singular, large computing network with one code base that couples all of the business concerns together.  To make a change to this sort of application requires updating the entire stack by accessing the code base and building and deploying an updated version of the service-side interface. This makes updates restrictive and time-consuming. 

* In monolithic architecture we have a whole big project and inside that project we have all codes like for api, for ui, for db connections, for notification, for email services, etc. for changing any small thing like we want to change a button color then we need to build our whole application, and deploy everything again for change the small thing.

# Separation of concerns and single responsibility principle.

# What is single responsibility principle ???
* Each Microservice delivers a single complete business capability. A complete business capability is a process that can be finished consecutively without interruptions or excursions to other services. This means that a business capability should not depend on other services to complete its work. Well-designed microservices are aligned to a single business capability, so they perform only one function. 

* It is lightweight and stateless, single database per service scalable.

# What is microservices architecture ???
* A microservices architecture, also simply known as microservices, is an architectural method that relies on a series of independently deployable services. These services have their own business logic and database with a specific goal. Updating, testing, deployment, and scaling occur within each service. Microservices decouple major business, domain-specific concerns into separate, independent code bases. Microservices don’t reduce complexity, but they make any complexity visible and more manageable by separating tasks into smaller processes that function independently of each other and contribute to the overall whole. 

* In microservice architecture, we have separate projects for separate tasks like for backend we have different project, for ui we have different project, for database we have different project, for authentication we have different project etc. All of these small projects communicate with each other and build a big project.

* In microservice architecture, we have separate projects for different tasks so we can independently choose programming languages for different projects like for backend we can write code in python/java/javascript for frontend we can write code in react js or vue js.

* As we have different projects for different tasks, we will use different ports and domain for different tasks like for backend we can use /api domain and backend will run in port 1000.

# How many types of methods is there for api call from frontend ???
* There are two types of methods for api call from frontend
first one is --->
As soon as the page loads, we call api then we will render our UI.
second one is --->
As soon as the page loads, we will render our UI, then we call api after that we will re-render the UI again.

* In React We will use second approach because React's life cycle is very fast and it will give us better UX. Because whenever use opens application they will see something or they can see skeleton after some time they can see the full fleged UI.


# When useEffect executes ???
* After our component is rendered, as soon as the callback function inside useEffect is called.

# Note:- fetch() method is not given by javascript, it is given by browser.

# Note:- In industry showing a loading screen is not a good idea, instead of showing a loading screen we will use shimmer ui.

# What is conditional rendering ???
* rendering based on the condition is called by conditional rendering.

# Why we should use useState instead of a normal javascript variable ???
* if we use normal javascript variable then react will not aware that if the variable is updated or not. So then if we update the variable then also that updated variable will not render in UI.
* To overcome this issue react has introduced useState. In useState react keeps track of the variable and whenever it changes then the entire component where the variable is updated will re-render and we see the updated value of that variable.
* As soon as the variable is updated, react uses reconciliation algorithm to detect the changes between two virtual doms (where virtual dom is nothing like a normal javascript objects which is created from jsx and babel is converted it into React.createElement which is nothing like a normal javascript object) and as soon as the difference between two virtual dom is detected, react will render that specific component where the variable is present.

# why we need onChange method in input field ???
* `<Input type="text" placeholder="search" value={searchText}/>`

* When we write `value={some_variable}` which is a local state variable (i.e. defined using useState) that variable is now tighted or bind. Now whenever we want to write anything inside input box or want to change the variable, then we need to also update the variable also which is declared as a local state variable. Until or unless we don't update the variable, we can't write anything inside input box.

* `<Input type="text" placeholder="search" value={searchText} onChange={(e) => setText(e.target.value)} />` 

* Now as soon as we write inside input box, the variable is also updated and react knows about that.

* For this reason we need to write onChange whenever we bind any variable inside our react application.

# note:- Whenever a local state variable is updated, react re-renders the UI, which means react executes reconciliation cycle.
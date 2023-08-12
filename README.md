
# What is the difference between class based components and functional components ???
* Functional components are just a normal javascript function which returns some piece of jsx. Class based components are just a normal javascript class which extends React.component by which React can track our components and it also have render() method which returns some piece of jsx and this jsx will be rendered on the browser.

# Why we need to pass props both constructor function and inside props ???
* class MyComponent extends React.Component {
  constructor(props) { 
    super();
    console.log(this.props); // undefined
    console.log(props); // defined
  }
render() {
    return <div>Hello {this.props.message}</div>; // defined
  }
}

However if we use super(props)

class MyComponent extends React.Component {
  constructor(props) { 
    super(props);
    console.log(this.props); // props will get logged.
  }
render() {
    return <div>Hello {this.props.message}</div>; // defined
  }
}

So, to conclude, If we want to use this.props inside constructor, we need to pass it in super, otherwise it’s okay to not pass props to super as we see that irrespective of passing it to super, this.props is available inside render function.

# Note:- when we say call a functional component that means it will mount that component into the our browser. And when we say call a class based component which means it will create a instance of that component.

# Note:- Never ever update state variable directly, like this.state.count = this.state.count + 1; never ever do like this.

# Note:- In React there is a method called setState(), this method will help us to update the state variable.

# Life cycle hooks of React ????????

class Parent extends React.Component {
    constructor(props) {
        super(props);
        console.log("Parent constructor");
    }

    componentDidMount() {
        console.log("componentDidMount");
    }

    render() {
        console.log("Parent render");
        return (
            <div class="container">
                <h1>Parent</h1>
                <Child />
            </div>
        );
    }
}

class Child extends React.Component {
    constructor(props) {
        super(props);
        console.log("Child constructor");
    }

    componentDidMount() {
        console.log("componentDidMount");
    }

    render() {
        console.log("child render");
        return (
            <div class="container">
                <h1>Child</h1>
            </div>
        );
    }
}


Lifecycle of class based component is first constructor will called which means whenever a class based component is called then first an instanced of the child component is created, so first parent constructor will be printed on console. Then render method will be called, so whatever inside render method will be called, and when there is a child component inside parent component then same process will be followed inside child component. So first constructor will be called, then render method will be called, and atlast componetDidMount method will be called. After componentDidMount method is called inside child component then componentDidMount of the parent component will be called.

So console logs will be:-
Parent Constructor
Parent render
child Constructor
chid render
child componentDidMount
parent componentDidMount

These are the sequences of console logs of life cycle in a class based component.

# Why we use componentDidMount() ????
* componentDidMount() is used mainly for api calls.

# Why we use componentDidMount for api calls ??
* componentDidMount is used for api calls because React first renders the jsx into browser and call the apis and then re-render the component again for better UI/UX experience. This is the reason we use componentDidMount for api calls.

* Logical reasons for using componentDidMount for api calls is ->
React first call the constructor method of the component, then it calls the render method of the component and then React updates the UI in the DOM after updating the DOM react will call componentDidMount method, so for this reason it is the best place to call apis.

* For better understanding PLEASE GO THROUGH THIS LINK (https://www.kirupa.com/react/component_lifecycle.htm)

* In React constructor method and render method in inside render phase and when react updates the DOM and componentDidMount method is called that phase is called commit phase.
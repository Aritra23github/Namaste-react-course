
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
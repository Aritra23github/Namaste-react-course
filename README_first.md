# README #

### What is this repository for? ###

* Namaste React Course
* 1.0
* [Learn Markdown](https://bitbucket.org/tutorials/markdowndemo)

### Basic Of HTML

* For create an element in HTML we use the document.createElement('element') function, here element is like h1, h2, h3, div etc.
* For insert an element in HTML we first fetch the element using the document.getElementById() function or document.querySelector() function, then we will use appendChild() to insert the element.

### What is CDN ??
* The full form of the CDN is Content Delivery Network. These are the website where react or any other libaray is already hoisted and we will just pulling the content.CDN is used to reduce the latency.

Here we are using cdn links for using react, we have written two different cdn links, the first one is for core react code, the second one is for react dom which is doing a bridge connection between react and browser.

### How to write Hello world program using react ???
* We first need to create an element inside React after createting the element, we need to render it. For rendering we need to first create a root element, and we will use ReactDOM for rendering the element.

* Syntax ->
* const element = React.createElement('element_name', {}, "children") -> {} this object is used to give attributes to the element
* const root = ReactDOM.createRoot(rootElement)
* root.render(element)
* React.createElement() method returns an object with the following properties like props. Inside props there will be several properties like type "h1", attributes will be there as well and children will be there also. The third parameter in createElement() method will be the children of the element.

* React.createElement() does not create any HTML, it will just create an object containing several properties. This object is not understand by Browser, so for it we have to convert this object into HTML. Here render() method is coming from ReactDOM. It will help us to convert the object into the HTML which can be understood by the Browser.

### How to create a Nested HTML Element with sibling ???
* let siblings = React.createElement(
    "div", 
    {id: "parent"}, 
    React.createElement(
        "div", 
        {id: "child"},
        [
            React.createElement(
                "h1",
                {},
                "I am a child h1 tag"
            ),
            React.createElement(
                "h2",
                {},
                "I am a child h2 tag"
            )
        ]
    )
);
* For creating a sibling we have to wrap the children inside an array. By doing this we can create a sibling element.

### Why React is a library ???
* <div id="root"></div> ---> This is present in our index.html file.
* const root = ReactDOM.createRoot(document.getElementById("root"));
* root.render(Element);
* These two lines are into our App.js file, now whenever we are creating a root using ReactDOM by passing document.getElementById('root') afterwards reactDOM will take over the power and replaced all the contents inside the div.If we reload the web page then we can see that whatever inside the div will be replaced by the element which we are passing in root.render() method.
* The more interesting part is that whatever html is present before the div which has id root or after the div which has id root will not be replaced by React. 
* This is the main reason why React is a library not a framework. Because React can be used inside a web page for a small amount of work by just using react scripts.
* Framework comes with a full fledged of things, but React can be used inside an existing web page so for this reason React is a library not a framework.
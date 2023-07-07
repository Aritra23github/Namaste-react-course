# README #

This README would normally document whatever steps are necessary to get your application up and running.

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
* const element = React.createElement('element_name', {}, "innerHTML") -> {} this object is used to give attributes to the element
* const root = ReactDOM.createRoot(rootElement)
* root.render(element)
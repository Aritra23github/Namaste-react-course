let headingElement = React.createElement(
    "h1", 
    {id: "heading"}, 
    "Hello from React!"
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(headingElement);
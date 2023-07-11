import React from "react";
import ReactDom from "react-dom/client";

// We will not going to use anymore. We will use jsx instead of `React.createElement()`.

// const heading = React.createElement(
//     "h1",
//     {id: "heading"},
//     "Hello world 😇"
// );

// console.log(heading);

const jsxHeading = <h1>Hello world 🥳</h1>

console.log(jsxHeading); // heading and jsxHeading both are the same, both is returing object with the same properties.

const root = ReactDom.createRoot(document.getElementById("root"));

// root.render(heading);

root.render(jsxHeading);
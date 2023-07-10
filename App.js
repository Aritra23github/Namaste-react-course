import React from "react";
import ReactDom from "react-dom/client";
/**
 * Nested HTML element 
 * <div id="parent">
 *  <div id="child">
 *      <h1>I am a child h1 tag</h1>
 *  </div>
 * </div>
 */

/**
 * Nested HTML element with sibling
 * <div id="parent>
 *  <div id="child">
 *      <h1>I am a child h1 tag</h1>
 *      <h2>I am a child h2 tag</h2>
 *  </div>
 * </div>
 */

/**
 * Nested HTML element with sibling and more than one child
 * <div id="parent>
 *  <div id="child">
 *      <h1>I am a child h1 tag</h1>
 *      <h2>I am a child h2 tag</h2>
 *  </div>
 *  <div id="child2">
 *      <h1>I am a child h1 tag</h1>
 *      <h2>I am a child h2 tag</h2>
 *  </div>
 * </div>
 */

let parent = React.createElement(
    "div", 
    {id: "parent"}, 
    React.createElement(
        "div", 
        {id: "child"}, 
        React.createElement(
            "h1",
            {},
            "I am a child h1 tag"
        )
    )
);

console.log(parent);

let siblings = React.createElement(
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

let nestedElement = React.createElement(
    "div", 
    {id: "parent"}, 
    [

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
        ),
        React.createElement(
            "div", 
            {id: "child2"},
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
    ]
);

let headingElement = React.createElement(
    "h1", 
    {id: "heading"}, 
    "Hello from React!"
);

const root = ReactDom.createRoot(document.getElementById("root"));

root.render(nestedElement);
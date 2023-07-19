# Episode-5

# How many types of exports and imports is present ???
* First one is Default Exports which is written like this:
function functionName() {}
export default functionName

* Second one is named exports which is written like this:
export const functionName = () => {}
export const variableName = "";

* So there is also two types of imports

* First one is default import 
import functionName from "file_location";

* Second one is named imports
import { functionName/variableName } from "file_location";

# Note:- React is fast because react does efficient dom manipulation.

# What is React Hooks ???
* React Hooks are basically some normal javascript utility functions. Whenever a state variable changes, react will re-render the component.

# What is Virtual DOM ???
* Virtual DOM is a representation of actual DOM. 
The Actual DOM is look like :-
<div>
    <div>
        <div>
        </div>
    </div>
</div>
Something like that. And the virtual DOM will be the object representation of this actual DOM. Basically React.createElement() gives us a object representation of our html, and this object representation of our html is the Virtual DOM representation of actual DOM.

# Note: React uses React Fiber Algorithm which is also known as Reconciliation Algorithm.

# What is reconciliation?
* reconciliation :-
        The algorithm React uses to diff one tree with another to determine which parts need to be changed.
    update
        A change in the data used to render a React app. Usually the result of `setState`. Eventually results in a re-render.

* Actually re-rendering the entire app on each change only works for the most trivial apps; in a real-world app, it's prohibitively costly in terms of performance. React has optimizations which create the appearance of whole app re-rendering while maintaining great performance. The bulk of these optimizations are part of a process called reconciliation.

* Reconciliation is the algorithm behind what is popularly understood as the "virtual DOM." A high-level description goes something like this: when you render a React application, a tree of nodes that describes the app is generated and saved in memory. This tree is then flushed to the rendering environment — for example, in the case of a browser application, it's translated to a set of DOM operations. When the app is updated (usually via setState), a new tree is generated. The new tree is diffed with the previous tree to compute which operations are needed to update the rendered app.
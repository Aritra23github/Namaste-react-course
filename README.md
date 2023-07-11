# Episode 3:

# JSX :
* We think that we can't create a react application without jsx 😄, but jsx and react both is different. We can create a react application without jsx, jsx just make developer's life easier.

* We also think that jsx is html inside js, but it is not right 😢. JSX is not html, html and jsx are both different. We can say that jsx is a html like syntax, but html and jsx are not same.

* JSX is HTML like syntax or it is more closer to XML syntax 🤨.

* We can create a react element using `React.createElement()` using core react or using jsx also. Both will return a react element.

* `React.createElement()` will return a react element which is an object, and jsx also returns a react element which is an object. Both are equivalent/same.

* JSX is not a pure JavaScript and our js engine/browser/react does not understand jsx. Whatever we write in jsx it is transplied into a browser understandable or which react understands or js engine understand. Now the main question is who is doing the transplied job? Parcel is doing the job, but parcel is not doing the job by itself. Parcel is like a manager, it gives the job to the Babel which is a JavaScript transplier. Babel converts jsx into a browser understandable code or which react understands or our js engine will understand.

* jsx also prevents XSS (Cross-site-scripting attacks) because jsx ensures that we can't inject anything which is not written explicitly in our application. Jsx converts everything into string before being rendered.

# How jsx executes ???
* jsx converts into `React.createElement()` first, then it converts into JS Object, and at last it converts into html element which is rendering into browser.
* Babel is doing this job.

# Note:- We read in previous episode which was episode-2 that parcel does differential bundling. Babel converts the modern es6 code into the code (Parcel is the manager of Babel) which older versions of browser understand (which does not understand es6).

# Note:- In jsx we provide the attributes in camelCase.

# Note:- When we write jsx in single line then it will be fine to write like this: `<h1>Hello world</h1>` but when we write code in multi linne then we should write the code inside `()` brackets like this: `(<h1>Hello</h1>)` because when babel converts our jsx into `React.createElement()` then it needs to understand that where jsx starts and where ends.
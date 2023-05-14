// PascalCasing naming convention - best practices to use PascalCasing for function component
function Message() {
    // JSX: Javascript XML syntax (very similar to writing HTML in javascript)
    // go to babeljs.io/repl to see how this JSX code converts to Javascript
    // i.e. the code below will be converted to React.createElement(
    // "h1",
    //  null,
    //  "Hello World"
    //);
    // which is just creating an h1 element.

    // iteration-1
    // return <h1>Hello World</h1>;

    // iteration-2
    // What are the benefits of JSX? Well, you can create dynamic content
    const name = "JJ";

    // {something}, whatever you put in the curly braces should be an expression - i.e. a piece of code that returns some value
    // return 'Hello JJ' if name is not empty, else return 'Hello User' (similar to v-if in Vue)
    if (name) return <h1>Hello {name}</h1>;
    else return <h1>"Hello User</h1>;
}

// This is a default export, so you can use it as a module in other JS files
export default Message;

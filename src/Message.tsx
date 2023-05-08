// PascalCasing naming convention - best practices to use PascalCasing for function component
function Message() {
    // JSX: Javascript XML syntax (very similar to writing HTML in javascript)
    // go to babeljs.io/repl to see how this JSX code converts to HTML
    // i.e. the code below will be converted to /_jsx("h1", { children: "Hello World" }); to be rendered in DOM

    // iteration-1
    // return <h1>Hello World</h1>;

    // iteration-2
    // What are the benefits of JSX? Well, you can create dynamic content
    const name = "JJ";
    // return 'Hello JJ' if name is not empty, else return 'Hello User' (similar to v-if in Vue)
    if (name) return <h1>Hello {name}</h1>;
    else return <h1>"Hello User</h1>;
}

export default Message;

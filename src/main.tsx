import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// Replace this import to import bootstrap css instead
// import "./index.css";
import "bootstrap/dist/css/bootstrap.css";

// This renders the component tree through the div ID of root
// React is platform agnostic , so you can use ReactNative here to build for mobile also
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    // StrictMode is used to identify possible problems
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

// Literally just importing an object from a .tsx file here
import Message from "./Message";

function App() {
    // Use the imported component here
    // Always close your react components tag or else you'll get a compilation error
    return (
        <div>
            <Message />
        </div>
    );
}

// Then export the main component somewhere
export default App;

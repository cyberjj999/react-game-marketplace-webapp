function ListGroup() {
    const items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

    let selectedIndex = -1;
    // demo function
    const testFunction = () => {
        return <h1>From test function</h1>;
    };

    // by convention we name our onclick fnctions as "handleXXX"
    // if you don't specify type of MouseEvent, you'll get an error because typescript doesn't know what datatype 'event' is - so you need to do something called "Type Annotation" in typescript - give the type to a variable
    // we know it's an react.MouseEvent type because when we hover over the event object in the onclick function, it shows React.MouseEvent
    // the beauty of typescript is auto-completion and type safety
    // typing event. something you alr see so many diff options.
    const handleClick = (event: React.MouseEvent, index: number) => {
        selectedIndex = index;
    };

    // Go to bootstrap webiste and search for listgroup component and just copy paste
    return (
        // only caveat is we have to change class="xxx" to className="xxx" (because 'class' is a reserved keyword in JSX)
        // We can only return one element per component; we could wrap the two elements with a parent div (but we'll add an extra element)
        // or we can wrap them with 'Fragment' which won't show the extra div
        // empty bracket already represents fragment so you don't have to import it.
        <>
            <h1>Hello</h1>
            {/* Conditionally show UI based on whether item exists or not - tenary operator, return no item found*/}
            {items.length === 0 ? <p>No item found</p> : null}
            {/* Another weird syntax but it works is as follows:
            if items length is 0, it'll return 'no item found' otherwise it'll return false - which makes react render nothing
            idk how it works but it is what it is.*/}
            {items.length === 0 && <p>No item found</p>}

            {/* You can even call a function here to get some values, and pass some parameters here so your code is neater. */}
            {testFunction()}

            <ul className="list-group">
                {/* JSX doesn't have a for-loop syntax; so what we'lll do here is we'll use the array map function to may each string element into an <li> element that contains that string value 
                We also need to give each item a unique key property to identify them when adding/removign items in the future - we use current item value since it is unique now, but in the real world, we may have things like item.id when we fetch the items from an API*/}
                {/* use a dynamically generated list-group-item instead */}
                {items.map((item, index) => (
                    <li
                        // add the active class if the index matches the item
                        className={
                            selectedIndex === index
                                ? "list-group-item active"
                                : "list-group-item"
                        }
                        key={item}
                        // onclick will return 'Clicked Tokyo index - 2
                        // onClick={() =>
                        //     console.log(`Clicked ${item} index - ${index}`)
                        // }
                        // another way to do this is define a function above then add them here. - NOTE that we're NOT calling the handleClick() function, we're just passing in a refenrece (no '()' here)
                        onClick={(event) => handleClick(event, index)}
                    >
                        {item}
                    </li>
                ))}

                {/* Remove hardcoded list-group-item */}
                {/* <li className="list-group-item">Cras justo odio</li>
                <li className="list-group-item">Dapibus ac facilisis in</li>
                <li className="list-group-item">Morbi leo risus</li>
                <li className="list-group-item">Porta ac consectetur ac</li>
                <li className="list-group-item">Vestibulum at eros</li> */}
            </ul>
        </>
    );
}

export default ListGroup;

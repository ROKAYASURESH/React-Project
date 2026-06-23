import EventButton from "./EventButton";

const EventHandling = () => {
    const handleClick = () => {
        alert('Button clicked!');
    }
    return (
        <div>
            <h1 className="card-title">Event Handling Component</h1>
            <button onClick={handleClick}>Click Me</button>
            <EventButton onMouseOver={() => alert('Mouse over EventButton component!')} name="suresh Rokaya"/>
        </div>
    )
}

export default EventHandling;
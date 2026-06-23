const EventButton = ({ onMouseOver, name }) => {
    return (
        <div>
            <h1 className="card-title">Event Button Component</h1>
            <button onMouseOver={onMouseOver}>Hover Over Me</button>
            <p>Hover over the button to see the alert!</p>
            <p>Name: {name}</p>
        </div>
    )
}
export default EventButton;
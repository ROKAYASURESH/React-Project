const LoopCard = (props) => {
    const { item } = props;
    return (
            <div className="card-body">
              <h2 className="card-title">{item.name}</h2>
              <p className="card-text">{item.path}</p>
                {props.children}
              <button
                className="card-btn"
                onClick={() => alert(`Selected: ${item.name}`)}
              >
                View Details
              </button>

            </div>
    )
}

export default LoopCard;
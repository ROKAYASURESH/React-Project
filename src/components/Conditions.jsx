const Conditions = () => {
    const age=19;
    // if (age>=18){
    //     console.log("You are eligible to vote");
    //     return  <p>You are eligible to vote</p>
    // }else{
    //     console.log("You are not eligible to vote");
    //     return <p>You are not eligible to vote</p>
    // }
    const newfunction = () => {
        if (age>=18){
            console.log("You are eligible to vote");
            return  <p>You are eligible to vote dsdsds</p>
        }else{
            console.log("You are not eligible to vote");
            return <p>You are not eligible to vote dsdds</p>
        }
    }
    return (
        <div>
            <h1 className="card-title">Conditions Component</h1>
            {age>=18 ? <p>You are eligible to vote v fff</p> : <p>You are not eligible to vote fffff</p>}
            <NewConditions/>
            {newfunction()}
        </div>
    )
}
export default Conditions;

const NewConditions = () => {
    const age=19;
    return (
        <div>
            <h1 className="card-title">New Conditions Component</h1>
            {age>=18 && <p>You are eligible to vote</p>}
            {age<18 && <p>You are not eligible to vote</p>}
        </div>
    )
}
import styles from './Loop.module.css';
const Dynamic = () => {
    const name= "Suresh Rokaya"

    const number= 10

    const newfunction = () => {
        const result = number * 2
        return result
    }
    return (
        <div>
            <h1>Dynamic Component</h1>
            <p>Name: {name}</p>
            <p>Number: {number}</p>
            <p>Result: {newfunction()}</p>
            <div className={styles['card-body']}>
                <h2 className={styles['card-title']}>{name}</h2>
            </div>
        </div>
    )

}
export default Dynamic
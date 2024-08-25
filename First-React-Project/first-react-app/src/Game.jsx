export default function Game({val1,val2,val3}) {
    const result = val1===val2 && val2===val3 ? "You win!" : "You lose!"
    const congrats = result === "You win!" ? "Congrats!": "";
    return( 
    <div>
        <h1>{val1}{val2}{val3}</h1>
        <h2 style={{color: result === "You win!" ? "green" : "red"}}>{result}</h2>
        <h3>{congrats}</h3>
    </div>
    )
}
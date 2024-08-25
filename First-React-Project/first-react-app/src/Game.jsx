export default function Game({val1,val2,val3}) {
    const result = val1===val2 && val2===val3? "You win!": "You lose!"
    return( 
    <div>
        <p>{val1}{val2}{val3}</p>
        <h2>{result}</h2>
    </div>
    )
}
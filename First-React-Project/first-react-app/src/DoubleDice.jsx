export default function DoubleDice() {
    const num1 = Math.floor(Math.random()*3)+1;
    const num2 = Math.floor(Math.random()*3)+1;
    const result = num1===num2 ? "You win" : "You loose";
        return (
            <div className="DoubleDice">
                <h2>{result}</h2>
                <p>Num 1: {num1}</p>
                <p>Num 2: {num2}</p>
            </div>
        )
    }
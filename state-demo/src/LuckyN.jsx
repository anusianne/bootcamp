import { useState } from "react";
import { getRolls } from "./utils";
import Dice from "./Dice";
import Button from "./Button";

export default function LuckyN({ numDice = 2, winCheck }) {
  const [dice, setDice] = useState(getRolls(numDice));
  const isWinner = winCheck(dice);
  const roll = () => setDice(getRolls(numDice));
  return (
    <main className="LuckyN">
      <h1>Lucky {isWinner && "You win!"}</h1>
      <Dice dice={dice} />
      {/* <button onClick={roll}>Re-roll Dice</button> */}
      <Button clickFunc={roll} label="Re-Roll" />
    </main>
  );
}

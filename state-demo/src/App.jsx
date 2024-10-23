import "./App.css";
import LuckyN from "./LuckyN";
import { sum } from "./utils";
import Box from "./Box";
import BoxGrid from "./BoxGrid";

function lessThan4(dice) {
  return sum(dice) < 4;
}

function sameNumber(dice) {
  return dice.every((v) => v === dice[0]);
}

function App() {
  return (
    <div>
      {/* <LuckyN winCheck={lessThan4} />
      <LuckyN winCheck={sameNumber} /> */}
      <BoxGrid />
    </div>
  );
}

export default App;

import "./Box.css";
import { useState } from "react";

function randomChoice(arr) {
  const idx = Math.floor(Math.random() * arr.length)
  return arr[idx];
}

export default function Box({colors}) {
const [color, setColor] = useState(randomChoice(colors));
 const randomColor = randomChoice(colors)
  const changeColor = () => {
    setColor(randomColor)
  }
  return (
    <div>
      <div onClick={changeColor} className="Box" style={{ backgroundColor: color }}></div>
    </div>
  );
}

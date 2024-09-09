import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Counter from "./Counter";
import ScoreKeeper from "./ScoreKeeper";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>State demo</h1>
      <ScoreKeeper />
    </div>
  );
}

export default App;

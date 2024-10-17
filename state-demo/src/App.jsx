import "./App.css";
import Dice from "./Dice";
function App() {
  return (
    <div>
      <Dice dice={[3, 6, 1]} />
    </div>
  );
}

export default App;

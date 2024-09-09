import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  const increamentCount = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increamentCount}>+1</button>
    </div>
  );
}

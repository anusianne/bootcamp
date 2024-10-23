import "./Box.css";
import { useState } from "react";

export default function Box() {
  const [isActive, setIsActive] = useState(false);
  const toggleIsActive = () => setIsActive(!isActive);
  return (
    <div
      onClick={toggleIsActive}
      className="Box"
      style={{ backgroundColor: isActive ? "red" : "black" }}
    ></div>
  );
}

import Die from "./Die";
import "./Dice.css";

export default function Dice({ dice, color }) {
  return (
    <section className="Dice">
      {dice.map((v, i) => (
        <Die val={v} key={i} color={color} />
      ))}
    </section>
  );
}

import "./Box.css";

export default function Box({ colors }) {
  return (
    <div>
      <div className="Box" style={{ backgroundColor: colors }}></div>
    </div>
  );
}

export default function RentalProperties({ propies }) {
  return (
    <div
      style={{
        display: "grid",
        width: "900px",
        gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr",
        color: "blue",
      }}
    >
      {propies.map((p) => (
        <div key={p.id}>
          <h2>{p.name} </h2>
          <h3>${p.price}</h3>
          <h4>{p.rating}⭐</h4>
        </div>
      ))}
    </div>
  );
}

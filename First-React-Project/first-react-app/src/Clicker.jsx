// function handleClick({ message }) {
//   alert(message);
// }

export default function Clicker({ message, buttonText }) {
  return (
    <div>
      <button onClick={() => alert(message)}>{buttonText}</button>
    </div>
  );
}

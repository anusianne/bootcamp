export default function Counter({ num }) {
  const incrementNum = () => {
    num += 1;
    console.log(num);
  };

  return (
    <div>
      <p>The count is: {num}</p>
      <button onClick={incrementNum}>Click! </button>
    </div>
  );
}

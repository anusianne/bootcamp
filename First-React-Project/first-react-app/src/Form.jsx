function handleFormSubmit(e) {
  e.preventDefault();
  console.log("consoled submitted");
}

export default function Form() {
  return (
    <form onSubmit={handleFormSubmit}>
      <button>Submit</button>
    </form>
  );
}

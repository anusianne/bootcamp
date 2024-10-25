import { useState } from "react";

export default function SignUpForm() {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const updateFirstName = (e) => {
    setFirstName(e.target.value);
  };
  const updateLastName = (e) => {
    setLastName(e.target.value);
  };
  const handleSubmit = () => {
    console.log(firstname, lastname);
  };
  return (
    <div>
      <label htmlFor="firstname">Enter a First Name: </label>
      <input
        type="text"
        placeholder="firstname"
        value={firstname}
        onChange={updateFirstName}
        id="firstname"
      />
      <label htmlFor="lastname">Enter a Last Name: </label>
      <input
        type="text"
        placeholder="lastname"
        value={lastname}
        onChange={updateLastName}
        id="lastname"
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

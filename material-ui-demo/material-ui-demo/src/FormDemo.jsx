import TextField from "@mui/material/TextField";
import { useState } from "react";
export default function FormDemo() {
  const [name, setName] = useState("");
  const updateName = (e) => {
    setName(e.target.value);
  };
  return (
    <div>
      <h1>Name: {name}</h1>
      <TextField
        id="outlined-basic"
        label="Puppy name"
        variant="outlined"
        placeholder="Lily"
        value={name}
        onChange={updateName}
      />
    </div>
  );
}

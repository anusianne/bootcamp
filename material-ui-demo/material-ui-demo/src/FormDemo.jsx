import TextField from "@mui/material/TextField";
import { useState } from "react";
import Box from "@mui/material/Box";
export default function FormDemo() {
  const [name, setName] = useState("");
  const updateName = (e) => {
    setName(e.target.value);
  };
  return (
    <Box
      sx={{
        width: 300,
        height: 300,
        border: "1px solid grey",
        p: 6,
        margin: "0 auto",
      }}
    >
      <h1>Name: {name}</h1>
      <TextField
        id="outlined-basic"
        label="Puppy name"
        variant="outlined"
        placeholder="Lily"
        value={name}
        onChange={updateName}
      />
    </Box>
  );
}

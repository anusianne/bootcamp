import { useState } from "react";

export default function UsernameForm() {
  const [username, setUsername] = useState("");
  return (
    <div>
      <input type="text" placeholder="username" value={username} />
      <button>Submit</button>
    </div>
  );
}

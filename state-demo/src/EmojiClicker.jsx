import { useState } from "react";

export default function EmojiClicker() {
  const [emojis, setEmojis] = useState([":)"]);
  return (
    <div>
      {emojis.map((e) => (
        <span style={{ fontSize: "4em" }}>{e}</span>
      ))}
      <button>Add Emoji</button>
    </div>
  );
}

import { useState } from "react";

export default function EmojiClicker() {
  const [emojis, setEmojis] = useState([":)"]);
  const addEmoji = () => {
    setEmojis([...emojis, ":**"]);
  };
  return (
    <div>
      {emojis.map((e) => (
        <span style={{ fontSize: "4em" }}>{e}</span>
      ))}
      <button onClick={addEmoji}>Add Emoji</button>
    </div>
  );
}

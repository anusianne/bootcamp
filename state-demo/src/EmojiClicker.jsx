import { v4 as uuid } from "uuid";
import { useState } from "react";

export default function EmojiClicker() {
  const [emojis, setEmojis] = useState([{ id: uuid(), emoji: ":)" }]);
  const addEmoji = () => {
    setEmojis([...emojis, { id: uuid(), emoji: ":D" }]);
  };
  return (
    <div>
      {emojis.map((e) => (
        <span key={e.id} style={{ fontSize: "4em" }}>
          {e.emoji}
        </span>
      ))}
      <button onClick={addEmoji}>Add Emoji</button>
    </div>
  );
}

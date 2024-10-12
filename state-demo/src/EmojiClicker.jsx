import { v4 as uuid } from "uuid";
import { useState } from "react";

function randomEmoji() {
  const emojiList = ["💀", "🟠", "🩷", "😍", "😈"];
  return emojiList[Math.floor(Math.random() * emojiList.length)];
}

export default function EmojiClicker() {
  const [emojis, setEmojis] = useState([{ id: uuid(), emoji: randomEmoji() }]);
  const addEmoji = () => {
    setEmojis([...emojis, { id: uuid(), emoji: randomEmoji() }]);
  };
  const deleteEmoji = (id) => {
    setEmojis((prevEmojis) => {
      return prevEmojis.filter((e) => e.id !== id);
    });
  };
  return (
    <div>
      {emojis.map((e) => (
        <span
          onClick={() => deleteEmoji(e.id)}
          key={e.id}
          style={{ fontSize: "4em" }}
        >
          {e.emoji}
        </span>
      ))}
      <button onClick={addEmoji}>Add Emoji</button>
    </div>
  );
}

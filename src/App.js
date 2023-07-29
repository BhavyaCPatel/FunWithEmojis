import React, { useState } from "react";
import "./styles.css";

export default function App() {
  var emojiDictionary = {
    "😆": "Smiling",
    "😭": "Crying",
    "😔": "Sad",
    "😥": "Tensed",
    "🤬": "Angry",
    "😑": "Annoyance"
  };
  const emojiknown = Object.keys(emojiDictionary);
  const [meaning, setmeaning] = useState("");
  const emojiInput = (event) => {
    var input = event.target.value;
    var meaning = emojiDictionary[input];
    if (meaning === undefined) {
      meaning = "Sorry, we don't have it in database";
    }
    setmeaning(meaning);
  };
  const emojiClick = (emoji) => {
    var meaning = emojiDictionary[emoji];
    setmeaning(meaning);
  };
  return (
    <div className="App">
      <h1>Fun with emojis</h1>
      <input type="text" onChange={emojiInput} />
      <h2>{meaning}</h2>
      <h3>Emojis we know</h3>
      {emojiknown.map((emoji) => {
        return (
          <span
            onClick={() => emojiClick(emoji)}
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}

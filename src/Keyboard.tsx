import React from "react";
import styles from "./Keyboard.module.css";
type Props = {
  activeLetters: string[];
  inactiveLetters: string[];
  addGuessedLetter: (letter: string) => void;
};

const KEYS = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

function Keyboard({ addGuessedLetter, inactiveLetters, activeLetters }: Props) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit,minmax(75px,1fr)",
        gap: ".5rem",
      }}
    >
      {KEYS.map((key) => {
        const isActive = activeLetters.includes(key);
        const isInActive = inactiveLetters.includes(key);
        return (
          <button
            onClick={() => addGuessedLetter(key)}
            className={`${styles.btn} ${isActive ? styles.active : ""} ${
              isInActive ? styles.inactive : ""
            }`}
            key={key}
          >
            {key}
          </button>
        );
      })}
    </div>
  );
}

export default Keyboard;

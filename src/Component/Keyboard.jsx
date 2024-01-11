import React, { useCallback, useEffect, useContext } from "react";
import { Key } from "./Key";
import { AppContext } from "../App";

export const Keyboard = () => {
  const key1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
  const key2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
  const key3 = ["Z", "X", "C", "V", "B", "N", "M"];

  const { onEnter, onDelete, onSelectLetter } = useContext(AppContext);

  const handleKeyboard = useCallback((e) => {
    if (e.key === "Enter") {
      onEnter();
    } else if (e.key === "Backspace") {
      onDelete();
    } else {
      key1.forEach((key) => {
        if (e.key.toLowerCase() === key.toLowerCase()) {
          onSelectLetter(key);
        }
        key2.forEach((key) => {
          if (e.key.toLowerCase() === key.toLowerCase()) {
            onSelectLetter(key);
          }
          key3.forEach((key) => {
            if (e.key.toLowerCase() === key.toLowerCase()) {
              onSelectLetter(key);
            }
          });
        });
      });
    }
  });

  useEffect(() => {
    document.addEventListener("keydown", handleKeyboard);

    return () => {
      document.removeEventListener("keydown", handleKeyboard);
    };
  }, [handleKeyboard]);

  return (
    <div className="keyboard" onKeyDown={handleKeyboard}>
      <div className="line1">
        {key1.map((key) => {
          return <Key keyVal={key} />;
        })}
      </div>
      <div className="line2">
        {key2.map((key) => {
          return <Key keyVal={key} />;
        })}
      </div>
      <div className="line3">
        <Key keyVal={"Enter"} bigKey={true} />
        {key3.map((key) => {
          return <Key keyVal={key} />;
        })}
        <Key keyVal="Delete" bigKey={true} />
      </div>
    </div>
  );
};

import React, { useContext, useEffect } from "react";
import { AppContext } from "../App";

export const Letter = ({ letterPos, attemptVal }) => {
  const { board, correctWord, currentAttempt, setDisabledLetters } =
    useContext(AppContext);
  const letter = board[attemptVal][letterPos]; // sets each letter to the position in the board array it is in.

  const correct = correctWord.toUpperCase()[letterPos] === letter; // checks if the letter is in the word & correct position
  const almost =
    !correct && letter !== "" && correctWord.toUpperCase().includes(letter); // checks if the letter is in the word but not correct position
  const letterState =
    currentAttempt.attempt > attemptVal &&
    (correct ? "correct" : almost ? "almost" : "error"); // checks if enter has been clicked, and then sets the letterState which is passed into the id

  useEffect(() => {
    if (letter !== "" && !correct && !almost) {
      setDisabledLetters((prev) => [...prev, letter]);
    }
  }, [currentAttempt.attempt]);

  return (
    <div className="letter" id={letterState}>
      {letter}
    </div>
  );
};

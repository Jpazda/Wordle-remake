import React, { useContext } from "react";
import { AppContext } from "../App";

export const GameOver = () => {
  const { gameOver, correctWord, currentAttempt } = useContext(AppContext);
  return (
    <div className="gameover">
      <h3>
        {gameOver.winner ? "Congratulations, you win!" : "Sorry, you lost"}
      </h3>
      <h1>Correct word: {correctWord}</h1>
      {gameOver.winner && (
        <h3>You guessed the word in {currentAttempt.attempt} tries!</h3>
      )}
    </div>
  );
};

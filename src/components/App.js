import React, { useState, useEffect, useCallback } from "react";

import Card from "./Card";

const App = () => {
  const [isGameOver, setGameOver] = useState(false);
  const [currentscore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  useEffect(() => {
    if (isGameOver === true) {
      if (currentscore > highScore) {
        setHighScore(currentscore);
      }
      setCurrentScore(() => 0);
      setGameOver(() => false);
    }
  }, [isGameOver, currentscore, highScore]);

  const handleClick = useCallback((count) => {
    if (count > 1) {
      setGameOver(() => {
        return true;
      });
    }
    setCurrentScore((prev) => {
      return prev + 1;
    });
  }, []);

  const shuffleCards = (cardArr) => {
    return cardArr.sort(() => Math.random() - 0.5);
  };

  const cardElements = [];
  for (let x = 0; x < 10; x++) {
    cardElements.push(
      <Card
        key={x}
        cardNum={x}
        cardClicked={handleClick}
        isGameOver={isGameOver}
      />
    );
  }
  return <div className="gameWrap">{shuffleCards(cardElements)}</div>;
};

export default App;

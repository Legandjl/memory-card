import { useCallback, useState, useEffect } from "react";

const useGameLogic = () => {
  const [isGameOver, setGameOver] = useState(false);
  const [currentscore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  useEffect(() => {
    if (isGameOver === true) {
      if (currentscore > highScore) {
        setHighScore(currentscore);
        console.log("game over!");
      }
      setCurrentScore(() => 0);
      setGameOver(() => false);
    }
  }, [isGameOver, currentscore, highScore]);

  const checkCard = useCallback((timesClicked) => {
    if (timesClicked > 1) {
      setGameOver(() => {
        return true;
      });
    }
    if (timesClicked !== 0 && timesClicked < 2) {
      setCurrentScore((previousScore) => {
        return previousScore + 1;
      });
    }
  }, []);

  const shuffleCards = (cardArr) => {
    return cardArr.sort(() => Math.random() - 0.5);
  };

  return { shuffleCards, checkCard, currentscore, highScore, isGameOver };
};

export { useGameLogic };

import React, { useState, useEffect, useCallback } from "react";
import images from "./images";
import Card from "./Card";
import Header from "./Header";
import Footer from "./Footer";

// icons from https://www.flaticon.com/packs/emoji-people-1

const App = () => {
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
    if (timesClicked !== 0) {
      setCurrentScore((previousScore) => {
        return previousScore + 1;
      });
    }
  }, []);

  const shuffleCards = (cardArr) => {
    return cardArr.sort(() => Math.random() - 0.5);
  };

  const cardElements = images.map((src, index) => {
    return (
      <Card
        key={index}
        cardClicked={checkCard}
        isGameOver={isGameOver}
        src={src}
      />
    );
  });

  return (
    <div className="gameWrap">
      <Header currentScore={currentscore} highScore={highScore} />
      {shuffleCards(cardElements)}
      <Footer />
    </div>
  );
};

export default App;

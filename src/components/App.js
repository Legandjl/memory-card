import React from "react";
import images from "./images";
import Card from "./Card";
import Header from "./Header";
import Footer from "./Footer";
import { useGameLogic } from "./useGameLogic";

const App = () => {
  const Logic = useGameLogic();
  const cardElements = images.map((src, index) => {
    return (
      <Card
        key={index}
        cardClicked={Logic.checkCard}
        isGameOver={Logic.isGameOver}
        src={src}
      />
    );
  });
  return (
    <div className="gameWrap">
      <Header
        currentScore={Logic.currentscore}
        highScore={Logic.highScore}
        globalScore={Logic.globalHighScore}
      />
      {Logic.shuffleCards(cardElements)}
      <Footer />
    </div>
  );
};

export default App;

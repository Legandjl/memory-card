import React, { useEffect, useState } from "react";
import "../styles/card.css";

const Card = (props) => {
  const { cardClicked, cardNum, isGameOver } = props;
  //const [imgUrl, setImgUrl] = useState(props.imgUrl);
  const [clickCount, setClickCount] = useState(0);

  useEffect(() => {
    cardClicked(clickCount);
  }, [clickCount, cardClicked]);

  useEffect(() => {
    if (isGameOver) {
      console.log("game over!");
      setClickCount(() => {
        return 0;
      });
    }
  }, [isGameOver]);

  const clickCard = () => {
    setClickCount((prev) => {
      return prev + 1;
    });
  };

  return (
    <div className="card" onClick={clickCard}>
      {cardNum}
    </div>
  );
};

export default Card;

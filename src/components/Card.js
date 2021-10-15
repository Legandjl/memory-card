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
      <div className="imgWrap">
        <img
          alt={"emoji"}
          src={props.src}
          style={{ height: "auto", width: "auto", maxHeight: 80 }}
        />
      </div>
    </div>
  );
};

export default Card;

import React, { useContext, useEffect, useState } from "react";
import { FirebaseContext } from "../firebase/useFirebaseContext";
import "../styles/card.css";

const Card = (props) => {
  const { cardClicked, isGameOver } = props;
  const [clickCount, setClickCount] = useState(0);
  const firebox = useContext(FirebaseContext);

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
    firebox.updateHighScore();
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

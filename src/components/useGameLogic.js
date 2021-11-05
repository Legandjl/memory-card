import { useCallback, useState, useEffect, useContext } from "react";
import { FirebaseContext } from "../firebase/useFirebaseContext";

const useGameLogic = () => {
  const [isGameOver, setGameOver] = useState(false);
  const [currentscore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [globalHighScore, setGlobalScore] = useState("...");
  const [scoreLoading, setLoading] = useState(true);

  const firebase = useContext(FirebaseContext);

  useEffect(() => {
    const setGlobal = async () => {
      try {
        const global = await firebase.getHighScore();
        setGlobalScore(global);
        setLoading(false);
      } catch (error) {
        setLoading(true);
      }
    };
    if (scoreLoading) {
      setGlobal();
    }
  }, [firebase, scoreLoading]);

  useEffect(() => {
    if (isGameOver === true) {
      if (currentscore > highScore) {
        setHighScore(currentscore);
      }
      setCurrentScore(() => 0);
      setGameOver(() => false);
    }
  }, [isGameOver, currentscore, highScore, firebase, scoreLoading]);

  useEffect(() => {
    const updateGlobalScore = async () => {
      let currentGlobal = await firebase.getHighScore();
      if (currentscore > currentGlobal) {
        firebase.updateHighScore(currentscore);
        currentGlobal = await firebase.getHighScore();
        setGlobalScore(() => {
          return currentscore;
        });
      }
    };

    if (!scoreLoading) {
      updateGlobalScore();
    }
  }, [currentscore, firebase, scoreLoading]);

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

  return {
    shuffleCards,
    checkCard,
    currentscore,
    highScore,
    isGameOver,
    globalHighScore,
  };
};

export { useGameLogic };

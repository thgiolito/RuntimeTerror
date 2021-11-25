import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router";

import UserContext from "../../contexts/usercontext";

import styles from "./Game.module.css";

export default function Game() {
  const [gameOver, setGameOver] = useState(false);
  const { user, score, setScore } = useContext(UserContext);
  const navigate = useNavigate()

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setCount('Timeout called!');
  //   }, 1000);
  //   return () => clearTimeout(timer);
  // }, []);

  useEffect(() => {
      if (gameOver) {
          navigate("/score")
      }
  }, [gameOver]);

  const handleEndGame = () => {
    setGameOver(!gameOver);
    setScore(600);
    console.log(score);
  }

  return (
    <div className={styles.container}>
      <p> Good luck and have fun, {user} </p>
      <div className={styles.timer}></div>
      <button className={styles.gameButton} onClick={handleEndGame}>
        Simulateur de partie finie
      </button>
    </div>
  );
}

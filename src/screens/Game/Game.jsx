import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import HandDetection from "../../components/HandDetection/HandDetection";

import styles from "./Game.module.css";

export default function Game() {
  const [gameOver, setGameOver] = useState(false);
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

  return (
    <div className={styles.container}>
      <HandDetection />
      <div className={styles.timer}></div>
      <button onClick={() => setGameOver(!gameOver)}>
        Simulateur de partie finie
      </button>
    </div>
  );
}

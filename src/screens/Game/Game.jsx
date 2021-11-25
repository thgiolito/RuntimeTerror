import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

import styles from "./Game.module.css";

export default function Game() {
  const [gameOver, setGameOver] = useState(false);
  const navigate = useNavigate()

  useEffect(() => {
      if (gameOver) {
          navigate("/score")
      }
  }, [gameOver]);

  return (
    <div className={styles.container}>
      <h2>Salut, je suis le jeu</h2>
      <button onClick={() => setGameOver(!gameOver)}>
        Simulateur de partie finie
      </button>
    </div>
  );
}

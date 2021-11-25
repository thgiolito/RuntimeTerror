import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router";

import beethoven from "../../assets/beethovenvirus.mp3";
import UserContext from "../../contexts/usercontext";

import styles from "./Game.module.css";

export default function Game() {
  const [gameOver, setGameOver] = useState(false);
  const [upright, setUpright] = useState(false);
  const [upleft, setUpleft] = useState(false);
  const [downright, setDownright] = useState(false);
  const [downleft, setDownleft] = useState(false);
  const { user, score, setScore } = useContext(UserContext);
  const navigate = useNavigate();
  const halfbeat = 60000 / 81;

  useEffect(() => {
    setInterval(() => {
      let count = Math.floor(Math.random() * 4);
      if (count == 0) {
        setUpleft(false);
        setDownright(false);
        setDownleft(false);
        setUpright(true);
      } else if (count == 1) {
        setUpright(false);
        setDownright(false);
        setDownleft(false);
        setUpleft(true);
      } else if (count == 2) {
        setUpright(false);
        setUpleft(false);
        setDownleft(false);
        setDownright(true);
      } else {
        setUpright(false);
        setUpleft(false);
        setDownright(false);
        setDownleft(true);
      }
    }, halfbeat);
  }, []);

  useEffect(() => {
    if (gameOver) {
      navigate("/score");
    }
  }, [gameOver]);

  const handleEndGame = () => {
    setGameOver(!gameOver);
    setScore(600);
    console.log(score);
  };

  return (
    <div className={styles.container}>
      <audio src={beethoven} autoPlay />
      <div className={styles.gameContainerContainer}>
        {upleft && (
          <div className={styles.gameContainerUL}>
            <div className={styles.squareLight}></div>
          </div>
        )}
        {upright && (
          <div className={styles.gameContainerUR}>
            <div className={styles.squareLight}></div>
          </div>
        )}
        {downleft && (
          <div className={styles.gameContainerDL}>
            <div className={styles.squareLight}></div>
          </div>
        )}
        {downright && (
          <div className={styles.gameContainerDR}>
            <div className={styles.squareLight}></div>
          </div>
        )}
      </div>

      <button onClick={() => setGameOver(!gameOver)}>
        Simulateur de partie finie
      </button>
    </div>
  );
}

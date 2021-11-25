import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router";
import HandDetection from "../../components/HandDetection/HandDetection";

import beethoven from "../../assets/beethovenvirus.mp3";
import UserContext from "../../contexts/usercontext";

import styles from "./Game.module.css";

export default function Game() {
  const [upright, setUpright] = useState(false);
  const [upleft, setUpleft] = useState(false);
  const [downright, setDownright] = useState(false);
  const [downleft, setDownleft] = useState(false);
  const { user, score, setScore } = useContext(UserContext);
  const navigate = useNavigate();
  const halfbeat = 60000 / 81;

  // UR 0
  // UL 1
  // DR 2
  // DL 3
  // LL 4
  // RR 5

  let chore = [
    0, 1, 0, 1, 2, 3, 2, 3, 4, 5, 4, 5, 0, 1, 0, 1, 2, 3, 2, 3, 4, 5, 4, 5, 0,
    1, 0, 1, 2, 3, 2, 3, 4, 5, 4, 5, 0, 1, 0, 1, 2, 3, 2, 3, 4, 5, 4, 5, 0, 1,
    0, 1, 2, 3, 2, 3, 4, 5, 4, 5, 0, 1, 0, 1, 2, 3, 2, 3, 4, 5, 4, 5, 0, 1, 0,
    1, 2, 3, 2, 3, 4, 5, 4, 5, 0, 1, 0, 1, 2, 3, 2, 3, 4, 5, 4, 5, 0, 1, 0, 1,
    2, 3, 2, 3, 4, 5, 4, 5, 0, 1, 0, 1, 2, 3, 2, 3, 4, 5, 4, 5, 0, 1, 0, 1, 2,
    3, 2, 3, 4, 5, 4, 5, 0, 1, 0, 1, 2, 3, 2, 3, 4, 5, 4, 5,
  ];

  // let chore = [0, 1, 0, 1, 0, 1, 0, 1, 2, 3, 2, 3, 2, 3, 2, 3, 4, 5, 4, 5];
  useEffect(() => {
    setInterval(() => {
      let count = chore.shift();
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
      } else if (count == 3) {
        setUpright(false);
        setUpleft(false);
        setDownright(false);
        setDownleft(true);
      } else if (count == 4) {
        setUpright(false);
        setDownright(false);
        setUpleft(true);
        setDownleft(true);
      } else {
        setUpleft(false);
        setDownleft(false);
        setDownright(true);
        setUpright(true);
      }

      // if (!chore.length) {
      //   navigate("/score");
      // }
    }, halfbeat);
  }, []);

  return (
    <div className={styles.container}>
      <HandDetection />
      <audio src={beethoven} autoPlay />
      <div className={styles.gameContainerContainer}>
        {upleft && (
          <div className={styles.gameContainerUL}>
            <div className={styles.squareLight}></div>
            {downleft && <div className={styles.squareLight}></div>}
          </div>
        )}
        {upright && (
          <div className={styles.gameContainerUR}>
            <div className={styles.squareLight}></div>
            {downright && <div className={styles.squareLight}></div>}
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

import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

import beethoven from "../../assets/beethovenvirus.mp3";
import UserContext from "../../contexts/usercontext";

import styles from "./Game.module.css";

export default function Game() {
  const [upright, setUpright] = useState(false);
  const [upleft, setUpleft] = useState(false);
  const [downright, setDownright] = useState(false);
  const [downleft, setDownleft] = useState(false);
  const [doubleleft, setDoubleleft] = useState(false);
  const [doubleright, setDoubleRight] = useState(false);
  const [doubleup, setDoubleUp] = useState(true);

  const { user, score, setScore, chore } = useContext(UserContext);
  const navigate = useNavigate();
  const halfbeat = 60000 / 81;

  // UL 0
  // UR 1
  // DL 2
  // DR 3
  // LL 4
  // RR 5
  // UU 6

  // let chore = [
  //   0, 1, 0, 1, 0, 1, 0, 1, 6, 0, 6, 1, 6, 0, 6, 1, 4, 5, 4, 5, 4, 5, 4, 5, 0,
  //   1, 2, 3, 0, 1, 2, 3, 6, 0, 6, 1, 6, 0, 6, 1, 0, 3, 2, 1, 0, 3, 2, 1, 0, 3,
  //   2, 1, 0, 3, 2, 1, 5, 1, 5, 3, 5, 1, 5, 3, 4, 0, 4, 2, 4, 0, 4, 2, 0, 1, 0,
  //   1, 0, 1, 0, 1, 6, 0, 6, 1, 6, 0, 6, 1, 4, 5, 4, 5, 4, 5, 4, 5, 0, 1, 2, 3,
  //   0, 1, 2, 3, 6, 0, 6, 1, 6, 0, 6, 1, 0, 3, 2, 1, 0, 3, 2, 1, 0, 3, 2, 1, 0,
  //   3, 2, 1, 5, 1, 5, 3, 4, 0, 4, 2, 1, 0, 6, 6, 6,
  // ];

  useEffect(() => {
    setInterval(() => {
      let count = chore.shift();
      if (count == 0) {
        setUpright(false);
        setDownleft(false);
        setDownright(false);
        setDoubleleft(false);
        setDoubleRight(false);
        setDoubleUp(false);
        setUpleft(true);
      } else if (count == 1) {
        setUpleft(false);
        setDownleft(false);
        setDownright(false);
        setDoubleleft(false);
        setDoubleRight(false);
        setDoubleUp(false);
        setUpright(true);
      } else if (count == 2) {
        setUpleft(false);
        setUpright(false);
        setDownright(false);
        setDoubleleft(false);
        setDoubleRight(false);
        setDoubleUp(false);
        setDownleft(true);
      } else if (count == 3) {
        setUpleft(false);
        setUpright(false);
        setDownleft(false);
        setDoubleleft(false);
        setDoubleRight(false);
        setDoubleUp(false);
        setDownright(true);
      } else if (count == 4) {
        setUpleft(false);
        setUpright(false);
        setDownleft(false);
        setDownright(false);
        setDoubleRight(false);
        setDoubleUp(false);
        setDoubleleft(true);
      } else if (count == 5) {
        setUpleft(false);
        setUpright(false);
        setDownleft(false);
        setDownright(false);
        setDoubleleft(false);
        setDoubleUp(false);
        setDoubleRight(true);
      } else {
        setUpleft(false);
        setUpright(false);
        setDownleft(false);
        setDownright(false);
        setDoubleleft(false);
        setDoubleRight(false);
        setDoubleUp(true);
      }

      if (!chore.length) {
        navigate("/score");
      }
    }, halfbeat);
  }, []);

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

        {doubleleft && (
          <div className={styles.gameContainerUL}>
            <div className={styles.squareLight}></div>
            <div className={styles.squareLight}></div>
          </div>
        )}

        {doubleright && (
          <div className={styles.gameContainerUR}>
            <div className={styles.squareLight}></div>
            <div className={styles.squareLight}></div>
          </div>
        )}

        {doubleup && (
          <div className={styles.gameContainerUP}>
            <div className={styles.squareLight}></div>
            <div className={styles.squareLight}></div>
          </div>
        )}
      </div>

      <Link to="/score">
        <button>Simulateur de partie finie</button>
      </Link>
    </div>
  );
}

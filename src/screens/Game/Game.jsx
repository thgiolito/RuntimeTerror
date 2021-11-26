import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import axios from "axios";

import HandDetection from "../../components/HandDetection/HandDetection";
import beethoven from "../../assets/beethovenvirus.mp3";
import UserContext from "../../contexts/usercontext";

import styles from "./Game.module.css";

export default function Game() {
  const [upright, setUpright] = useState(false);
  const [upleft, setUpleft] = useState(false);
  const [downright, setDownright] = useState(false);
  const [downleft, setDownleft] = useState(false);
  const [posLeft, setPosLeft] = useState({x: 0, y: 0})
  const [posRight, setPosRight] = useState({x: 0, y: 0})
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

  useEffect(() => {
    const intervalID = setInterval(() => {
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
      const postScore = async () => {
      try {
        const resp = await axios.post("http://localhost:3001/api/scores", { user:user, score:score}) 
        console.log(resp.data);
      } catch (err) {
        console.log(err);
      }
    }
    postScore();
      }
    }, halfbeat);

    return () => clearInterval(intervalID)
    
  }, []);

  useEffect(() => {
    // LeftHand TopRight
    if((posLeft.x * 1000) >= (window.innerWidth - 200) && (posLeft.y * 1000) <= (window.innerHeight - 200) && (upright || doubleright || doubleup)) {
      setScore(score + 10)
    }

    // LeftHand TopLeft
    if((posLeft.x * 1000) <= (window.innerWidth - 200) && (posLeft.y * 1000) <= (window.innerHeight - 200) && (upleft || doubleleft || doubleup)) {
      setScore(score + 10)
    }

    // LeftHand BottomLeft
    if((posLeft.x * 1000) <= (window.innerWidth - 200) && (posLeft.y * 1000) >= (window.innerHeight - 200) && (downleft || doubleleft)) {
      setScore(score + 10)
    }

    // RightHand TopLeft
    if((posRight.x * 1000) <= (window.innerWidth - 200) && (posRight.y * 1000) <= (window.innerHeight - 200) && (upleft || doubleleft || doubleup)) {
      setScore(score + 10)
    }

    // RightHand TopRight
    if((posRight.x * 1000) >= (window.innerWidth - 200) && (posRight.y * 1000) <= (window.innerHeight - 200) && (upright || doubleright || doubleup)) {
      setScore(score + 10)
    }

    // RightHand BottomRight
    if((posRight.x * 1000) >= (window.innerWidth - 200) && (posRight.y * 1000) >= (window.innerHeight - 200) && (downright || doubleright)) {
      setScore(score + 10)
    }
    
  }, [posLeft,posRight])

  return (
    <div className={styles.container}>
      <audio src={beethoven} autoPlay />
      <HandDetection setPosLeftHand={setPosLeft} setPosRightHand={setPosRight}/>
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

import { Link } from "react-router-dom";
import Webcam from "react-webcam";

import styles from "./Accueil.module.css";

export default function Accueil() {
  return (
    <div className={styles.container}>
      <h2>Welcome !</h2>
      <h3>Make sure your camera works</h3>
      <div className={styles.videoContainer}>
        <Webcam audio={false} height={375} width={500} />
      </div>
      <Link to="/game">
        <button>New Game</button>
      </Link>
    </div>
  );
}

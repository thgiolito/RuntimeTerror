import { Link } from "react-router-dom";
import Webcam from "react-webcam";
import Logo from "../../assets/Run_Time.png";


import styles from "./Accueil.module.css";

export default function Accueil() {
  return (
    <div className={styles.container}>
      <h2>Welcome to RUNTIME TERROR !</h2>
      <p>RUNTIME TERROR it's a music rhythm video game. The game features a hand-shaped controller that the player uses to simulate playing and dancing music.</p>
      <img src={Logo} alt="logo" className={styles.logo} />

      <h3> BEFORE STARTING TO PLAY...</h3>
      <p> Be wary of you environment, establish safe distances and take a few deep breathes! </p>
      
      <h3> Are you ready to dance Music? </h3>

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

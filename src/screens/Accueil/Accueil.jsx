import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Webcam from "react-webcam";

import UserContext from "../../contexts/usercontext";

import Logo from "../../assets/Run_Time.png";


import styles from "./Accueil.module.css";

export default function Accueil() {

  const { user, setUser } = useContext(UserContext)
  const [ name, setName ] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  }
  const handleClickName = (e) => {
    e.preventDefault();
    setUser(name);
  }
  return (
    <div className={styles.main}>
      <div className={styles.jukebox}>
        <div className={styles.containerText}>
          <h2>Welcome to RUNTIME TERROR !</h2>
          <p>RUNTIME TERROR is a fresh, simple dancing game. You simply need a webcam, and a little bit of coordination !</p>
          <h4> Good luck {user} ! </h4>
        </div>
        <div className={styles.container} id="LogoHome" >
          <img src={Logo} alt="logo" className={styles.logo} />
        </div>
        <div className={styles.containerOptions} id="start">
          <h3> BEFORE STARTING TO PLAY...</h3>
          <p> Be wary of your environment, establish safe distances and take a few deep breathes! </p>
        </div>
        <div className={styles.containerForm}>
        <form>
          <input className={styles.nameForm} onChange={handleNameChange} type="text" placeholder="My name"></input>
          <button className={styles.nameButton} onClick={handleClickName} type="submit" >Send !</button>
        </form>
      </div>
      <div className={styles.container} id="camera">
        <h3>Make sure your camera works</h3>
      </div>
      <div className={styles.videoContainer}>
        <Webcam audio={false} height={375} width={500} />
      </div>
      <Link to="/game">
        <button className={styles.gameButton}>New Game</button>
      </Link>
    </div>
  </div>
  );
}

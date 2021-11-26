import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Webcam from "react-webcam";

import UserContext from "../../contexts/usercontext";

import Logo from "../../assets/Run_Time.png";
import Reload from "../../assets/reload.png";

import styles from "./Accueil.module.css";

export default function Accueil() {
  const { user, setUser, setChore } = useContext(UserContext);

  useEffect(() => {
    setChore([
      0, 1, 0, 1, 0, 1, 0, 1, 6, 0, 6, 1, 6, 0, 6, 1, 4, 5, 4, 5, 4, 5, 4, 5, 0,
      1, 2, 3, 0, 1, 2, 3, 6, 0, 6, 1, 6, 0, 6, 1, 0, 3, 2, 1, 0, 3, 2, 1, 0, 3,
      2, 1, 0, 3, 2, 1, 5, 1, 5, 3, 5, 1, 5, 3, 4, 0, 4, 2, 4, 0, 4, 2, 0, 1, 0,
      1, 0, 1, 0, 1, 6, 0, 6, 1, 6, 0, 6, 1, 4, 5, 4, 5, 4, 5, 4, 5, 0, 1, 2, 3,
      0, 1, 2, 3, 6, 0, 6, 1, 6, 0, 6, 1, 0, 3, 2, 1, 0, 3, 2, 1, 0, 3, 2, 1, 0,
      3, 2, 1, 5, 1, 5, 3, 4, 0, 4, 2, 1, 0, 6, 6, 6,
    ]);
  }, []);

  const handleNameChange = (e) => {
    setUser(e.target.value);
  };

  return (
    <div className={styles.main}>
      <div className={styles.jukebox}>
        <div className={styles.containerText}>
          <p className={styles.introText}>
            RUNTIME TERROR is a fresh, simple dancing game.
          </p>
          <p className={styles.introText}>
            You only need a webcam... and a little bit of coordination !
          </p>
          <p className={styles.introText}>
            <b>Good luck{user ? ", " + user : ""} !</b>
          </p>
        </div>
        <div className={styles.container} id="LogoHome">
          <img src={Logo} alt="logo" className={styles.logo} />
        </div>
        <div className={styles.containerOptions} id="start">
          <h3> BEFORE STARTING TO PLAY...</h3>
          <p>
            {" "}
            Be wary of your environment, establish safe distances and take a few
            deep breathes!{" "}
          </p>
        </div>
        <div className={styles.containerForm}>
          <form>
            <input
              className={styles.nameForm}
              onChange={handleNameChange}
              type="text"
              placeholder="Enter your name!"
            ></input>
          </form>
        </div>
        <div className={styles.precamcontainer} id="camera">
          <p>Make sure that your camera works </p>
          <p> and you can touch the borders</p>
        </div>

        <div className={styles.videoContainer}>
          {/* <div className={styles.webcamoff}></div> */}
          <Webcam audio={false} height={375} width={500} zindex={91} />
        </div>

        <Link to="/game">
          <button className={styles.gameButton}>New Game</button>
        </Link>
      </div>
    </div>
  );
}

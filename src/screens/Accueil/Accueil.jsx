import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Webcam from "react-webcam";
import Logo from "../../assets/Run_Time.png";
import UserContext from "../../contexts/usercontext";


import styles from "./Accueil.module.css";

export default function Accueil() {

  const { user, setUser, setChore } = useContext(UserContext)
  const [ name, setName ] = useState("");

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
  }
  
  return (
    <div>
    <div className={styles.container}>
      <h2>Welcome to RUNTIME TERROR !</h2>
      <p>It's a rhythm game. The game features a hand-shaped controller that the player uses to simulate playing and dancing.</p>
     </div>

     <div className={styles.container} id="LogoHome" >
     <img src={Logo} alt="logo" className={styles.logo} />
     </div>

     <div className={styles.container} id="start">
      <h3> BEFORE STARTING TO PLAY...</h3>
      <p> Be wary of you environment, establish safe distances and take a few deep breathes! </p>
      
      <h3> Are you ready to dance? </h3>
      <h4> Enter your name :</h4>
      <form>
      <input onChange={handleNameChange} type="text" placeholder="My name"></input>
      
      </form>
      </div>
      
      <div className={styles.container} id="camera">
      <h3>Welcome{user ? ', ' + user : '' }, make sure your camera works</h3>
      </div>

      <div className={styles.videoContainer}>
        <Webcam audio={false} height={375} width={500} />
      </div>
      <Link to="/game">
        <button className={styles.gameButton}>New Game</button>
      </Link>
    </div>
  );
}

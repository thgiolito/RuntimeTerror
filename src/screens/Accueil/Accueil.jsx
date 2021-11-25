import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Webcam from "react-webcam";
import Logo from "../../assets/Run_Time.png";
import UserContext from "../../contexts/usercontext";


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
    <div>
    <div className={styles.container}>
      <h2>Welcome to RUNTIME TERROR !</h2>
      <p>RUNTIME TERROR it's a music rhythm video game. The game features a hand-shaped controller that the player uses to simulate playing and dancing music.</p>
     </div>

     <div className={styles.container} id="LogoHome" >
     <img src={Logo} alt="logo" className={styles.logo} />
     </div>

     <div className={styles.container} id="start">
      <h3> BEFORE STARTING TO PLAY...</h3>
      <p> Be wary of your environment, establish safe distances and take a few deep breathes! </p>
      
      <h3> Are you ready to dance? </h3>
      <h4> Enter your name :</h4>
      <form>
      <input onChange={handleNameChange} type="text" placeholder="My name"></input>
      <button className={styles.gameButton} onClick={handleClickName} type="submit" >Send !</button>
      </form>
      <h3> Welcome {user} ! </h3>
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
  );
}

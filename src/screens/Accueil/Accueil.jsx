import { Link } from "react-router-dom";

import styles from "./Accueil.module.css";

export default function Accueil() {
  return (
    <div className={styles.container}>
      <h2>Salut, je suis l'accueil</h2>
      <Link to="/game">
        <button>New Game</button>
      </Link>
    </div>
  );
}

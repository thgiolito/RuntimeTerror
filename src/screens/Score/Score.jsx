import { Link } from "react-router-dom";

import styles from "./Score.module.css";

export default function Score() {


  return (
    <div className={styles.container}>
      <h2>Salut, je suis le score</h2>

      <Link to="/game">
        <button>New Game</button>
      </Link>
      <Link to="/">
        <button>Main menu</button>
      </Link>
    </div>
  );
}

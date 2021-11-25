import { Link } from "react-router-dom"

import styles from "./Game.module.css"

export default function Game() {
    return (
        <div className={styles.container}>
            <h2>Salut, je suis le jeu</h2>
            <Link to="/score">
                <button>Partie finie</button>
            </Link>
        </div>
    )
}
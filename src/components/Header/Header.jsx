import styles from "./Header.module.css";
import Logo from "../../assets/Run_Time.png";

export default function Header() {
    return (
        <div className={styles.container}>
            <img src={Logo} />
            <h2>PlaceHolder</h2>

        </div>
    )
}
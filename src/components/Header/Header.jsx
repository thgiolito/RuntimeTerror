import { Link } from "react-router-dom";

import styles from "./Header.module.css";
import Logo from "../../assets/Run_Time.png";

export default function Header() {
  return (
    <div className={styles.container}>
        <h2 className={styles.title}>Runtime</h2>
      <Link to="/">
        <img src={Logo} alt="logo" className={styles.logo} />
      </Link>
      <h2 className={styles.title}>Terror</h2>
    </div>
  );
}

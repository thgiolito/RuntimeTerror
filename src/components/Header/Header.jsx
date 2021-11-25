import { Link } from "react-router-dom";

import styles from "./Header.module.css";
import Logo from "../../assets/Run_Time.png";

export default function Header() {
  return (
    <div className={styles.container}>
      <Link to="/">
        <img src={Logo} alt="logo" className={styles.logo} />
      </Link>
      <h2>PlaceHolder</h2>
    </div>
  );
}

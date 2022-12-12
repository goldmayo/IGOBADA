import React from "react";
import styles from "./LandingNav.module.css";
import { Link } from "react-router-dom";

const LandingNav = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.nav_list}>
        <li className={styles.nav_list_item}>
          <Link to={"/login"}>로그인</Link>
        </li>
      </ul>
    </nav>
  );
};

export default React.memo(LandingNav);

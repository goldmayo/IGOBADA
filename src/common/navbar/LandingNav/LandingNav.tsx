import React from "react";
import styles from "./LandingNav.module.css";
import { Link } from "react-router-dom";

const LandingNav = () => {
  return (
    <nav className={styles.navbar}>
      <button className={styles.login_link_button}>
        <Link to={"/login"}>로그인</Link>
      </button>
    </nav>
  );
};

export default React.memo(LandingNav);

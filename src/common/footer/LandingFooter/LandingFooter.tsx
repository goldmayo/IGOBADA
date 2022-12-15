import React from "react";
import styles from "./LandingFooter.module.css";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
const LandingFooter = () => {
  return (
    <footer className={styles.landing_footer}>
      <div className={styles.footer_content}>
        <div className={styles.logo_box}>
          <Link className={styles.logo_link} to="/">
            <img className={styles.logo} src="images/logo_transparent.svg" width={"120px"} height={"50px"} alt="logo" />
          </Link>
          <a href="https://github.com/goldmayo/Business-Card-Maker">
            <FaGithub className={styles.github} size="3rem" color="white" />
          </a>
        </div>
        <div className={styles.copyright_box}>
          <p className={styles.copyright}>&copy;2022 HyunSeungJai all rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default React.memo(LandingFooter);

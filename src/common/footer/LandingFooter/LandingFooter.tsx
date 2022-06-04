import React from "react";
import styles from "./LandingFooter.module.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const LandingFooter = () => {
  return (
    <footer className={styles.landing_footer}>
      <div className={styles.footer_content}>
        <div className={styles.logo_box}>
          <Link to="/">
            <img className={styles.logo} src="images/logo_transparent.svg" alt="logo" />
          </Link>
          <a href="https://github.com/goldmayo/Business-Card-Maker">
            <FontAwesomeIcon className={styles.github} icon={faGithub} size="3x" inverse />
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

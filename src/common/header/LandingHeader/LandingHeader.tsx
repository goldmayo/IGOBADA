import React from "react";
import styles from "./LandingHeader.module.css";
import { Link } from "react-router-dom";
import LandingNav from "../../../common/navbar/LandingNav/LandingNav";

interface LandingHeaderInterface {
  isScrolled: boolean;
}

const LandingHeader: React.FC<LandingHeaderInterface> = ({ isScrolled }) => {
  return (
    <header className={isScrolled ? `${styles.header} ${styles.header_scrolled}` : styles.header}>
      <div className={styles.header_content_box}>
        <button className={styles.landing_link_button}>
          <Link to={"/"}>
            <img
              className={styles.logo}
              src="images/logo_transparent.svg"
              width={"120px"}
              height={"50px"}
              alt="banner"
            />
          </Link>
        </button>
        <LandingNav />
      </div>
    </header>
  );
};

export default React.memo(LandingHeader);

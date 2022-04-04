import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p className={styles.title}>BCM app</p>
    </footer>
  );
};

export default React.memo(Footer);

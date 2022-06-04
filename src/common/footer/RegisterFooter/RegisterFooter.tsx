import React from "react";
import styles from "./RegisterFooter.module.css";

const RegisterFooter = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.copy_right_container}>
        <span>&copy;Hyun SeungJai all right reserved</span>
      </div>
    </footer>
  );
};

export default RegisterFooter;

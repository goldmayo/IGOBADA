import React from "react";
import styles from "./Spinner.module.css";
import { TailSpin } from "react-loader-spinner";

const Spinner = () => {
  return (
    <div className={styles.spinner}>
      <TailSpin ariaLabel="loading-indicator" color="#6333ff" />
    </div>
  );
};

export default Spinner;

import React from "react";
import styles from "./LandingMainContainer.module.css";

interface LandingMainContainerInterface {
  children: React.ReactNode;
}

const LandingMainContainer: React.FC<LandingMainContainerInterface> = ({ children }) => {
  return <main className={styles.main}>{children}</main>;
};

export default LandingMainContainer;

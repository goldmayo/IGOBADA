import React from "react";
import styles from "./MakerMainContainer.module.css";

interface MakerMainContainerInterface {
  children: React.ReactNode;
}

const MakerMainContainer: React.FC<MakerMainContainerInterface> = ({ children }) => {
  return <section className={styles.maker}>{children}</section>;
};

export default MakerMainContainer;

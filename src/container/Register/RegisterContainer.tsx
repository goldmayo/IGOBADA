import React from "react";
import styles from "./RegisterContainer.module.css";

interface RegisterContainerInterface {
  children: React.ReactNode;
}

const RegisterContainer: React.FC<RegisterContainerInterface> = ({ children }) => {
  return <main className={styles.main}>{children}</main>;
};

export default RegisterContainer;

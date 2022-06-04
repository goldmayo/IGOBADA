import React from "react";
import styles from "./LoginMainContainer.module.css";

interface LoginMainContainerInterface {
  children: React.ReactNode;
}

const LoginMainContainer: React.FC<LoginMainContainerInterface> = ({ children }) => {
  return <main className={styles.main}>{children}</main>;
};

export default LoginMainContainer;

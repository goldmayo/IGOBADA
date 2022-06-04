import React from "react";
import styles from "./MainNavbar.module.css";

export interface MainNavbarInterface {
  children: React.ReactNode;
}

const MainNavbar: React.FC<MainNavbarInterface> = ({ children }) => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.nav_list}>{children}</ul>
    </nav>
  );
};

export default MainNavbar;

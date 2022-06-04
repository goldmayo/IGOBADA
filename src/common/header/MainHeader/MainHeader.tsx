import React from "react";
import styles from "./MainHeader.module.css";

type HeaderProps = {
  onLogout?: () => void;
  children: React.ReactNode;
};

const MainHeader = ({ onLogout, children }: HeaderProps) => {
  return (
    <header className={styles.header}>
      <img src="images/logo_transparent.svg" alt="banner" />
      {children}
      {onLogout && (
        <button className={styles.logout} onClick={onLogout}>
          로그아웃
        </button>
      )}
    </header>
  );
};

export default React.memo(MainHeader);

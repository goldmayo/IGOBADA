import React from "react";
import styles from "./Button.module.css";

type ButtonProps = {
  name: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

const Button = ({ name, onClick }: ButtonProps) => {
  return (
    <button className={styles.button} onClick={onClick}>
      {name}
    </button>
  );
};

export default Button;

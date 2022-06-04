import React from "react";
import styles from "./Button.module.css";

type ButtonProps = {
  name: string;
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

const areEqual = (prevProps: ButtonProps, nextProps: ButtonProps) => {
  const prevEntries = Object.entries(prevProps).toString();
  const nextEntries = Object.entries(nextProps).toString();
  return prevEntries === nextEntries;
};

const Button = ({ name, type, onClick }: ButtonProps) => {
  return (
    <button className={styles.button} type={type} onClick={onClick}>
      {name}
    </button>
  );
};

export default React.memo(Button, areEqual);

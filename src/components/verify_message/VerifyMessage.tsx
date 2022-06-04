import React from "react";
import styles from "./VerifyMessage.module.css";

export interface VerifyMessageInterface {
  message: string;
}

const VerifyMessage: React.FC<VerifyMessageInterface> = ({ message }) => {
  return (
    <div className={styles.messageContainer}>
      <span className={styles.message}>{message}</span>
    </div>
  );
};

export default VerifyMessage;

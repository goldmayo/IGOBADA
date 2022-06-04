import React from "react";
import styles from "./AddButton.module.css";

declare interface AddButtonInterface {
  openModal: () => void;
}

const AddButton: React.FC<AddButtonInterface> = ({ openModal }) => {
  return (
    <li className={styles.add_card}>
      <button className={styles.add_button} title="business card add button" onClick={openModal}>
        <span>+ 새 명함</span>
      </button>
    </li>
  );
};

export default AddButton;

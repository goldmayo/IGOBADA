import React from "react";
import styles from "./Card.module.css";
import { CardInfo } from "../maker/MakerTypes";

type CardProps = {
  card: CardInfo;
};
const DEFAULT_IMG_URL = "/images/default_logo.png";

const getTheme = (theme: string) => {
  switch (theme) {
    case "dark":
      return styles.dark;
    case "light":
      return styles.light;
    case "colorful":
      return styles.colorful;
    default:
      throw new Error(`unknown theme: ${theme}`);
  }
};

const areEqual = (prevProps: CardProps, nextProps: CardProps) => {
  const prevEntries = Object.entries(prevProps.card).toString();
  const nextEntries = Object.entries(nextProps.card).toString();
  return prevEntries === nextEntries;
};

const Card = ({ card }: CardProps) => {
  const { name, companny, theme, title, email, message, fileURL } = card;
  const imgURL = fileURL || DEFAULT_IMG_URL;
  return (
    <li className={`${styles.card} ${getTheme(theme)}`}>
      <img className={styles.avatar} src={imgURL} alt="profile" />
      <div className={styles.info}>
        <h1 className={styles.name}>{name}</h1>
        <p className={styles.companny}>{companny}</p>
        <p className={styles.title}>{title}</p>
        <p className={styles.email}>{email}</p>
        <p className={styles.message}>{message}</p>
      </div>
    </li>
  );
};

export default React.memo(Card, areEqual);

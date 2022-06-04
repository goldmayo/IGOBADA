import React from "react";
import { CardInfo } from "../../page/Main/MakerTypes.d";
import styles from "./CardPreview.module.css";

export interface CardPreviewInterface {
  card: CardInfo;
}

const DEFAULT_IMG_URL = "/images/defualt_avatar.png";

const getTheme = (theme: string | undefined) => {
  switch (theme) {
    case "dark":
      return styles.dark;
    case "light":
      return styles.light;
    case "colorful":
      return styles.colorful;
    case undefined:
      return styles.light;
    default:
      throw new Error(`unknown theme: ${theme}`);
  }
};

const CardPreview = ({ card }: CardPreviewInterface) => {
  const { name, companny, theme, title, email, phone, fileURL } = card;
  return (
    <div className={`${styles.card} ${getTheme(theme)}`}>
      <img className={styles.avatar} src={fileURL ? fileURL : DEFAULT_IMG_URL} alt="profile" />
      <div className={styles.info}>
        <h1 className={styles.name}>{name}</h1>
        <p className={styles.title}>{title}</p>
        <p className={styles.companny}>{companny}</p>
        <p className={styles.email}>{email}</p>
        <p className={styles.phone}>{phone}</p>
      </div>
    </div>
  );
};

export default CardPreview;

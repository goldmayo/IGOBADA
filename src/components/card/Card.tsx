import React, { useState, useCallback } from "react";
import styles from "./Card.module.css";
import { CardInfo } from "../../page/Main/MakerTypes.d";
import { Modal } from "../modal/Modal";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AssetUploader from "../../service/asset_uploader/AssetUploader";

import TestEditForm from "../edit_form_test/TestEditForm";
type CardProps = {
  card: CardInfo;
  imageUploader: AssetUploader;
  updateCard: (card: CardInfo) => void;
  deleteCard: (card: CardInfo) => void;
  phoneNumberFormatter: (value: string) => string;
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

const Card = ({ card, updateCard, deleteCard, imageUploader, phoneNumberFormatter }: CardProps) => {
  const { name, companny, theme, title, email, phone, message, fileURL } = card;
  const imgURL = fileURL || DEFAULT_IMG_URL;
  const [modalFlag, setModalFlag] = useState<boolean>(false);
  const openModal = useCallback(() => {
    setModalFlag(true);
  }, []);
  const closeModal = useCallback(() => {
    console.log("card close modal");

    setModalFlag(false);
  }, []);
  return (
    <li className={`${styles.card} ${getTheme(theme)}`}>
      <img className={styles.avatar} src={imgURL} alt="profile" />
      <div className={styles.info}>
        <h1 className={styles.name}>{name}</h1>
        <p className={styles.title}>{title}</p>
        <p className={styles.companny}>{companny}</p>
        <p className={styles.phone}>
          <strong>M</strong> {phone}
        </p>
        <p className={styles.email}>
          <strong>E-mail</strong> {email}
        </p>
        {/* <p className={styles.message}>{message}</p> */}
      </div>
      <button className={styles.menu} onClick={openModal}>
        <FontAwesomeIcon icon={faEllipsisVertical} />
      </button>
      <Modal openFlag={modalFlag} onClose={closeModal} headerTextContent={"명함 편집"}>
        {/* <EditForm
          card={card}
          imageUploader={imageUploader}
          updateCard={updateCard}
          deleteCard={deleteCard}
          phoneNumberFormatter={phoneNumberFormatter}
        /> */}
        <TestEditForm
          card={card}
          imageUploader={imageUploader}
          updateCard={updateCard}
          deleteCard={deleteCard}
          phoneNumberFormatter={phoneNumberFormatter}
        />
      </Modal>
    </li>
  );
};

export default React.memo(Card, areEqual);

import React from "react";
import styles from "./CardEditForm.module.css";
import { CardInfo } from "../maker/MakerTypes";
import Button from "../button/Button";
import ImageFileInput from "../image_file_input/ImageFileInput";

type CardEditFormProps = {
  card: CardInfo;
};

const CardEditForm = ({ card }: CardEditFormProps) => {
  const { name, companny, theme, title, email, message, fileURL } = card;
  const onSubmit = () => {};
  return (
    <form className={styles.form}>
      <input className={styles.input} type="text" name="name" value={name} />
      <input className={styles.input} type="text" name="companny" value={companny} />
      <select className={styles.select} name="theme" value={theme}>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
        <option value="colorful">Colorful</option>
      </select>
      <input className={styles.input} type="text" name="title" value={title} />
      <input className={styles.input} type="text" name="email" value={email} />
      <textarea className={styles.textarea} name="message" value={message} />
      <div className={styles.fileInput}>
        <ImageFileInput />
      </div>
      <Button name="Delete" onClick={onSubmit} />
    </form>
  );
};

export default CardEditForm;

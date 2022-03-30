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
    /**
     * iput value warning
     * the value property is read only (not mutable) then add property "readOny"
     * the value property is mutable then set change property value to defaultValue
     */
    <form className={styles.form}>
      <input className={styles.input} type="text" name="name" defaultValue={name} />
      <input className={styles.input} type="text" name="companny" defaultValue={companny} />
      <select className={styles.select} name="theme" defaultValue={theme}>
        <option value="light">light</option>
        <option value="dark">dark</option>
        <option value="colorful">colorful</option>
      </select>
      <input className={styles.input} type="text" name="title" defaultValue={title} />
      <input className={styles.input} type="text" name="email" defaultValue={email} />
      <textarea className={styles.textarea} name="message" defaultValue={message} />
      <div className={styles.fileInput}>
        <ImageFileInput />
      </div>
      <Button name="Delete" onClick={onSubmit} />
    </form>
  );
};

export default CardEditForm;

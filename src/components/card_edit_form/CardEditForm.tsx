import React, { useRef } from "react";
import styles from "./CardEditForm.module.css";
import { CardInfo } from "../maker/MakerTypes";
import Button from "../button/Button";
import ImageFileInput from "../image_file_input/ImageFileInput";

type CardEditFormProps = {
  card: CardInfo;
  updateCard: (card: CardInfo) => void;
  deleteCard: (card: CardInfo) => void;
};

const CardEditForm = ({ card, updateCard, deleteCard }: CardEditFormProps) => {
  const { name, companny, theme, title, email, message, fileURL } = card;

  const formRef = useRef<HTMLFormElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const compannyRef = useRef<HTMLInputElement>(null);
  const themeRef = useRef<HTMLSelectElement>(null);
  const titleRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const onDelete = () => {
    deleteCard(card);
  };

  const onChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    if (event.currentTarget == null) return;
    event.preventDefault();
    updateCard({
      ...card,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };

  return (
    /**
     * iput value warning
     * the value property is read only (not mutable) then add property "readOny"
     * the value property is mutable then set change property value to defaultValue
     */
    <form ref={formRef} className={styles.form}>
      <input ref={nameRef} className={styles.input} type="text" name="name" defaultValue={name} onChange={onChange} />
      <input
        ref={compannyRef}
        className={styles.input}
        type="text"
        name="companny"
        defaultValue={companny}
        onChange={onChange}
      />
      <select ref={themeRef} className={styles.select} name="theme" defaultValue={theme} onChange={onChange}>
        <option value="light">light</option>
        <option value="dark">dark</option>
        <option value="colorful">colorful</option>
      </select>
      <input
        ref={titleRef}
        className={styles.input}
        type="text"
        name="title"
        defaultValue={title}
        onChange={onChange}
      />
      <input
        ref={emailRef}
        className={styles.input}
        type="text"
        name="email"
        defaultValue={email}
        onChange={onChange}
      />
      <textarea
        ref={messageRef}
        className={styles.textarea}
        name="message"
        defaultValue={message}
        onChange={onChange}
      />
      <div className={styles.fileInput}>
        <ImageFileInput />
      </div>
      <Button name="Delete" onClick={onDelete} />
    </form>
  );
};

export default CardEditForm;

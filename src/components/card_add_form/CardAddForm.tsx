import React, { useRef } from "react";
import styles from "./CardAddForm.module.css";
import Button from "../button/Button";
import ImageFileInput from "../image_file_input/ImageFileInput";
import { CardInfo } from "../maker/MakerTypes";
import { v4 as uuidv4 } from "uuid";

interface ICardAddForm {
  onAdd: (newCard: CardInfo) => void;
}

const CardAddForm = ({ onAdd }: ICardAddForm) => {
  const formRef = useRef<HTMLFormElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const compannyRef = useRef<HTMLInputElement>(null);
  const themeRef = useRef<HTMLSelectElement>(null);
  const titleRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const onSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const newCard = {
      id: uuidv4(),
      name: nameRef.current?.value || "",
      companny: compannyRef.current?.value || "",
      // theme: themeRef.current?.value as string,
      theme: themeRef.current?.value || "light",
      title: titleRef.current?.value || "",
      email: emailRef.current?.value || "",
      message: messageRef.current?.value || "",
      fileName: "",
      fileURL: "",
    };
    formRef.current?.reset();
    onAdd(newCard);
  };

  return (
    <form ref={formRef} className={styles.form}>
      <input ref={nameRef} className={styles.input} type="text" name="name" placeholder="Name" autoComplete="off" />
      <input
        ref={compannyRef}
        className={styles.input}
        type="text"
        name="companny"
        placeholder="Companny"
        autoComplete="off"
      />
      <select ref={themeRef} className={styles.select} name="theme" placeholder="Theme">
        <option placeholder="light">light</option>
        <option placeholder="dark">dark</option>
        <option placeholder="colorful">colorful</option>
      </select>
      <input ref={titleRef} className={styles.input} type="text" name="title" placeholder="Title" autoComplete="off" />
      <input ref={emailRef} className={styles.input} type="text" name="email" placeholder="Email" autoComplete="off" />
      <textarea ref={messageRef} className={styles.textarea} name="message" placeholder="Message" />
      <div className={styles.fileInput}>
        <ImageFileInput />
      </div>
      <Button name="Add" onClick={onSubmit} />
    </form>
  );
};

export default CardAddForm;

import React, { useCallback, useRef } from "react";
import styles from "./CardEditForm.module.css";
import { CardInfo } from "../maker/MakerTypes";
import Button from "../button/Button";
import ImageFileInput from "../image_file_input/ImageFileInput";
import AssetUploader from "../../service/asset_uploader/AssetUploader";

type CardEditFormProps = {
  card: CardInfo;
  imageUploader: AssetUploader;
  updateCard: (card: CardInfo) => void;
  deleteCard: (card: CardInfo) => void;
};

const CardEditForm = ({ card, imageUploader, updateCard, deleteCard }: CardEditFormProps) => {
  const { name, companny, theme, title, email, message, fileName, fileURL } = card;

  const formRef = useRef<HTMLFormElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const compannyRef = useRef<HTMLInputElement>(null);
  const themeRef = useRef<HTMLSelectElement>(null);
  const titleRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const handleFileChange = useCallback(
    (file: { name: string; url: string }) => {
      updateCard({
        ...card,
        fileName: file.name,
        fileURL: file.url,
      });
    },
    [card, updateCard]
  );

  const onDelete = useCallback(() => {
    deleteCard(card);
  }, [card, deleteCard]);

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
        <ImageFileInput imageUploader={imageUploader} name={fileName} onFileChange={handleFileChange} />
      </div>
      <Button name="Delete" onClick={onDelete} />
    </form>
  );
};

export default CardEditForm;

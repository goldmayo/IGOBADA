import React, { useState, useRef } from "react";
import styles from "./CardAddForm.module.css";
import Button from "../button/Button";
import ImageFileInput from "../image_file_input/ImageFileInput";
import { CardInfo } from "../maker/MakerTypes";
import { v4 as uuidv4 } from "uuid";
import AssetUploader from "../../service/asset_uploader/AssetUploader";

interface ICardAddForm {
  onAdd: (newCard: CardInfo) => void;
  imageUploader: AssetUploader;
}

type File = {
  fileName: string;
  fileURL: string;
};

const CardAddForm = ({ onAdd, imageUploader }: ICardAddForm) => {
  const [file, setFile] = useState<File>({
    fileName: "",
    fileURL: "",
  });
  const formRef = useRef<HTMLFormElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const compannyRef = useRef<HTMLInputElement>(null);
  const themeRef = useRef<HTMLSelectElement>(null);
  const titleRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const handleFileChange = (file: { name: string; url: string }) => {
    setFile({
      fileName: file.name,
      fileURL: file.url,
    });
  };

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
      fileName: file.fileName || "",
      fileURL: file.fileURL || "",
    };
    formRef.current?.reset();
    setFile({ fileName: "", fileURL: "" });
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
        <ImageFileInput imageUploader={imageUploader} name={file.fileName} onFileChange={handleFileChange} />
      </div>
      <Button name="Add" onClick={onSubmit} />
    </form>
  );
};

export default CardAddForm;

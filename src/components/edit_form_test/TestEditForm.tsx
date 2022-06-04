import React, { useState, useCallback } from "react";
import styles from "./TestEditForm.module.css";

import { TestEditFormInterface } from "./EditForm.d";
import { EditFormCard, NewProfileImage } from "./EditForm.d";
import { AddFormInputComponents, AddFormSelectComponents } from "../add_form_test/TestArrayInjection.d";

import FormSelect from "../form_select/FormSelect";
import FormInput from "../form_input/FormInput";
import Button from "../button/Button";
import ImageFileInput from "../image_file_input/ImageFileInput";
import CardPreview from "../card_preview/CardPreview";

const TestEditForm: React.FC<TestEditFormInterface> = ({
  card,
  imageUploader,
  updateCard,
  deleteCard,
  phoneNumberFormatter,
}) => {
  const inputs = AddFormInputComponents;
  const selects = AddFormSelectComponents;
  const [tempCard, setTempCard] = useState<EditFormCard>({
    ...card,
  });
  const [file, setFile] = useState<NewProfileImage>({
    fileName: card.fileName,
    fileURL: card.fileURL,
  });

  const handleFileChange = useCallback((file: { name: string; url: string }) => {
    setFile({
      fileName: file.name,
      fileURL: file.url,
    });
  }, []);

  const onDelete = useCallback(() => {
    deleteCard(card);
  }, [card, deleteCard]);

  const handleModify = (event: React.MouseEvent<HTMLFormElement>) => {
    event.preventDefault();
    const modifiedCard = {
      id: tempCard.id,
      name: tempCard.name,
      companny: tempCard.companny,
      theme: tempCard.theme,
      title: tempCard.title,
      email: tempCard.email,
      message: tempCard.message,
      phone: tempCard.phone,
      fileName: file.fileName,
      fileURL: file.fileURL,
    };
    updateCard(modifiedCard);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    if (event.target == null) return;
    event.preventDefault();
    if (event.target.name === "phone") {
      setTempCard({
        ...tempCard,
        [event.target.name]: phoneNumberFormatter(event.target.value),
      });
    } else {
      setTempCard({
        ...tempCard,
        [event.target.name]: event.target.value,
      });
    }
  };

  return (
    <>
      <CardPreview card={{ ...tempCard, ...file }} />
      <form className={styles.form} onSubmit={handleModify}>
        {selects.map((select) => (
          <FormSelect
            key={select.id}
            options={select.options}
            labelText={select.labelText}
            name={select.name}
            placeholder={select.placeholder}
            onChange={handleChange}
          />
        ))}
        {inputs.map((input) => (
          <FormInput key={input.id} value={tempCard[input.name]} onChange={handleChange} {...input} />
        ))}
        <div className={styles.buttonGroup}>
          <div className={styles.fileInput}>
            <ImageFileInput imageUploader={imageUploader} name={card.fileName} onFileChange={handleFileChange} />
          </div>
          <Button name="삭제" onClick={onDelete} />
          <Button name="수정" type={"submit"} />
        </div>
      </form>
    </>
  );
};

export default TestEditForm;

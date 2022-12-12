import React, { useState, useCallback, useRef } from "react";

import styles from "./TestAddForm.module.css";
import { v4 as uuidv4 } from "uuid";

import { TestAddFormInterface, AddFormInterface } from "./AddForm.d";
import { ProfileImage } from "./AddForm.d";
import { AddFormInputComponents, AddFormSelectComponents } from "./TestArrayInjection.d";
import { CardInfo } from "../../page/Main/MakerTypes.d";
import FormInput from "../form_input/FormInput";
import ImageFileInput from "../image_file_input/ImageFileInput";
import Button from "../button/Button";
import FormSelect from "../form_select/FormSelect";
import CardPreview from "../card_preview/CardPreview";

const DEFAULT_IMG_URL = "/images/defualt_avatar.png";

const TestAddForm: React.FC<TestAddFormInterface> = ({ onAdd, imageUploader, phoneNumberFormatter }) => {
  const formRef = useRef<HTMLFormElement>(null);
  const inputs = AddFormInputComponents;
  const selects = AddFormSelectComponents;

  const [values, setValues] = useState<AddFormInterface>({
    name: "",
    companny: "",
    theme: "",
    title: "",
    email: "",
    phone: "",
  });
  const [file, setFile] = useState<ProfileImage>({
    fileName: "",
    fileURL: "",
  });
  const [previewCard, setPreviewCard] = useState<CardInfo>({
    id: "",
    name: "",
    companny: "",
    theme: "light",
    title: "",
    email: "",
    message: "",
    phone: "",
    fileName: "",
    fileURL: DEFAULT_IMG_URL,
  });
  const handleFileChange = useCallback((file: { name: string; url: string }) => {
    setFile({
      fileName: file.name,
      fileURL: file.url,
    });
  }, []);

  const handlePhoneNumberChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      event.preventDefault();
      // const regExp = /^01(?:0|1|[6-9]) - (?:\d{3}|\d{4}) - \d{4}$/;
      if (event.target !== null) {
        setValues({ ...values, [event.target.name]: phoneNumberFormatter(event.target.value) });
        setPreviewCard({ ...previewCard, [event.target.name]: event.target.value });
      }
    },
    [phoneNumberFormatter, previewCard, values]
  );

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    if (event.target == null) return;
    event.preventDefault();
    if (event.target !== null) {
      setValues({ ...values, [event.target.name]: event.target.value });
      setPreviewCard({
        ...previewCard,
        [event.target.name]: event.target.value,
      });
    }
  };

  const handleSubmit = useCallback(
    (event: React.MouseEvent<HTMLFormElement>) => {
      event.preventDefault();
      const newCard = {
        id: uuidv4(),
        name: values.name || "",
        companny: values.companny || "",
        theme: values.theme || "light",
        title: values.title || "",
        email: values.email || "",
        phone: values.phone || "",
        message: "",
        fileName: file.fileName || "",
        fileURL: file.fileURL === "" ? DEFAULT_IMG_URL : file.fileURL,
      };
      setFile({ fileName: "", fileURL: "" });
      onAdd(newCard);
      formRef.current?.reset();
    },
    [file.fileName, file.fileURL, onAdd, values]
  );
  return (
    <>
      <CardPreview card={previewCard} />
      <form ref={formRef} className={styles.form} onSubmit={handleSubmit}>
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
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={input.name !== "phone" ? handleChange : handlePhoneNumberChange}
          />
        ))}
        <div className={styles.buttonGroup}>
          <div className={styles.fileInput}>
            <ImageFileInput imageUploader={imageUploader} name={file.fileName} onFileChange={handleFileChange} />
          </div>
          <Button name="추가" type={"submit"} />
        </div>
      </form>
    </>
  );
};

export default TestAddForm;

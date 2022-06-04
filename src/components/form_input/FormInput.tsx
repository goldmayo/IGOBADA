import React, { useState } from "react";
import styles from "./FormInput.module.css";

import { FormInputInterface } from "./FormInput.d";

const FormInput: React.FC<FormInputInterface> = (props) => {
  const [focused, setFocused] = useState<boolean>(false);

  const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => {
    setFocused(true);
  };

  return (
    <div className={styles.inputGroup}>
      <label className={styles.label} htmlFor={props.name}>
        {props.label}
      </label>
      <input
        className={styles.input}
        id={props.name}
        name={props.name}
        type={props.type}
        value={props.value}
        placeholder={props.placeholder}
        onChange={props.onChange}
        autoComplete="off"
        minLength={props.minlength}
        maxLength={props.maxlength}
        pattern={props.pattern}
        required={props.required}
        onBlur={handleFocus}
        data-focused={focused.toString()}
      />
      <span className={styles.errormessage}>{props.errormessage}</span>
    </div>
  );
};

export default FormInput;

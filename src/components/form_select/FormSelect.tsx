import React from "react";
import styles from "./FormSelect.module.css";
import { FormSelectInterface } from "./FormSelect.d";

const FormSelect: React.FC<FormSelectInterface> = ({ options, labelText, name, placeholder, onChange }) => {
  return (
    <div className={styles.selectGroup}>
      <label className={styles.label} htmlFor={name}>
        {labelText}
      </label>
      <select className={styles.select} name={name} placeholder={placeholder} id={name} onChange={onChange}>
        {options.map((option) => (
          <option key={option.id} placeholder={option.style}>
            {option.style}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FormSelect;

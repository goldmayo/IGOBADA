import React, { useState } from "react";
import styles from "./PhoneNumber.module.css";

export interface PhoneNumberInputInterface {
  phoneRef: React.RefObject<HTMLInputElement>;
  defaultValue?: string;
}

const PhoneNumberInput = ({ phoneRef, defaultValue }: PhoneNumberInputInterface) => {
  const [inputValue, setInputValue] = useState<string>("");

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    if (event.currentTarget != null) {
      const formattedPhoneNumber = formatPhoneNumber(event.currentTarget.value);
      setInputValue(formattedPhoneNumber);
    }
  };

  return (
    <>
      {defaultValue === undefined ? (
        <input
          ref={phoneRef}
          className={styles.input}
          type="text"
          name="phone number"
          defaultValue={defaultValue}
          onChange={handleInput}
        />
      ) : (
        <input
          ref={phoneRef}
          className={styles.input}
          type="text"
          name="phone"
          placeholder="phone number"
          autoComplete="off"
          id="phone"
          onChange={handleInput}
        />
      )}
    </>
  );
};

const formatPhoneNumber = (value: string): string => {
  if (!value) return value;
  const phoneNumber = value.replace(/[^9\d]/, "");
  const phoneNumberLength = phoneNumber.length;
  if (phoneNumberLength < 4) return phoneNumber;
  if (phoneNumberLength < 8) {
    return `${phoneNumber.slice(0, 3)} - ${phoneNumber.slice(3)}`;
  }
  return `${phoneNumber.slice(0, 3)} - ${phoneNumber.slice(3, 8)} - ${phoneNumber.slice(8)}`;
};

export default PhoneNumberInput;

import React, { useCallback } from "react";
import styles from "./SearchForm.module.css";
import { MdSearch, MdClear } from "react-icons/md";

declare interface SearchFormInterface {
  inputRef: React.RefObject<HTMLInputElement>;

  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchForm: React.FC<SearchFormInterface> = ({ inputRef, onChange }) => {
  const clearQuery = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      if (inputRef.current) {
        inputRef.current.value = "";
      }
    },
    [inputRef]
  );

  return (
    <div className={styles.searchForm}>
      <form className={styles.searchInput}>
        <input
          ref={inputRef}
          className={styles.input}
          type="text"
          placeholder="명함 검색"
          autoComplete="off"
          name="search"
          onChange={onChange}
        />
        <button className={styles.button} onClick={clearQuery}>
          {inputRef.current?.value === "" ? <MdSearch size={"1rem"} /> : <MdClear size={"1rem"} id={styles.clear} />}
        </button>
      </form>
    </div>
  );
};

export default SearchForm;

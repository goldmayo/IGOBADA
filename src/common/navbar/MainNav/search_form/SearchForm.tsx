import React, { useCallback } from "react";
import styles from "./SearchForm.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

declare interface SearchFormInterface {
  inputRef: React.RefObject<HTMLInputElement>;

  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchForm: React.FC<SearchFormInterface> = ({ inputRef, onChange }) => {
  const clearQuery = useCallback(() => {
    if (inputRef.current) {
      inputRef.current.value = "";
    }
  }, [inputRef]);

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
        <button className={styles.button}>
          {inputRef.current?.value === "" ? (
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          ) : (
            <FontAwesomeIcon icon={faX} id={styles.clear} onClick={clearQuery} />
          )}
        </button>
      </form>
    </div>
  );
};

export default SearchForm;

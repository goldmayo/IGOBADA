import React, { useRef, useState, useCallback } from "react";
import styles from "./ImageFileInput.module.css";
import AssetUploader from "../../service/asset_uploader/AssetUploader";

interface ImageFileInputProps {
  imageUploader: AssetUploader;
  name: string;
  onFileChange: (file: { name: string; url: string }) => void;
}

const areEqual = (prevProps: ImageFileInputProps, nextProps: ImageFileInputProps) => {
  const prevEntries = Object.entries(prevProps).toString();
  const nextEntries = Object.entries(nextProps).toString();
  return prevEntries === nextEntries;
};

const ImageFileInput = ({ imageUploader, name, onFileChange }: ImageFileInputProps) => {
  const [loading, setLoading] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    if (event.target?.files) {
      setLoading(true);
      const uploaded = await imageUploader.upload(event.target?.files[0]);
      setLoading(false);
      onFileChange({ name: uploaded.original_filename, url: uploaded.url });
    }
  };

  const handleButtonClick = useCallback((event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    inputRef.current?.click();
  }, []);

  return (
    <div className={styles.container}>
      <input ref={inputRef} className={styles.input} type="file" accept="image/*" name="file" onChange={handleChange} />
      {loading ? (
        <div className={styles.loading}></div>
      ) : (
        <button className={`${styles.button} ${name ? styles.pink : styles.grey}`} onClick={handleButtonClick}>
          {name || "프로필 업로드"}
        </button>
      )}
    </div>
  );
};

export default React.memo(ImageFileInput, areEqual);

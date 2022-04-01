import React from "react";
import styles from "./Editor.module.css";

type EditorProps = {
  children: React.ReactNode;
};
const Editor = ({ children }: EditorProps) => {
  return (
    <section className={styles.editor}>
      <h1 className={styles.title}>Card Editor</h1>
      {children}
    </section>
  );
};

export default Editor;

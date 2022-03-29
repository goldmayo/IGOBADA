import React from "react";
import styles from "./Editor.module.css";
import { CardInfo } from "../maker/MakerTypes";
import CardEditForm from "../card_edit_form/CardEditForm";

type EditorProps = {
  cards: CardInfo[];
};
const Editor = ({ cards }: EditorProps) => {
  return (
    <section className={styles.editor}>
      <h1 className={styles.title}>Card Editor</h1>
      <ul>
        {cards.map((card) => (
          <CardEditForm card={card} />
        ))}
      </ul>
    </section>
  );
};

export default Editor;

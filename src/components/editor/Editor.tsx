import React from "react";
import styles from "./Editor.module.css";
import { CardInfo } from "../maker/MakerTypes";
import CardEditForm from "../card_edit_form/CardEditForm";
import CardAddForm from "../card_add_form/CardAddForm";

type EditorProps = {
  cards: CardInfo[];
  addCard: (newCard: CardInfo) => void;
};
const Editor = ({ cards, addCard }: EditorProps) => {
  return (
    <section className={styles.editor}>
      <h1 className={styles.title}>Card Editor</h1>
      {/* <ul> */}
      {cards.map((card) => (
        <CardEditForm key={card.id} card={card} />
      ))}
      {/* </ul> */}
      <CardAddForm onAdd={addCard} />
    </section>
  );
};

export default Editor;

import React from "react";
import styles from "./Editor.module.css";
import { CardInfo } from "../maker/MakerTypes";
import CardEditForm from "../card_edit_form/CardEditForm";
import CardAddForm from "../card_add_form/CardAddForm";
import { Deck } from "../maker/Maker";

type EditorProps = {
  // cards: CardInfo[];
  cards: Deck;
  addCard: (newCard: CardInfo) => void;
  updateCard: (card: CardInfo) => void;
  deleteCard: (card: CardInfo) => void;
};
const Editor = ({ cards, addCard, updateCard, deleteCard }: EditorProps) => {
  return (
    <section className={styles.editor}>
      <h1 className={styles.title}>Card Editor</h1>
      {/* <ul> */}
      {Object.keys(cards).map((key) => (
        <CardEditForm key={key} card={cards[key]} updateCard={updateCard} deleteCard={deleteCard} />
      ))}
      {/* </ul> */}
      <CardAddForm onAdd={addCard} />
    </section>
  );
};

export default Editor;

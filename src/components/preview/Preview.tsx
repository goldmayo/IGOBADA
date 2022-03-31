import React from "react";
import styles from "./Preview.module.css";
import { CardInfo } from "../maker/MakerTypes";
import Card from "../card/Card";
import { Deck } from "../maker/Maker";

type PreviewProps = {
  cards: Deck;
};

const Preview = ({ cards }: PreviewProps) => {
  return (
    <section className={styles.preview}>
      <h1 className={styles.title}>Card Preview</h1>
      <ul className={styles.cards}>
        {Object.keys(cards).map((key) => (
          <Card key={key} card={cards[key]} />
        ))}
      </ul>
    </section>
  );
};

export default Preview;

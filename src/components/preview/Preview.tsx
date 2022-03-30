import React from "react";
import styles from "./Preview.module.css";
import { CardInfo } from "../maker/MakerTypes";
import Card from "../card/Card";

type PreviewProps = {
  cards: CardInfo[];
};

const Preview = ({ cards }: PreviewProps) => {
  return (
    <section className={styles.preview}>
      <h1 className={styles.title}>Card Preview</h1>
      <ul className={styles.cards}>
        {cards.map((card) => (
          <Card key={card.id} card={card} />
        ))}
      </ul>
    </section>
  );
};

export default Preview;

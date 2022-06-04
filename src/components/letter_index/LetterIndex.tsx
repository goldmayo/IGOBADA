import React from "react";
import styles from "./LetterIndex.module.css";
import { CardInfo } from "../../page/Main/MakerTypes.d";
import AssetUploader from "../../service/asset_uploader/AssetUploader";
import Card from "../card/Card";

export interface LetterIndexInterface {
  indexString: string;
  index: CardInfo[];
  imageUploader: AssetUploader;
  updateCard: (card: CardInfo) => void;
  deleteCard: (card: CardInfo) => void;
  phoneNumberFormatter: (value: string) => string;
}

const LetterIndex = ({
  indexString,
  index,
  imageUploader,
  updateCard,
  deleteCard,
  phoneNumberFormatter,
}: LetterIndexInterface) => {
  return (
    <li className={styles.index_cards_group}>
      <section className={styles.index_cards}>
        <h2 className={styles.index}>{indexString}</h2>
        <ul className={styles.cards}>
          {index.map((card) => (
            <Card
              key={card.id}
              card={card}
              updateCard={updateCard}
              deleteCard={deleteCard}
              imageUploader={imageUploader}
              phoneNumberFormatter={phoneNumberFormatter}
            />
          ))}
        </ul>
      </section>
    </li>
  );
};

export default LetterIndex;

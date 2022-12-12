import React, { useState, useEffect } from "react";
import styles from "./Preview.module.css";
import { Deck, CardInfo } from "../../page/Main/MakerTypes.d";
import AssetUploader from "../../service/asset_uploader/AssetUploader";
import { LetteringIndex } from "./PreviewTypes";
import LetterIndex from "../letter_index/LetterIndex";

type PreviewProps = {
  cards: Deck;
  imageUploader: AssetUploader;
  updateCard: (card: CardInfo) => void;
  deleteCard: (card: CardInfo) => void;
  phoneNumberFormatter: (value: string) => string;
};

const Preview = ({ cards, updateCard, deleteCard, imageUploader, phoneNumberFormatter }: PreviewProps) => {
  const [indexlist, setIndexList] = useState<LetteringIndex>({});

  const getFirstLetter = (target: string): string => {
    return target.slice(0, 1);
  };

  const destructureLetter = (kor: string) => {
    const f = [
      "ㄱ",
      "ㄲ",
      "ㄴ",
      "ㄷ",
      "ㄸ",
      "ㄹ",
      "ㅁ",
      "ㅂ",
      "ㅃ",
      "ㅅ",
      "ㅆ",
      "ㅇ",
      "ㅈ",
      "ㅉ",
      "ㅊ",
      "ㅋ",
      "ㅌ",
      "ㅍ",
      "ㅎ",
    ];
    const ga = 44032;
    let uni = kor.charCodeAt(0);
    uni = uni - ga;
    let fn = Math.floor(uni / 588);
    return f[fn];
  };

  const getLetterIndex = (deck: Deck) => {
    const matchCard: LetteringIndex = {};
    Object.values(deck).map((card) => {
      if (card.name.length >= 2) {
        return (matchCard[`${destructureLetter(getFirstLetter(card.name))}`] = []);
      } else {
        return (matchCard[`미분류`] = []);
      }
    });
    Object.values(deck).map((card) => {
      if (card.name.length >= 2) {
        return matchCard[`${destructureLetter(getFirstLetter(card.name))}`].push(card);
      } else {
        return matchCard[`미분류`].push(card);
      }
    });
    return matchCard;
  };

  const createIndexDeck = (deck: Deck) => {
    const index = getLetterIndex(deck);

    setIndexList(index);
  };

  useEffect(() => {
    if (!Object.keys(cards).length) return;
    createIndexDeck(cards);
  }, [cards]);

  return (
    <section className={styles.preview}>
      <h3 className={styles.totalCardCount}>현재 등록된 명함의 개수는 {Object.keys(cards).length}장 입니다.</h3>
      <ul className={styles.cards}>
        {Object.keys(indexlist).map((key) => (
          <LetterIndex
            key={key}
            indexString={key}
            index={indexlist[key]}
            imageUploader={imageUploader}
            updateCard={updateCard}
            deleteCard={deleteCard}
            phoneNumberFormatter={phoneNumberFormatter}
          />
        ))}
      </ul>
    </section>
  );
};

export default Preview;

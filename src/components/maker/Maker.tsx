import React, { useEffect, useState } from "react";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import AuthService from "../../service/auth/auth";
import styles from "./Maker.module.css";
import { useNavigate, useLocation } from "react-router-dom";
import Editor from "../editor/Editor";
import Preview from "../preview/Preview";
import { CardInfo } from "./MakerTypes";
import CardAddForm from "../card_add_form/CardAddForm";
import CardEditForm from "../card_edit_form/CardEditForm";
import AssetUploader from "../../service/asset_uploader/AssetUploader";
import { IUserId } from "../login/Login";
import CardRepository from "../../service/card_repository/cardRepository";

type MakerProps = {
  authService: AuthService;
  assetUploader: AssetUploader;
  cardRepository: CardRepository;
};

export type Deck = {
  //https://radlohead.gitbook.io/typescript-deep-dive/type-system/index-signatures
  [index: string]: CardInfo;
};

const Maker = ({ authService, assetUploader, cardRepository }: MakerProps) => {
  const location = useLocation();
  const locationState = location?.state as IUserId;
  const navigate = useNavigate();
  const [userId, setUserId] = useState<string>(locationState && locationState?.id);
  const [cards, setCards] = useState<Deck>({});

  const onLogout = () => {
    authService.logout();
  };

  useEffect(() => {
    authService.onAuthChange((user) => {
      if (user) {
        setUserId(user.uid);
      } else {
        navigate("/");
      }
    });
  });

  const createUpdateCard = (card: CardInfo) => {
    setCards((cards) => {
      const updatedDeck = { ...cards };
      updatedDeck[card.id] = card;
      return updatedDeck;
    });
    cardRepository.saveCard(userId, card);
  };

  const deleteCard = (card: CardInfo) => {
    setCards((cards) => {
      const updatedDeck = { ...cards };
      delete updatedDeck[card.id];
      return updatedDeck;
    });
    cardRepository.removeCard(userId, card);
  };

  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        {/* <Editor
          cards={cards}
          assetUploader={assetUploader}
          addCard={createUpdateCard}
          updateCard={createUpdateCard}
          deleteCard={deleteCard}
        /> */}
        {/*  */}
        <Editor>
          {Object.keys(cards).map((key) => (
            <CardEditForm
              key={key}
              imageUploader={assetUploader}
              card={cards[key]}
              updateCard={createUpdateCard}
              deleteCard={deleteCard}
            />
          ))}
          <CardAddForm imageUploader={assetUploader} onAdd={createUpdateCard} />
        </Editor>
        {/*  */}
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  );
};

export default Maker;

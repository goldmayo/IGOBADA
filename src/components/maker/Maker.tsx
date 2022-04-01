import React, { useEffect, useState } from "react";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import AuthService from "../../service/auth/auth";
import styles from "./Maker.module.css";
import { useNavigate } from "react-router-dom";
import Editor from "../editor/Editor";
import Preview from "../preview/Preview";
import { CardInfo } from "./MakerTypes";
import CardAddForm from "../card_add_form/CardAddForm";
import CardEditForm from "../card_edit_form/CardEditForm";
import AssetUploader from "../../service/asset_uploader/AssetUploader";

type MakerProps = {
  authService: AuthService;
  assetUploader: AssetUploader;
};
export type Deck = {
  //https://radlohead.gitbook.io/typescript-deep-dive/type-system/index-signatures
  [index: string]: CardInfo;
};
const Maker = ({ authService, assetUploader }: MakerProps) => {
  const [cards, setCards] = useState<Deck>({
    "1": {
      id: "1",
      name: "Hyun",
      companny: "Google",
      theme: "light",
      title: "SW Engineer",
      email: "hsj1596@gmail.com",
      message: "control your id",
      fileName: "hyun1",
      fileURL: null,
    },
    "2": {
      id: "2",
      name: "Hyun",
      companny: "MicroSoft",
      theme: "dark",
      title: "SW Engineer",
      email: "hsj1596@gmail.com",
      message: "control your id",
      fileName: "hyun2",
      fileURL: null,
    },
    "3": {
      id: "3",
      name: "Hyun",
      companny: "Naver",
      theme: "colorful",
      title: "SW Engineer",
      email: "hsj1596@gmail.com",
      message: "control your id",
      fileName: "hyun3",
      fileURL: "ss",
    },
  });

  const navigate = useNavigate();

  const onLogout = () => {
    authService.logout();
  };

  useEffect(() => {
    authService.onAuthChange((user) => {
      if (!user) {
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
  };

  const deleteCard = (card: CardInfo) => {
    setCards((cards) => {
      const updatedDeck = { ...cards };
      delete updatedDeck[card.id];
      return updatedDeck;
    });
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

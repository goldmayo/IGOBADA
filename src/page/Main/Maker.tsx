import React, { useCallback, useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

import { User } from "firebase/auth";
import { CardInfo, Deck } from "./MakerTypes.d";

import AuthService from "../../service/auth/auth";
import AssetUploader from "../../service/asset_uploader/AssetUploader";
import CardRepository from "../../service/card_repository/cardRepository";

import MakerMainContainer from "../../container/Main/MakerMainContainer";

import MainHeader from "../../common/header/MainHeader/MainHeader";
import SearchForm from "../../common/navbar/MainNav/search_form/SearchForm";

import VerifyMessage from "../../components/verify_message/VerifyMessage";

import MainNavbar from "../../common/navbar/MainNav/MainNavbar";
import AddButton from "../../common/navbar/MainNav/add_button/AddButton";
import Greeting from "../../common/navbar/MainNav/greeting/Greeting";

import Preview from "../../components/preview/Preview";
import TestAddForm from "../../components/add_form_test/TestAddForm";
import { Modal } from "../../components/modal/Modal";

import styles from "./Maker.module.css";

type MakerProps = {
  userObj: User | null;
  authService: AuthService;
  assetUploader: AssetUploader;
  cardRepository: CardRepository;
};

const Maker = ({ userObj, authService, assetUploader, cardRepository }: MakerProps) => {
  const navigate = useNavigate();
  const [userId, setUserId] = useState<string>("");

  const [cards, setCards] = useState<Deck>({});
  const [modalFlag, setModalFlag] = useState<boolean>(false);
  const [filteredCards, setFilteredCard] = useState<Deck>({});

  const searchRef = useRef<HTMLInputElement>(null);

  const onLogout = useCallback(() => {
    authService.logout();
    navigate("/");
  }, [authService, navigate]);

  const openModal = useCallback(() => {
    setModalFlag(true);
  }, []);

  const closeModal = useCallback(() => {
    setModalFlag(false);
  }, []);

  const formatPhoneNumber = useCallback((value: string): string => {
    if (!value) return value;
    const phoneNumber = value.replace(/[^\d]/g, "");
    const phoneNumberLength = phoneNumber.length;
    if (phoneNumberLength < 4) return phoneNumber;
    if (phoneNumberLength < 8) {
      return `${phoneNumber.slice(0, 3)} - ${phoneNumber.slice(3)}`;
    }
    return `${phoneNumber.slice(0, 3)} - ${phoneNumber.slice(3, 7)} - ${phoneNumber.slice(7, 11)}`;
  }, []);

  const compare = useCallback((a: CardInfo, b: CardInfo) => {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  }, []);

  const sortByName = useCallback(
    (cardList: Deck) => {
      const deck = { ...cardList };
      const sortedDeck: Deck = {};
      const sortedCards = Object.values(deck).sort(compare);
      Object.values(sortedCards).map((card) => {
        return (sortedDeck[`${card.id}`] = card);
      });
      return sortedDeck;
    },
    [compare]
  );

  const createUpdateCard = useCallback(
    (card: CardInfo) => {
      setCards((cards) => {
        const updatedDeck = { ...cards };
        updatedDeck[card.id] = card;
        return updatedDeck;
      });
      cardRepository.saveCard(userId, card);
    },
    [cardRepository, userId]
  );

  const deleteCard = useCallback(
    (card: CardInfo) => {
      setCards((cards) => {
        const updatedDeck = { ...cards };
        delete updatedDeck[card.id];
        return updatedDeck;
      });
      cardRepository.removeCard(userId, card);
    },
    [cardRepository, userId]
  );

  const handleFilter = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;
    if (query === "") {
      setFilteredCard({});
    } else {
      const filteredDeck = Object.values(cards).filter((card) => {
        return card.name.includes(query);
      });
      const newFilteredDeck: Deck = {};
      filteredDeck.map((card) => (newFilteredDeck[card.id] = card));
      setFilteredCard(newFilteredDeck);
    }
  };

  useEffect(() => {
    if (!userObj) {
      return;
    }
    setUserId(userObj.uid);

    const stopSync = cardRepository.syncCards(userObj.uid, (cards: Deck) => {
      const sortedCards = sortByName(cards);
      setCards(sortedCards);
      setFilteredCard(sortedCards);
    });
    return () => {
      stopSync();
    };
  }, [userObj, cardRepository, sortByName]);

  return (
    <MakerMainContainer>
      <MainHeader onLogout={onLogout}>
        <SearchForm inputRef={searchRef} onChange={handleFilter} />
      </MainHeader>
      {!userObj?.emailVerified && (
        <VerifyMessage message={"등록하신 메일로 인증 메세지를 보냈습니다. 메일을 인증 해주세요"} />
      )}
      <div className={styles.container}>
        <MainNavbar>
          {userObj && <Greeting userName={userObj?.displayName} />}
          <AddButton openModal={openModal} />
        </MainNavbar>
        <Preview
          cards={Object.keys(filteredCards).length === 0 ? cards : filteredCards}
          imageUploader={assetUploader}
          updateCard={createUpdateCard}
          deleteCard={deleteCard}
          phoneNumberFormatter={formatPhoneNumber}
        />
        <Modal openFlag={modalFlag} onClose={closeModal} headerTextContent={"새 명함"}>
          <TestAddForm
            imageUploader={assetUploader}
            onAdd={createUpdateCard}
            phoneNumberFormatter={formatPhoneNumber}
          />
        </Modal>
      </div>
    </MakerMainContainer>
  );
};

export default Maker;

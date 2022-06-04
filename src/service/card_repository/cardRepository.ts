import { database } from "../firebase";
import { Database, onValue, ref, set, remove, off } from "firebase/database";
import { CardInfo, Deck } from "../../page/Main/MakerTypes.d";

class CardRepository {
  db: Database;

  constructor() {
    this.db = database;
  }
  syncCards = (userId: string, onUpdate: (cards: Deck) => void) => {
    const query = ref(this.db, `${userId}/cards`);
    onValue(query, (snapshot) => {
      const value = snapshot.val();
      value && onUpdate(value);
    });
    return () => off(query);
  };
  saveCard = (userId: string, card: CardInfo) => {
    console.log("card", card);

    set(ref(this.db, `${userId}/cards/${card.id}`), card);
  };

  removeCard = (userId: string, card: CardInfo) => {
    remove(ref(this.db, `${userId}/cards/${card.id}`));
  };
}
export default CardRepository;

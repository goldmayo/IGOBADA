import { database } from "../firebase";
import { Database, getDatabase, onValue, ref, set, remove } from "firebase/database";
import { CardInfo } from "../../components/maker/MakerTypes";

class CardRepository {
  db: Database;

  constructor() {
    this.db = database;
  }

  saveCard = (userId: string, card: CardInfo) => {
    set(ref(this.db, `${userId}/cards/${card.id}`), card);
  };

  removeCard = (userId: string, card: CardInfo) => {
    remove(ref(this.db, `${userId}/cards/${card.id}`));
  };
}
export default CardRepository;

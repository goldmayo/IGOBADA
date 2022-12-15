import { fireBaseApp } from "../firebase";
import { getDatabase, Database, onValue, ref, set, remove, off } from "firebase/database";
import { CardInfo, Deck } from "../../page/Main/MakerTypes.d";

class CardRepository {
  private static CardRepositoryInstance: CardRepository;
  private db: Database;

  constructor() {
    this.db = getDatabase(fireBaseApp);
  }

  static getCardRepositoryInstance(): CardRepository {
    if (!CardRepository.CardRepositoryInstance) {
      CardRepository.CardRepositoryInstance = new CardRepository();
    }
    return CardRepository.CardRepositoryInstance;
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
    set(ref(this.db, `${userId}/cards/${card.id}`), card);
  };

  removeCard = (userId: string, card: CardInfo) => {
    remove(ref(this.db, `${userId}/cards/${card.id}`));
  };
}
export default CardRepository;

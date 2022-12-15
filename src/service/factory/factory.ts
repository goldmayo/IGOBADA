import { GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";
import AuthService from "../auth/auth";
import AssetUploader from "../asset_uploader/AssetUploader";
import CardRepository from "../card_repository/cardRepository";

class Factory {
  private static AuthServiceInstance: AuthService;
  private static AssetUploaderInstance: AssetUploader;
  private static CardRepositoryInstance: CardRepository;

  static getAuthServiceInstance(): AuthService {
    if (!Factory.AuthServiceInstance) {
      const providers = {
        GoogleAuthProvider: new GoogleAuthProvider(),
        GithubAuthProvider: new GithubAuthProvider(),
      };
      Factory.AuthServiceInstance = new AuthService(providers);
    }
    return Factory.AuthServiceInstance;
  }

  static getAssetUploaderInstance(): AssetUploader {
    if (!Factory.AssetUploaderInstance) {
      Factory.AssetUploaderInstance = new AssetUploader();
    }
    return Factory.AssetUploaderInstance;
  }

  static getCardRepositoryInstance(): CardRepository {
    if (!Factory.CardRepositoryInstance) {
      Factory.CardRepositoryInstance = new CardRepository();
    }
    return Factory.CardRepositoryInstance;
  }

  static createProviders = () => {
    const providers = {
      GoogleAuthProvider: new GoogleAuthProvider(),
      GithubAuthProvider: new GithubAuthProvider(),
    };
    return new AuthService(providers);
  };

  static createAssetUploader = () => {
    return new AssetUploader();
  };

  static createCardRepository = () => {
    return new CardRepository();
  };
}
export default Factory;

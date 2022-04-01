import { GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";
import AuthService from "../auth/auth";
import AssetUploader from "../asset_uploader/AssetUploader";

class Factory {
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
}
export default Factory;

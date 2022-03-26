import { GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";
import AuthService from "../auth/auth";

class Factory {
  static createProviders = () => {
    const providers = {
      GoogleAuthProvider: new GoogleAuthProvider(),
      GithubAuthProvider: new GithubAuthProvider(),
    };
    return new AuthService(providers);
  };
}
export default Factory;

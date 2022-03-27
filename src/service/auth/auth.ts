import { authService } from "../firebase";
import { signInWithPopup, User } from "firebase/auth";
import { AuthProvider, Providers } from "./authType";

class AuthService {
  private providers: AuthProvider;
  constructor(providers: AuthProvider) {
    this.providers = providers;
  }

  getProviderByName<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
  }

  login = async (providerName: Providers) => {
    if (!this.providers.hasOwnProperty(`${providerName}AuthProvider`)) {
      console.log(`there is no ${providerName}AuthProvider`);
      return;
    }
    const authProvider = this.getProviderByName(this.providers, `${providerName}AuthProvider`);
    try {
      return await signInWithPopup(authService, authProvider);
    } catch (error) {
      console.log(error);
    }
  };

  onAuthChange = (onUserChanged: (user: User | null) => void) => {
    authService.onAuthStateChanged((user) => {
      onUserChanged(user);
      // if (user) {
      //   onUserChanged(user);
      // } else {
      //   onUserChanged(user);
      // }
    });
  };

  logout = () => {
    authService.signOut();
  };
}

export default AuthService;

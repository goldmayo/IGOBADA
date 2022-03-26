import { authService } from "../firebase";
import { signInWithRedirect } from "firebase/auth";
import { AuthProvider, Providers } from "./authType";

class AuthService {
  private providers: AuthProvider;
  constructor(providers: AuthProvider) {
    this.providers = providers;
  }

  getProviderByName<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
  }

  login(providerName: Providers) {
    if (!this.providers.hasOwnProperty(`${providerName}AuthProvider`)) {
      console.log(`there is no ${providerName}AuthProvider`);
      return;
    }
    const authProvider = this.getProviderByName(this.providers, `${providerName}AuthProvider`);
    return signInWithRedirect(authService, authProvider);
  }
}

export default AuthService;

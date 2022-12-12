import { authService } from "../firebase";
import {
  signInWithPopup,
  User,
  updateProfile,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import { AuthProvider, Providers } from "./authType";

class AuthService {
  private providers: AuthProvider;
  constructor(providers: AuthProvider) {
    this.providers = providers;
  }
  getCurrentUser = () => {
    return authService.currentUser;
  };
  getProviderByName<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
  }

  login = async (providerName: Providers) => {
    if (!this.providers.hasOwnProperty(`${providerName}AuthProvider`)) {
      return;
    }
    const authProvider = this.getProviderByName(this.providers, `${providerName}AuthProvider`);
    try {
      return await signInWithPopup(authService, authProvider);
    } catch (error) {}
  };

  logout = () => {
    authService.signOut();
  };

  registerAccount = (email: string, password: string) => {
    return createUserWithEmailAndPassword(authService, email, password);
  };

  loginEP = async (email: string, password: string) => {
    return await signInWithEmailAndPassword(authService, email, password);
  };
  setDisplayName = (user: User, name: string) => {
    return updateProfile(user, { displayName: name });
  };
  verifyEmail = async (user: User) => {
    try {
      await sendEmailVerification(user);
    } catch (error) {}
  };
  onAuthChange = (onUserChanged: (user: User | null) => void) => {
    authService.onAuthStateChanged((user) => {
      onUserChanged(user);
    });
  };
}

export default AuthService;

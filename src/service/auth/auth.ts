import { fireBaseApp } from "../firebase";

import {
  getAuth,
  signInWithPopup,
  User,
  updateProfile,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendEmailVerification,
  GoogleAuthProvider,
  GithubAuthProvider,
} from "firebase/auth";
import { AuthProvider, Providers } from "./authType";

class AuthService {
  private providers: AuthProvider;
  private authService;

  private static AuthServiceInstance: AuthService;

  constructor(providers: AuthProvider) {
    this.providers = providers;
    this.authService = getAuth(fireBaseApp);
  }

  static getAuthServiceInstance(): AuthService {
    if (!AuthService.AuthServiceInstance) {
      const providers = {
        GoogleAuthProvider: new GoogleAuthProvider(),
        GithubAuthProvider: new GithubAuthProvider(),
      };
      AuthService.AuthServiceInstance = new AuthService(providers);
    }
    return AuthService.AuthServiceInstance;
  }

  getCurrentUser = () => {
    return this.authService.currentUser;
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
      return await signInWithPopup(this.authService, authProvider);
    } catch (error) {}
  };

  logout = () => {
    this.authService.signOut();
  };

  registerAccount = (email: string, password: string) => {
    return createUserWithEmailAndPassword(this.authService, email, password);
  };

  loginEP = async (email: string, password: string) => {
    return await signInWithEmailAndPassword(this.authService, email, password);
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
    this.authService.onAuthStateChanged((user) => {
      onUserChanged(user);
    });
  };
}

export default AuthService;

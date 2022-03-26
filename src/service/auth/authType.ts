import { GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";

export type Providers = "Google" | "Github";
// export type Providers = string;

export type AuthProvider = {
  GoogleAuthProvider: GoogleAuthProvider;
  GithubAuthProvider: GithubAuthProvider;
};

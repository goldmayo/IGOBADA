import { GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";

export declare type Providers = "Google" | "Github";
// export type Providers = string;

export declare type AuthProvider = {
  GoogleAuthProvider: GoogleAuthProvider;
  GithubAuthProvider: GithubAuthProvider;
};

import React from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import AuthService from "../../service/auth/auth";
import { Providers } from "../../service/auth/authType";
import styles from "./Login.module.css";

type LoginProps = {
  authService: AuthService;
};

const handleLogout = () => {
  console.log("logout");
};

const Login = ({ authService }: LoginProps) => {
  const onLogin = (event: React.MouseEvent<HTMLButtonElement>) => {
    const targetButtonName = event.currentTarget.textContent;
    if (targetButtonName) {
      authService //
        .login(targetButtonName as Providers)
        ?.then();
    }
  };

  return (
    <section className={styles.login}>
      <Header onLogout={handleLogout} />
      <section>
        <h1>Login</h1>
        <ul className={styles.list}>
          <li className={styles.item}>
            <button className={styles.button} onClick={onLogin}>
              Google
            </button>
          </li>
          <li className={styles.item}>
            <button className={styles.button} onClick={onLogin}>
              Github
            </button>
          </li>
        </ul>
      </section>
      <Footer />
    </section>
  );
};

export default Login;

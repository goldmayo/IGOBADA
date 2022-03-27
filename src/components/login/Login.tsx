import React, { useEffect } from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import AuthService from "../../service/auth/auth";
import { Providers } from "../../service/auth/authType";
import { useNavigate } from "react-router-dom";
import styles from "./Login.module.css";

type LoginProps = {
  authService: AuthService;
};

const Login = ({ authService }: LoginProps) => {
  const navigate = useNavigate();

  const goToMaker = (userId: string) => {
    navigate("/maker", {
      state: {
        id: userId,
      },
    });
  };
  const onLogin = (event: React.MouseEvent<HTMLButtonElement>) => {
    const targetButtonName = event.currentTarget.textContent;
    if (targetButtonName !== null) {
      const buttonName = targetButtonName;
      authService //
        .login(buttonName as Providers)
        .then((data) => {
          if (data) {
            goToMaker(data.user.uid);
          }
        });
    }
  };

  useEffect(() => {
    authService.onAuthChange((user) => {
      user && goToMaker(user.uid);
    });
  });

  return (
    <section className={styles.login}>
      <Header />
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

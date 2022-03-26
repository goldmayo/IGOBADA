import React from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import AuthService from "../../service/auth/auth";
import { Providers } from "../../service/auth/authType";

type LoginProps = {
  authService: AuthService;
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
    <section>
      <Header />
      <section>
        <h1>Login</h1>
        <ul>
          <li>
            <button onClick={onLogin}>Google</button>
          </li>
          <li>
            <button onClick={onLogin}>Github</button>
          </li>
        </ul>
      </section>
      <Footer />
    </section>
  );
};

export default Login;

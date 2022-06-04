import React, { useState } from "react";
import AuthService from "../../../../service/auth/auth";
import { Providers } from "../../../../service/auth/authType";
import { Link, useNavigate } from "react-router-dom";

import styles from "./LoginMain.module.css";
import FormInput from "../../../../components/form_input/FormInput";
import { loginInfo, LoginFormInterface } from "../../../../page/Login/LoginInfo.d";

type LoginProps = {
  authService: AuthService;
};

const LoginMain = ({ authService }: LoginProps) => {
  const navigate = useNavigate();
  const inputs = loginInfo;
  const [values, setValues] = useState<LoginFormInterface>({
    email: "",
    password: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    event.preventDefault();
    if (event.target == null) return;
    if (event.target !== null) {
      setValues({ ...values, [event.target.name]: event.target.value });
    }
  };

  const handleSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (!values.email || !values.password) return;
    authService
      .loginEP(values.email, values.password)
      .then((data) => {
        if (data) {
          goToMaker();
        }
      })
      .catch((error) => {
        console.log(error.code);
        console.log(error.message);
      });
  };

  const goToMaker = () => {
    navigate("/main");
  };

  const onLogin = (event: React.MouseEvent<HTMLButtonElement>) => {
    const loginType = event.currentTarget.dataset.loginType;
    if (loginType !== null) {
      const buttonName = loginType;
      authService //
        .login(buttonName as Providers)
        .then((data) => {
          if (data) {
            goToMaker();
          }
        });
    }
  };

  return (
    <section className={styles.login}>
      <div className={styles.logo_container}>
        <Link to={"/"}>
          <img className={styles.logo} src="images/logo_transparent.svg" alt="logo" />
        </Link>
      </div>
      <div className={styles.console}>
        <form className={styles.input}>
          {inputs.map((input) => (
            <FormInput
              key={input.id}
              {...input}
              value={values[input.name]}
              pattern={input.pattern}
              onChange={handleChange}
            />
          ))}
          <button className={styles.loginButton} onClick={handleSubmit}>
            로그인
          </button>
        </form>
      </div>
      <div className={styles.boundary_container}>
        <div className={styles.boudary_line}></div>
        <div className={styles.boundary_message}>
          <span>또는</span>
        </div>
      </div>
      <div className={styles.social_login_container}>
        <button className={styles.social_button} id={styles.google_login} onClick={onLogin} data-login-type="Google">
          <img src="images/google_logo.svg" alt="google" />
          Google 계정으로 로그인
        </button>
        <button className={styles.social_button} id={styles.github_login} onClick={onLogin} data-login-type="Github">
          <img src="images/github_logo.svg" alt="github" />
          Github 계정으로 로그인
        </button>
      </div>
      <p className={styles.registLink}>
        <Link to={"/regist"}>회원가입</Link>
      </p>
    </section>
  );
};

export default LoginMain;

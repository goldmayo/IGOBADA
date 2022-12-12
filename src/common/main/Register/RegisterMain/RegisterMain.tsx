import React, { useState } from "react";
import styles from "./RegisterMain.module.css";
import AuthService from "../../../../service/auth/auth";
import FormInput from "../../../../components/form_input/FormInput";
import { Link, useNavigate } from "react-router-dom";
import { registerInfo, RegisterFormInterface } from "../../../../page/Register/RegisterInfo.d";
import { Providers } from "../../../../service/auth/authType";

interface RegisterMainInterface {
  authService: AuthService;
}

const RegisterMain: React.FC<RegisterMainInterface> = ({ authService }) => {
  const navigate = useNavigate();
  const registInputInfo = registerInfo;
  const [values, setValues] = useState<RegisterFormInterface>({
    name: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });
  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    event.preventDefault();
    if (event.target == null) return;
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const goToMaker = () => {
    navigate("/main");
  };

  const onRegister = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const { user } = await authService.registerAccount(values.email, values.password);
      await authService.setDisplayName(user, values.name);
      await authService.verifyEmail(user);
      goToMaker();
    } catch (error) {}
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
    <section className={styles.register}>
      <div className={styles.logo_container}>
        <Link to={"/"}>
          <img className={styles.logo} src="images/logo_transparent.svg" alt="logo" />
        </Link>
      </div>
      <div className={styles.console}>
        <form className={styles.input} onSubmit={onRegister}>
          {registInputInfo.map((input) => (
            <FormInput
              key={input.id}
              {...input}
              value={values[input.name]}
              pattern={input.name === "passwordConfirm" ? values.password : input.pattern}
              onChange={handleChange}
            />
          ))}
          <button className={styles.register_button}>회원가입</button>
        </form>
      </div>
      <p className={styles.login_link}>
        이미 계정이 있으신가요? <Link to={"/login"}>로그인</Link>
      </p>
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
    </section>
  );
};

export default RegisterMain;

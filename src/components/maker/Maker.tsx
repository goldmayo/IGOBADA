import React, { useEffect } from "react";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import AuthService from "../../service/auth/auth";
import styles from "./Maker.module.css";
import { useNavigate } from "react-router-dom";

type MakerProps = {
  authService: AuthService;
};

const Maker = ({ authService }: MakerProps) => {
  const navigate = useNavigate();

  const onLogout = () => {
    authService.logout();
  };

  useEffect(() => {
    authService.onAuthChange((user) => {
      if (!user) {
        navigate("/");
      }
    });
  });

  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <Footer />
    </section>
  );
};

export default Maker;

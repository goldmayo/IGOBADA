import React, { useEffect, useState } from "react";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import AuthService from "../../service/auth/auth";
import styles from "./Maker.module.css";
import { useNavigate } from "react-router-dom";
import Editor from "../editor/Editor";
import Preview from "../preview/Preview";
import { CardInfo } from "./MakerTypes";

type MakerProps = {
  authService: AuthService;
};

const Maker = ({ authService }: MakerProps) => {
  const [cards, setCards] = useState<CardInfo[]>([
    {
      id: "1",
      name: "Hyun",
      companny: "Google",
      theme: "light",
      title: "SW Engineer",
      email: "hsj1596@gmail.com",
      message: "control your id",
      fileName: "hyun",
      fileURL: null,
    },
    {
      id: "2",
      name: "Hyun",
      companny: "MicroSoft",
      theme: "dark",
      title: "SW Engineer",
      email: "hsj1596@gmail.com",
      message: "control your id",
      fileName: "hyun",
      fileURL: null,
    },
    {
      id: "3",
      name: "Hyun",
      companny: "Naver",
      theme: "colorful",
      title: "SW Engineer",
      email: "hsj1596@gmail.com",
      message: "control your id",
      fileName: "hyun",
      fileURL: "ss",
    },
  ]);
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
      <div className={styles.container}>
        <Editor cards={cards} />
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  );
};

export default Maker;

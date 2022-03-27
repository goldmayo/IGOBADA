import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styles from "./app.module.css";
import Login from "./components/login/Login";
import Maker from "./components/maker/Maker";
import AuthService from "./service/auth/auth";

type AppProps = {
  authService: AuthService;
};

function App({ authService }: AppProps) {
  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login authService={authService} />} />
          <Route path="/maker" element={<Maker authService={authService} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

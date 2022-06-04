import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./page/Login/Login";
import Landing from "./page/Landing/Landing";
import Maker from "./page/Main/Maker";
import Register from "./page/Register/Register";

import Spinner from "./components/spinner/Spinner";

import AuthService from "./service/auth/auth";
import AssetUploader from "./service/asset_uploader/AssetUploader";
import CardRepository from "./service/card_repository/cardRepository";
import { User } from "firebase/auth";

import styles from "./app.module.css";
type AppProps = {
  authService: AuthService;
  assetUploader: AssetUploader;
  cardRepository: CardRepository;
};

function App({ authService, assetUploader, cardRepository }: AppProps) {
  const [userObj, setUserObj] = useState<User | null>(null);
  const [init, setInit] = useState<boolean>(false);

  useEffect(() => {
    authService.onAuthChange((user) => {
      if (user) {
        console.log(user);
        setUserObj(user);
      }
      setInit(true);
    });
  }, [authService]);

  return (
    <div className={styles.app}>
      {init ? (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/login" element={<Login authService={authService} />} />
            <Route
              path="/main"
              element={
                <Maker
                  userObj={userObj}
                  authService={authService}
                  assetUploader={assetUploader}
                  cardRepository={cardRepository}
                />
              }
            />
            <Route path="/regist" element={<Register authService={authService} />} />
          </Routes>
        </BrowserRouter>
      ) : (
        <Spinner />
      )}
    </div>
  );
}

export default App;

import React, { useState, useEffect, lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import Login from "./page/Login/Login";
// import Landing from "./page/Landing/Landing";
// import Maker from "./page/Main/Maker";
// import Register from "./page/Register/Register";

import Spinner from "./components/spinner/Spinner";

import AuthService from "./service/auth/auth";
import AssetUploader from "./service/asset_uploader/AssetUploader";
import CardRepository from "./service/card_repository/cardRepository";
import { User } from "firebase/auth";

import styles from "./app.module.css";

const Login = lazy(() => import("./page/Login/Login"));
const Landing = lazy(() => import("./page/Landing/Landing"));
const Maker = lazy(() => import("./page/Main/Maker"));
const Register = lazy(() => import("./page/Register/Register"));

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
        setUserObj(user);
      }
      setInit(true);
    });
  }, [authService]);

  return (
    <div className={styles.app}>
      <Suspense fallback={<Spinner />}>
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
      </Suspense>
    </div>
  );
}

export default App;
// {init ? (
//   ) : (
//     <Spinner />
//   )}

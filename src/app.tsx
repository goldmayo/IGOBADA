import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styles from "./app.module.css";
import Login from "./components/login/Login";
import Maker from "./components/maker/Maker";
import AuthService from "./service/auth/auth";
import AssetUploader from "./service/asset_uploader/AssetUploader";

type AppProps = {
  authService: AuthService;
  assetUploader: AssetUploader;
};

function App({ authService, assetUploader }: AppProps) {
  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login authService={authService} />} />
          <Route path="/maker" element={<Maker authService={authService} assetUploader={assetUploader} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

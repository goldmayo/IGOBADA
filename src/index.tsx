import React from "react";
import ReactDOM from "react-dom";
import "./index.module.css";
import App from "./app";
import Factory from "./service/factory/factory";

const authService = Factory.createProviders();
const assetUploader = Factory.createAssetUploader();
const cardRepository = Factory.createCardRepository();

ReactDOM.render(
  <React.StrictMode>
    <App authService={authService} assetUploader={assetUploader} cardRepository={cardRepository} />
  </React.StrictMode>,
  document.getElementById("root")
);

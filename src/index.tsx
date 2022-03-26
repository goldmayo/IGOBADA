import React from "react";
import ReactDOM from "react-dom";
import "./index.module.css";
import App from "./app";
import Factory from "./service/factory/factory";
const authService = Factory.createProviders();

ReactDOM.render(
  <React.StrictMode>
    <App authService={authService} />
  </React.StrictMode>,
  document.getElementById("root")
);

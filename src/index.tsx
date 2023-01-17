import React from "react";
import ReactDOM from "react-dom";
import "./index.module.css";
import App from "./app";
import AuthService from "./service/auth/auth";
import { Provider } from "react-redux";
import store from "./store/store";
const authService = AuthService.getAuthServiceInstance();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App authService={authService} />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

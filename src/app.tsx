import React from "react";
import "./app.css";
import Login from "./components/login/Login";
import AuthService from "./service/auth/auth";

type AppProps = {
  authService: AuthService;
};

function App({ authService }: AppProps) {
  return <Login authService={authService} />;
}

export default App;

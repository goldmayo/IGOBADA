import React from "react";
import styles from "./app.module.css";
import Login from "./components/login/Login";
import AuthService from "./service/auth/auth";

type AppProps = {
  authService: AuthService;
};

function App({ authService }: AppProps) {
  return (
    <div className={styles.app}>
      <Login authService={authService} />
    </div>
  );
}

export default App;

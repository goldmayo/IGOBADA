import { useState, useEffect, lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Spinner from "./components/spinner/Spinner";

import AuthService from "./service/auth/auth";
import { User } from "firebase/auth";

import styles from "./app.module.css";

const Login = lazy(() => import("./page/Login/Login"));
const Landing = lazy(() => import("./page/Landing/Landing"));
const Maker = lazy(() => import("./page/Main/Maker"));
const Register = lazy(() => import("./page/Register/Register"));

type AppProps = {
  authService: AuthService;
};

function App({ authService }: AppProps) {
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
      <BrowserRouter>
        <Suspense fallback={<Spinner />}>
          {init && (
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/login" element={<Login authService={authService} />} />
              <Route path="/main" element={<Maker userObj={userObj} authService={authService} />} />
              <Route path="/regist" element={<Register authService={authService} />} />
            </Routes>
          )}
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;

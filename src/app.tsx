import { useState, useEffect, lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Spinner from "./components/spinner/Spinner";

import AuthService from "./service/auth/auth";

import { useDispatch } from "react-redux";
import { userActions } from "./store/slice/user";

import styles from "./app.module.css";

const Login = lazy(() => import("./page/Login/Login"));
const Landing = lazy(() => import("./page/Landing/Landing"));
const Maker = lazy(() => import("./page/Main/Maker"));
const Register = lazy(() => import("./page/Register/Register"));

type AppProps = {
  authService: AuthService;
};

function App({ authService }: AppProps) {
  const [init, setInit] = useState<boolean>(false);
  const dispatch = useDispatch();

  useEffect(() => {
    authService.onAuthChange((user) => {
      if (user) {
        dispatch(userActions.setUser(user));
      }
      setInit(true);
    });
    return setInit(false);
  }, [authService, dispatch]);

  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Suspense fallback={<Spinner />}>
          {init && (
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/login" element={<Login authService={authService} />} />
              <Route path="/main" element={<Maker authService={authService} />} />
              <Route path="/regist" element={<Register authService={authService} />} />
            </Routes>
          )}
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;

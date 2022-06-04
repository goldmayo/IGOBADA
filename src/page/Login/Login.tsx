import React from "react";
import AuthService from "../../service/auth/auth";

import LoginMainContainer from "../../container/Login/LoginMainContainer";
import LoginMain from "../../common/main/Login/LoginMain/LoginMain";
import LoginFooter from "../../common/footer/LoginFooter/LoginFooter";

type LoginProps = {
  authService: AuthService;
};

const Login = ({ authService }: LoginProps) => {
  return (
    <>
      <LoginMainContainer>
        <LoginMain authService={authService} />
      </LoginMainContainer>
      <LoginFooter />
    </>
  );
};

export default Login;

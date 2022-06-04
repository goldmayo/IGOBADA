import React from "react";
import RegisterFooter from "../../common/footer/RegisterFooter/RegisterFooter";
import RegisterMain from "../../common/main/Register/RegisterMain/RegisterMain";
import RegisterContainer from "../../container/Register/RegisterContainer";
import AuthService from "../../service/auth/auth";

interface RegisterInterface {
  authService: AuthService;
}

const Register: React.FC<RegisterInterface> = ({ authService }) => {
  return (
    <>
      <RegisterContainer>
        <RegisterMain authService={authService} />
      </RegisterContainer>
      <RegisterFooter />
    </>
  );
};

export default Register;

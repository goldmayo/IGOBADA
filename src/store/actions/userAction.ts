import { User } from "firebase/auth";
import { userActions } from "../slice/user";
import { AppDispatch } from "../store";

function setUser(user: User) {
  return (dispatch: AppDispatch) => {
    dispatch(userActions.setUser(user));
  };
}

export const userAction = { setUser };

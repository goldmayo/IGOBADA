import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "firebase/auth";

const name = "user";

type userStateType = {
  userObj: User | null;
};

const initialState: userStateType = {
  userObj: null,
};

export const userSlice = createSlice({
  name,
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<User>) {
      state.userObj = action.payload;
    },
  },
});

export const userActions = userSlice.actions;
export default userSlice.reducer;

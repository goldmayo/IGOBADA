import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slice/user";

const store = configureStore({
  reducer: {
    userSlice: userReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;

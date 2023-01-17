import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slice/user";

const store = configureStore({
  reducer: {
    userSlice: userReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;

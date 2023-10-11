import { createSlice } from "@reduxjs/toolkit";
import { LocalStorage } from "@/utils/localStorage";

type authState = {
  isAuth: boolean;
};

const initialState = {
  isAuth: false,
} as authState;

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    handleAuth: (state, { payload }) => {
      state.isAuth = payload;
      LocalStorage.set("auth", payload);
    },
  },
});

export const selectIsAuth = (state: any) => state.auth.isAuth;

export const { handleAuth } = authSlice.actions;

export default authSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userId: null,
  login: null,
  email: null,
  avatar: null,
  stateChange: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    updateUserProfile: (state, actions) => {
      state.userId = actions.payload.userId;
      state.email = actions.payload.email;
      state.login = actions.payload.login;
      state.avatar = actions.payload.photoUrl;
    },
    authStateChange: (state, actions) => {
      state.stateChange = actions.payload.stateChange;
    },
    authSignOut: () => initialState,
  },
});

export default authSlice.reducer;
export const { updateUserProfile, authSignOut, authStateChange } =
  authSlice.actions;

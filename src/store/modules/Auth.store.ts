import { createSlice } from "@reduxjs/toolkit";

const authState = createSlice({
  name: "authState",
  initialState: {
    logged: false,
    userEmail: "",
  },
  reducers: {
    beLogged(state, email: any) {
      state.logged = true;
      state.userEmail = email;
    },
    beUnlogged(state) {
      state.logged = false;
      state.userEmail = "";
    },
  },
});

export const { beLogged, beUnlogged } = authState.actions;
export default authState.reducer;

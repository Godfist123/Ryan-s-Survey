import { createSlice, PayloadAction } from "@reduxjs/toolkit";
export type userStateType = {
  username: string;
  nickname: string;
};

const INIT_STATE: userStateType = {
  username: "",
  nickname: "",
};

export const userSlice = createSlice({
  name: "userSlice1",
  initialState: INIT_STATE,
  reducers: {
    login: (state: userStateType, actions: PayloadAction<userStateType>) => {
      return actions.payload;
    },
    logOut: () => INIT_STATE,
  },
});
const userSliceReducers = userSlice.reducer;
export default userSliceReducers;
export const { login, logOut } = userSlice.actions;

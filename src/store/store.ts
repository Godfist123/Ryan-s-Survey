import { configureStore } from "@reduxjs/toolkit";
import userSliceReducers from "./userSlice";
import { userStateType } from "./userSlice";
import componentSliceReducers, { ComponentStateType } from "./componentSlice";

export type stateType = {
  userSlice: userStateType;
  componentSlice: ComponentStateType;
};

export default configureStore({
  reducer: {
    userSlice: userSliceReducers,
    componentSlice: componentSliceReducers,
  },
});

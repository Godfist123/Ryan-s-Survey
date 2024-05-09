import { configureStore } from "@reduxjs/toolkit";
import userSliceReducers from "./userSlice";
import { userStateType } from "./userSlice";
import componentSliceReducers, { ComponentStateType } from "./componentSlice";
import { PageInfoStateType } from "./pageinfoSlice";
import pageInfoSliceReducers from "./pageinfoSlice";
export type stateType = {
  userSlice: userStateType;
  componentSlice: ComponentStateType;
  pageInfoSlice: PageInfoStateType;
};

export default configureStore({
  reducer: {
    userSlice: userSliceReducers,
    componentSlice: componentSliceReducers,
    pageInfoSlice: pageInfoSliceReducers,
  },
});

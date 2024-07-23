import { configureStore } from "@reduxjs/toolkit";
import userSliceReducers from "./userSlice";
import { userStateType } from "./userSlice";
import componentSliceReducers, { ComponentStateType } from "./componentSlice";
import { PageInfoStateType } from "./pageinfoSlice";
import pageInfoSliceReducers from "./pageinfoSlice";
import undoable, { excludeAction, StateWithHistory } from "redux-undo";

export type stateType = {
  userSlice: userStateType;
  componentSlice: StateWithHistory<ComponentStateType>;
  pageInfoSlice: PageInfoStateType;
};

export default configureStore({
  reducer: {
    userSlice: userSliceReducers,
    //componentSlice: componentSliceReducers,without undo api
    componentSlice: undoable(componentSliceReducers, {
      limit: 20,
      filter: excludeAction([
        "componentSlice/resetComponents",
        "componentSlice/changeSelectedId",
        "componentSlice/toolBarUp",
        "componentSlice/toolBarDown",
      ]),
    }),

    pageInfoSlice: pageInfoSliceReducers,
  },
});

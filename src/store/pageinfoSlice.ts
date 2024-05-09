import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type PageInfoStateType = {
  title: string;
  desc?: string;
  css?: string;
  js?: string;
};

export const INIT_STATE: PageInfoStateType = {
  title: "",
  desc: "",
  css: "",
  js: "",
};

const pageInfoSlice = createSlice({
  name: "pageInfo",
  initialState: INIT_STATE,
  reducers: {
    resetPageInfo: (
      state: PageInfoStateType,
      actions: PayloadAction<PageInfoStateType>
    ) => {
      return actions.payload;
    },
  },
});

const pageInfoSliceReducers = pageInfoSlice.reducer;
export const { resetPageInfo } = pageInfoSlice.actions;
export default pageInfoSliceReducers;

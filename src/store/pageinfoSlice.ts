import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type PageInfoStateType = {
  title: string;
  desc?: string;
  css?: string;
  js?: string;
  isPublished?: boolean;
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
    setTitle: (
      state: PageInfoStateType,
      actions: PayloadAction<{ title: string }>
    ) => {
      state.title = actions.payload.title;
    },
  },
});

const pageInfoSliceReducers = pageInfoSlice.reducer;
export const { resetPageInfo, setTitle } = pageInfoSlice.actions;
export default pageInfoSliceReducers;

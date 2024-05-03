import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ComponentPropsType } from "../components/QuestionComponents";
import { produce } from "immer";
import { stringify } from "querystring";
export type ComponentInfoType = {
  fe_id: string;
  type: string;
  title: string;
  props: ComponentPropsType;
};

export type ComponentStateType = {
  componentList: ComponentInfoType[];
  selectedId: string;
};

const INIT_STATE: ComponentStateType = {
  componentList: [],
  selectedId: "",
};

export const componentSlice = createSlice({
  name: "componentSlice",
  initialState: INIT_STATE,
  reducers: {
    resetComponents: (
      state: ComponentStateType,
      actions: PayloadAction<ComponentStateType>
    ) => {
      return actions.payload;
    },
    changeSelectedId: (
      state: ComponentStateType,
      actions: PayloadAction<string>
    ) => {
      state.selectedId = actions.payload;
    },
    addComponent: produce(
      (
        draft: ComponentStateType,
        actions: PayloadAction<ComponentInfoType>
      ) => {
        const { selectedId, componentList } = draft;
        const index = componentList.findIndex(
          (item) => item.fe_id === selectedId
        );
        if (index < 0) {
          //empty list which means the canvas is empty
          draft.componentList.push(actions.payload);
        } else {
          draft.componentList.splice(index + 1, 0, actions.payload);
        }
        draft.selectedId = actions.payload.fe_id;
      }
    ),
    changeComponentProp: (
      state: ComponentStateType,
      actions: PayloadAction<{ id: string; newProps: ComponentPropsType }>
    ) => {
      const { newProps, id } = actions.payload;
      const unEditedItem = state.componentList.find((item) => {
        return item.fe_id === id;
      });
      if (unEditedItem) {
        unEditedItem.props = newProps;
      }
    },
    removeSelectedComponent: (state: ComponentStateType) => {
      const id = state.selectedId;
      if (!id) return;
      const index = state.componentList.findIndex((item) => item.fe_id === id);
      if (index === -1) return;
      const nextIndex =
        index === state.componentList.length - 1 ? -1 : index + 1;
      state.selectedId =
        nextIndex === -1 ? "" : state.componentList[nextIndex].fe_id;
      state.componentList.splice(index, 1);
    },

    // changeSelectedId: (
    //   state: ComponentStateType,
    //   actions: PayloadAction<string>
    // ) => {
    //   return { ...state, selectedId: actions.payload };
    // },
  },
});

export const {
  resetComponents,
  changeSelectedId,
  addComponent,
  changeComponentProp,
  removeSelectedComponent,
} = componentSlice.actions;
const componentSliceReducers = componentSlice.reducer;
export default componentSliceReducers;

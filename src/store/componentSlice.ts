import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";
import { ComponentPropsType } from "../components/QuestionComponents";
import { arrayMove } from "@dnd-kit/sortable";
import cloneDeep from "lodash.clonedeep";

export type ComponentInfoType = {
  fe_id: string;
  type: string;
  title: string;
  isHidden?: boolean;
  isLocked?: boolean;
  props: ComponentPropsType;
};

export type ComponentStateType = {
  componentList: ComponentInfoType[];
  selectedId: string;
  copiedComponent: ComponentInfoType | null;
};

const INIT_STATE: ComponentStateType = {
  componentList: [],
  selectedId: "",
  copiedComponent: null,
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
    addComponent: (
      state: ComponentStateType,
      actions: PayloadAction<ComponentInfoType>
    ) => {
      const { selectedId, componentList } = state;
      const index = componentList.findIndex(
        (item) => item.fe_id === selectedId
      );
      if (index < 0) {
        //empty list which means the canvas is empty
        state.componentList.push(actions.payload);
        state.selectedId = actions.payload.fe_id;
      } else {
        state.componentList.splice(index + 1, 0, actions.payload);
        state.selectedId = actions.payload.fe_id;
      }
    },
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
    changeComponentHidden: (
      state: ComponentStateType,
      actions: PayloadAction<{ id: string; isHidden: boolean }>
    ) => {
      const { componentList } = state;
      const { id, isHidden } = actions.payload;
      const curComponent = componentList.find((item) => item.fe_id === id);
      if (curComponent) {
        curComponent.isHidden = isHidden;
      }
      if (!id) return;
      const index = state.componentList.findIndex((item) => item.fe_id === id);
      if (index === -1) return;
      const nextIndex =
        index === state.componentList.length - 1 ? -1 : index + 1;
      state.selectedId =
        nextIndex === -1 ? "" : state.componentList[nextIndex].fe_id;
    },
    toggleComponentLocked: (
      state: ComponentStateType,
      actions: PayloadAction<{ id: string }>
    ) => {
      const { selectedId, componentList } = state;
      const curComponent = componentList.find((item) => {
        return item.fe_id === actions.payload.id;
      });
      if (curComponent) {
        curComponent.isLocked = !curComponent.isLocked;
      }
    },
    copySelectedComponent: (state: ComponentStateType) => {
      const { selectedId, componentList } = state;
      const selectedComponent = componentList.find((item) => {
        return item.fe_id === selectedId;
      });
      if (selectedComponent) {
        state.copiedComponent = cloneDeep(selectedComponent);
      }
    },
    pasteCopiedComponent: (state: ComponentStateType) => {
      const { componentList, selectedId, copiedComponent } = state;
      if (copiedComponent) {
        copiedComponent.fe_id = nanoid();
        const index = componentList.findIndex(
          (item) => item.fe_id === selectedId
        );
        componentList.splice(index + 1, 0, copiedComponent);
        state.selectedId = copiedComponent.fe_id;
        state.copiedComponent = null;
      }
    },
    keyboardUpArrow: (state: ComponentStateType) => {
      const { selectedId, componentList } = state;
      const index = componentList.findIndex((item) => {
        return item.fe_id === selectedId;
      });
      if (index <= 0) return;
      state.selectedId = componentList[index - 1].fe_id;
    },
    keyboardDownArrow: (state: ComponentStateType) => {
      const { selectedId, componentList } = state;
      const index = componentList.findIndex((item) => {
        return item.fe_id === selectedId;
      });
      if (index < 0 || index === componentList.length - 1) return;
      state.selectedId = componentList[index + 1].fe_id;
    },
    modifyTitle: (
      state: ComponentStateType,
      actions: PayloadAction<{ id: string; newTitle: string }>
    ) => {
      const unModifiedItem = state.componentList.find((item) => {
        return item.fe_id === actions.payload.id;
      });
      if (unModifiedItem) {
        unModifiedItem.title = actions.payload.newTitle;
      }
    },
    moveComponent: (
      state: ComponentStateType,
      actions: PayloadAction<{ oldIndex: number; newIndex: number }>
    ) => {
      const currComponentList = state.componentList;
      const { oldIndex, newIndex } = actions.payload;
      state.componentList = arrayMove(currComponentList, oldIndex, newIndex);
    },
  },
  // changeSelectedId: (
  //   state: ComponentStateType,
  //   actions: PayloadAction<string>
  // ) => {
  //   return { ...state, selectedId: actions.payload };
  // },
});

export const {
  resetComponents,
  changeSelectedId,
  addComponent,
  changeComponentProp,
  removeSelectedComponent,
  changeComponentHidden,
  toggleComponentLocked,
  copySelectedComponent,
  pasteCopiedComponent,
  keyboardUpArrow,
  keyboardDownArrow,
  modifyTitle,
  moveComponent,
} = componentSlice.actions;
const componentSliceReducers = componentSlice.reducer;
export default componentSliceReducers;

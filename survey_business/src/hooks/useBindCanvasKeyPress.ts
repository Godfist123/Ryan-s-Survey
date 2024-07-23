import { useKeyPress } from "ahooks";
import { useDispatch } from "react-redux";
import { ActionCreators } from "redux-undo";
import {
  copySelectedComponent,
  keyboardUpArrow,
  pasteCopiedComponent,
  removeSelectedComponent,
  keyboardDownArrow,
} from "../store/componentSlice";

//determine where the cursor was aiming at
const isActiveElementValid = () => {
  const activeElem = document.activeElement;
  if (activeElem === document.body) return true; //cursor is not aiming at input
  if (activeElem?.matches("div[role=button]")) return true; //After wrapping component with SortableItem.tsx,
  //the whole div is a button
  return false;
};

const useBindCanvasPress = () => {
  const dispatch = useDispatch();
  useKeyPress(["backspace", "delete"], () => {
    if (isActiveElementValid()) {
      dispatch(removeSelectedComponent());
    }
  });
  useKeyPress(["ctrl.c", "meta.c"], () => {
    if (isActiveElementValid()) {
      dispatch(copySelectedComponent());
    }
  });
  useKeyPress(["ctrl.v", "meta.v"], () => {
    if (isActiveElementValid()) {
      dispatch(pasteCopiedComponent());
    }
  });
  useKeyPress(["uparrow"], () => {
    if (isActiveElementValid()) {
      dispatch(keyboardUpArrow());
    }
  });
  useKeyPress(["downarrow"], () => {
    if (isActiveElementValid()) {
      dispatch(keyboardDownArrow());
    }
  });
  useKeyPress(
    ["ctrl.z", "meta.z"],
    () => {
      if (isActiveElementValid()) {
        dispatch(ActionCreators.undo());
      }
    },
    { exactMatch: true }
  );
  useKeyPress(
    ["ctrl.shift.z", "meta.shift.z"],
    () => {
      if (isActiveElementValid()) {
        dispatch(ActionCreators.redo());
      }
    },
    { exactMatch: true }
  );
};

export default useBindCanvasPress;

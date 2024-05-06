import { useKeyPress } from "ahooks";
import { useDispatch } from "react-redux";
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
};

export default useBindCanvasPress;

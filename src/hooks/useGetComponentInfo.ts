import { useSelector } from "react-redux";
import { stateType } from "../store/store";
import { ComponentStateType } from "../store/componentSlice";
const useGetComponentInfo = () => {
  const data = useSelector<stateType>(
    (state) => state.componentSlice
  ) as ComponentStateType;
  const { componentList, selectedId } = data;
  const selectedComponent = componentList.find((item) => {
    return item.fe_id === selectedId;
  });
  return { componentList, selectedId, selectedComponent };
};

export default useGetComponentInfo;
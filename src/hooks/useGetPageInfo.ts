import { useSelector } from "react-redux";
import { stateType } from "../store/store";
import { PageInfoStateType } from "../store/pageinfoSlice";

const useGetPageInfo = () => {
  const pageInfoState = useSelector<stateType>((state) => {
    return state.pageInfoSlice;
  }) as PageInfoStateType;
  return pageInfoState;
};
export default useGetPageInfo;

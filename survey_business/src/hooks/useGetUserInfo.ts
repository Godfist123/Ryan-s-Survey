import { useSelector } from "react-redux";
import { stateType } from "../store/store";
import { userStateType } from "../store/userSlice";

const useGetUserInfo = () => {
  const { username, nickname } = useSelector<stateType>((state) => {
    return state.userSlice;
  }) as userStateType;
  return { username, nickname };
};

export default useGetUserInfo;

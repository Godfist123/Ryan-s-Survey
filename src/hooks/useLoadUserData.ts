import { useEffect, useState } from "react";
import useGetUserInfo from "./useGetUserInfo";
import { useRequest } from "ahooks";
import { getUserInfoService } from "../services/user";
import { useDispatch } from "react-redux";
import { login } from "../store/userSlice";

const useLoadUserData = () => {
  const dispatch = useDispatch();
  const [waitingUserData, setWaitingUserData] = useState(true);
  const { run } = useRequest(getUserInfoService, {
    manual: true,
    onSuccess(resp) {
      const { username, nickname } = resp;
      dispatch(login({ username, nickname }));
    },
    onFinally() {
      setWaitingUserData(false);
    },
  });
  const { username } = useGetUserInfo();
  useEffect(() => {
    if (username) {
      setWaitingUserData(false);
      return;
    }
    run();
  }, [username]);
  return { waitingUserData };
};

export default useLoadUserData;

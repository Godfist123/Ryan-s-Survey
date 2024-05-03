import { useEffect } from "react";
import useGetUserInfo from "./useGetUserInfo";
import { useLocation, useNavigate } from "react-router-dom";

const useNavPage = (waitingFlag: boolean) => {
  const { username } = useGetUserInfo();
  const { pathname } = useLocation();
  const Navi = useNavigate();
  useEffect(() => {
    if (waitingFlag) return;
    //already login
    if (username) {
      if (["/login", "/register"].includes(pathname)) {
        Navi("/manage/list");
      } else {
        return;
      }
    } else {
      if (["/", "/login", "/register"].includes(pathname)) {
        return;
      } else {
        Navi("/login");
      }
    }
  }, [username, pathname, waitingFlag]);
};
export default useNavPage;

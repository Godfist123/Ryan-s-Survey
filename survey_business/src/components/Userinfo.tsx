import { useRequest } from "ahooks";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { getUserInfoService } from "../services/user";
import { UserOutlined } from "@ant-design/icons";
import { Button, message } from "antd";
import { removeToken } from "../utils/user-token";
import useGetUserInfo from "../hooks/useGetUserInfo";
import { useDispatch } from "react-redux";
import { logOut } from "../store/userSlice";
interface UserInfoProps {
  // Define your props here
}

const UserInfo: React.FC<UserInfoProps> = (props) => {
  // const { data } = useRequest(getUserInfoService);
  // const { username, nickname } = data || {};
  const { username, nickname } = useGetUserInfo();
  const Navi = useNavigate();
  const dispatch = useDispatch();

  const logout = () => {
    removeToken();
    Navi("/login");
    dispatch(logOut());
    message.success("Logout Successful");
  };

  const UserInfo = (
    <>
      <span>
        <UserOutlined />
        {nickname}
      </span>
      <Button type="link" onClick={logout}>
        Log Out
      </Button>
    </>
  );

  const Login = <Link to="/login">login</Link>;
  return <div>{username ? UserInfo : Login}</div>;
};

export default UserInfo;

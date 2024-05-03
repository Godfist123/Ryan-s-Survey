import React, { useEffect } from "react";
import styles from "./Login.module.scss";
import { Button, Checkbox, Form, Input, Typography, message } from "antd";
import { Space } from "antd";
import { UserAddOutlined } from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";
import { log } from "console";
import { useRequest } from "ahooks";
import { loginService } from "../services/user";
import { setToken } from "../utils/user-token";
interface LoginProps {
  // Define your props here
}

const { Title } = Typography;

const rememberUser = (username: string, password: string) => {
  localStorage.setItem("username", username);
  localStorage.setItem("password", password);
};

const removeUser = () => {
  localStorage.removeItem("username");
  localStorage.removeItem("password");
};

const getUser = () => {
  return {
    username: localStorage.getItem("username"),
    password: localStorage.getItem("password"),
  };
};
const Login: React.FC<LoginProps> = (props) => {
  const [form] = Form.useForm();
  const Navi = useNavigate();

  useEffect(() => {
    const { username, password } = getUser();
    form.setFieldsValue({ username, password });
  }, []);

  const { run } = useRequest(
    async (value) => {
      const { username, password } = value;
      const data = await loginService(username, password);
      return data;
    },
    {
      manual: true,
      onSuccess(resp) {
        const { token = "" } = resp;
        setToken(token);
        Navi("/manage/list");
        message.success("Login Successful");
      },
    }
  );

  const onFinish = (value: any) => {
    run(value);
    const { username, password, remember } = value || {};
    if (remember) {
      rememberUser(username, password);
    } else {
      removeUser();
    }
  };

  return (
    <div className={styles.container}>
      <div>
        <Space>
          <Title level={2}>
            <UserAddOutlined />
          </Title>
          <Title level={2}>Log in</Title>
        </Space>
      </div>
      <div>
        <Form
          labelCol={{ span: 10 }}
          wrapperCol={{ span: 20 }}
          onFinish={onFinish}
          initialValues={{ remember: true }}
          form={form}
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[
              { required: true, message: "Please Enter Username" },
              {
                type: "string",
                min: 5,
                max: 20,
                message: "Charaters between 5 - 20",
              },
              {
                pattern: /^\w+$/,
                message: "Only Character and Underline",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please Enter Password" }]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item
            name="remember"
            valuePropName="checked"
            wrapperCol={{ offset: 10, span: 20 }}
          >
            <Checkbox>Remember me</Checkbox>
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 10, span: 20 }}>
            <Space>
              <Button type="primary" htmlType="submit">
                login
              </Button>
              <Link to="/register">Register Now</Link>
            </Space>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Login;

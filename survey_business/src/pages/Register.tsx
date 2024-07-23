import { UserAddOutlined } from "@ant-design/icons";
import { Typography, Space, Form, Input, Button, message } from "antd";
import React from "react";
import styles from "./Register.module.scss";
import { Link, useNavigate } from "react-router-dom";
import { registerService } from "../services/user";
import { useRequest } from "ahooks";
interface RegisterProps {
  // Define your props here
}

const { Title } = Typography;

const Register: React.FC<RegisterProps> = (props) => {
  const Navi = useNavigate();
  const { run } = useRequest(
    async (value) => {
      const { username, password, nickname } = value;
      await registerService(username, password, nickname);
    },
    {
      manual: true,
      onSuccess() {
        message.success("Register Successful");
        Navi("/login");
      },
    }
  );
  const onFinish = (value: any) => {
    run(value);
  };

  return (
    <div className={styles.container}>
      <div>
        <Space>
          <Title level={2}>
            <UserAddOutlined />
          </Title>
          <Title level={2}>Register</Title>
        </Space>
      </div>
      <div>
        <Form
          labelCol={{ span: 10 }}
          wrapperCol={{ span: 20 }}
          onFinish={onFinish}
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
            label="Confirm Password"
            name="confirmPassword"
            dependencies={["password"]}
            rules={[
              { required: true, message: "Please Enter Password" },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  } else {
                    return Promise.reject(new Error("Different Password"));
                  }
                },
              }),
            ]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item label="Nickname" name="nickname">
            <Input />
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 10, span: 30 }}>
            <Space>
              <Button type="primary" htmlType="submit">
                submit
              </Button>
              <Link to="/login">Already have account? Log in</Link>
            </Space>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Register;

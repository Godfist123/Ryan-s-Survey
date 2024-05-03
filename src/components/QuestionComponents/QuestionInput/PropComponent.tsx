import React, { useEffect } from "react";
import { Form, Input } from "antd";
import { QuestionInputPropsType } from "./interface";
const PropComponent: React.FC<QuestionInputPropsType> = (props) => {
  const [form] = Form.useForm();
  const { title, placeholder, onChange } = props;

  useEffect(() => {
    form.setFieldsValue({ title, placeholder });
  }, [title, placeholder]);

  const handleChange = () => {
    if (onChange) {
      onChange(form.getFieldsValue());
    }
  };

  return (
    <Form
      layout="vertical"
      initialValues={{ title, placeholder }}
      form={form}
      onValuesChange={handleChange}
    >
      <Form.Item
        label="Title"
        name="title"
        rules={[{ required: true, message: "Please enter title" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item label="Placeholder" name="placeholder">
        <Input></Input>
      </Form.Item>
    </Form>
  );
};

export default PropComponent;

import React, { useEffect } from "react";
import { Form, Input } from "antd";
import { QuestionTextareaPropsType } from "./interface";
const PropComponent: React.FC<QuestionTextareaPropsType> = (props) => {
  const [form] = Form.useForm();
  const { title, placeholder, onChange, disabled } = props;
  const { TextArea } = Input;

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
      disabled={disabled}
    >
      <Form.Item
        label="Title"
        name="title"
        rules={[{ required: true, message: "Please enter title" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item label="Placeholder" name="placeholder">
        <TextArea />
      </Form.Item>
    </Form>
  );
};

export default PropComponent;

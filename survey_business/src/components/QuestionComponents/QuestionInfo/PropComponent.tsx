import React, { useEffect } from "react";
import { QuestionInfoPropsType } from "./interface";
import { Form, Input } from "antd";

const PropComponent: React.FC<QuestionInfoPropsType> = (props) => {
  const { title, desc, onChange, disabled } = props;
  const [form] = Form.useForm();
  const { TextArea } = Input;

  useEffect(() => {
    form.setFieldsValue({ title, desc });
  }, [title, desc]);

  const handleChange = () => {
    if (onChange) {
      onChange(form.getFieldsValue());
    }
  };

  return (
    <div>
      <Form
        layout="vertical"
        initialValues={{ title, desc }}
        disabled={disabled}
        onValuesChange={handleChange}
        form={form}
      >
        <Form.Item
          label="Title"
          name="title"
          rules={[{ required: true, message: "Please Enter Survey Title" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Description"
          name="desc"
          rules={[{ message: "Description for this Survey" }]}
        >
          <TextArea />
        </Form.Item>
      </Form>
    </div>
  );
};

export default PropComponent;

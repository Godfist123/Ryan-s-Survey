import React, { useEffect } from "react";
import { QuestionParagraphPropsType } from "./interface";
import { Form, Input, Checkbox } from "antd";

const PropComponent: React.FC<QuestionParagraphPropsType> = (props) => {
  const { text, isCenter, disabled, onChange } = props;
  const { TextArea } = Input;
  const [form] = Form.useForm();

  useEffect(() => {
    form.setFieldsValue({ text, isCenter });
  }, [text, isCenter]);

  const handleChange = () => {
    if (onChange) {
      onChange(form.getFieldsValue());
    }
  };

  return (
    <Form
      layout="vertical"
      initialValues={{ text, isCenter }}
      disabled={disabled}
      onValuesChange={handleChange}
      form={form}
    >
      <Form.Item
        label="Content"
        name="text"
        rules={[{ required: true, message: "Please Enter Content" }]}
      >
        <TextArea />
      </Form.Item>
      <Form.Item name="isCenter" valuePropName="checked">
        <Checkbox>Center</Checkbox>
      </Form.Item>
    </Form>
  );
};

export default PropComponent;

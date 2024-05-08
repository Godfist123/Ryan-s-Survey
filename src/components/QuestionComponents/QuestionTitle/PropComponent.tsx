import React, { useEffect } from "react";
import { QuestionTitlePropsType } from "./interface";
import { Checkbox, Form, Input, Select } from "antd";
import FormItem from "antd/es/form/FormItem";

interface PropComponentProps {
  // Define your props here
}

const PropComponent: React.FC<QuestionTitlePropsType> = (props) => {
  const { text, level, isCenter, onChange, disabled } = props;
  const [form] = Form.useForm();

  useEffect(() => {
    form.setFieldsValue({ text, level, isCenter });
  }, [text, level, isCenter]);

  const handleChange = () => {
    if (onChange) {
      onChange(form.getFieldsValue());
    }
  };

  return (
    <div>
      <Form
        layout="vertical"
        initialValues={{ text, level, isCenter }}
        form={form}
        onValuesChange={handleChange}
        disabled={disabled}
      >
        <Form.Item
          label="Text"
          name="text"
          rules={[{ required: true, message: "Please enter text" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item label="Level" name="level">
          <Select
            options={[
              { value: 1, text: 1 },
              { value: 2, text: 2 },
              { value: 3, text: 3 },
              { value: 4, text: 4 },
              { value: 5, text: 5 },
            ]}
          ></Select>
        </Form.Item>
        <Form.Item name="isCenter" valuePropName="checked">
          <Checkbox>Center</Checkbox>
        </Form.Item>
      </Form>
    </div>
  );
};

export default PropComponent;

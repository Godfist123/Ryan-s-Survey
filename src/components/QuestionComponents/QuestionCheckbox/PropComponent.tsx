import React, { useEffect } from "react";
import { QuestionCheckboxPropsType, optionType } from "./interface";
import { Form, Typography, Input, Checkbox, Space, Button } from "antd";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { nanoid } from "@reduxjs/toolkit";

const PropComponent: React.FC<QuestionCheckboxPropsType> = (props) => {
  const { title, isVertical, list, onChange, disabled } = props;
  const [form] = Form.useForm();

  useEffect(() => {
    form.setFieldsValue({ title, isVertical, list });
  }, [title, isVertical, list]);

  const handleChange = () => {
    //onChange()
    if (onChange) {
      const newProps = form.getFieldsValue() as QuestionCheckboxPropsType;
      console.log("before", newProps);
      const { list } = newProps;
      list?.forEach((item) => {
        if (item.value) return;
        item.value = nanoid(5);
      });
      console.log("after", newProps);

      onChange(newProps);
    }
  };

  return (
    <Form
      layout="vertical"
      form={form}
      initialValues={{ title, isVertical, list }}
      onValuesChange={handleChange}
      disabled={disabled}
    >
      <Form.Item
        label="Title"
        name="title"
        rules={[{ required: true, message: "Please Enter Title" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item label="Selection">
        <Form.List name="list">
          {(fields, { add, remove }) => (
            <>
              {fields.map(({ key, name }, index) => {
                return (
                  <Space key={key} align="baseline">
                    <Form.Item name={[name, "checked"]} valuePropName="checked">
                      <Checkbox />
                    </Form.Item>
                    <Form.Item
                      //   similar to options[{$name}.text]
                      name={[name, "text"]}
                      rules={[
                        { required: true, message: "Please Enter Text" },
                        {
                          validator: (_, text) => {
                            const { list = [] } = form.getFieldsValue();
                            let count = 0;
                            list.forEach((item: optionType) => {
                              if (item.text === text) {
                                count++;
                              }
                            });
                            if (count === 1) return Promise.resolve();
                            return Promise.reject(
                              new Error("Duplicate Selection")
                            );
                          },
                        },
                      ]}
                    >
                      <Input placeholder="Please Enter Text" />
                    </Form.Item>
                    {/* remove button */}
                    {index > 0 && (
                      <MinusCircleOutlined onClick={() => remove(name)} />
                    )}
                  </Space>
                );
              })}
              <Form.Item>
                <Button
                  type="link"
                  onClick={() => add({ text: "", value: "", checked: false })}
                  icon={<PlusOutlined />}
                  block
                >
                  Add Selection
                </Button>
              </Form.Item>
            </>
          )}
        </Form.List>
      </Form.Item>
      <Form.Item name="isVertical" valuePropName="checked">
        <Checkbox>Vertical</Checkbox>
      </Form.Item>
    </Form>
  );
};

export default PropComponent;

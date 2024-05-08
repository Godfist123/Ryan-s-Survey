import React, { useEffect } from "react";
import { QuestionRadioPropsType, optionType } from "./interface";
import { Form, Input, Checkbox, Select, Button, Space } from "antd";
import { text } from "stream/consumers";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { nanoid } from "@reduxjs/toolkit";

const PropComponent: React.FC<QuestionRadioPropsType> = (props) => {
  const { onChange, title, isVertical, value, options, disabled } = props;
  const [form] = Form.useForm();

  useEffect(() => {
    form.setFieldsValue({ title, isVertical, value, options });
  }, [title, isVertical, value, options]);

  const handleChange = () => {
    if (onChange) {
      const newProps = form.getFieldsValue() as QuestionRadioPropsType;
      const { options } = newProps;
      options?.forEach((item) => {
        if (item.value) return;
        item.value = nanoid(5);
      });
      onChange(newProps);
    }
  };

  return (
    <div>
      <Form
        layout="vertical"
        initialValues={{ title, isVertical, value, options }}
        onValuesChange={handleChange}
        disabled={disabled}
        form={form}
      >
        <Form.Item
          label="Title"
          name="title"
          rules={[{ required: true, message: "Please Enter Title" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item label="Selection">
          <Form.List name="options">
            {(fields, { add, remove }) => (
              <>
                {fields.map(({ key, name }, index) => {
                  return (
                    <Space key={key} align="baseline">
                      <Form.Item
                        //   similar to options[{$name}.text]
                        name={[name, "text"]}
                        rules={[
                          { required: true, message: "Please Enter Text" },
                          {
                            validator: (_, text) => {
                              const { options = [] } = form.getFieldsValue();
                              let count = 0;
                              options.forEach((item: optionType) => {
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
                      {index > 1 && (
                        <MinusCircleOutlined onClick={() => remove(name)} />
                      )}
                    </Space>
                  );
                })}
                <Form.Item>
                  <Button
                    type="link"
                    onClick={() => add({ text: "", value: "" })}
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
        <Form.Item label="Default selected" name="value">
          <Select
            value={value}
            options={options?.map(({ text, value }) => ({
              value,
              label: text || "",
            }))}
          ></Select>
        </Form.Item>
        <Form.Item name="isVertical" valuePropName="checked">
          <Checkbox>Vertical</Checkbox>
        </Form.Item>
      </Form>
    </div>
  );
};

export default PropComponent;

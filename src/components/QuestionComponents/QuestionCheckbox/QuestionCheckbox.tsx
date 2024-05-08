import React from "react";
import {
  QuestionCheckboxPropsType,
  QuestionCheckboxDefaultProps,
} from "./interface";
import { Space, Typography, Checkbox } from "antd";

const QuestionCheckbox: React.FC<QuestionCheckboxPropsType> = (props) => {
  const { Paragraph } = Typography;
  const { title, isVertical, list } = {
    ...QuestionCheckboxDefaultProps,
    ...props,
  };
  return (
    <div>
      <Paragraph strong>{title}</Paragraph>
      <Space direction={isVertical ? "vertical" : "horizontal"}>
        {list.map((item) => {
          const { value, text, checked } = item;
          return (
            <Checkbox key={value} value={value} checked={checked}>
              {text}
            </Checkbox>
          );
        })}
      </Space>
    </div>
  );
};

export default QuestionCheckbox;

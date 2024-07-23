import React from "react";
import { QuestionRadioPropsType, QuestionRadioDefaultProps } from "./interface";
import { Typography, Radio, Space } from "antd";

const { Paragraph } = Typography;

const QuestionRadio: React.FC<QuestionRadioPropsType> = (props) => {
  const { title, isVertical, options, value } = {
    ...QuestionRadioDefaultProps,
    ...props,
  };

  return (
    <div>
      <Paragraph strong>{title}</Paragraph>
      <Radio.Group value={value}>
        <Space direction={isVertical ? "vertical" : "horizontal"}>
          {options.map((item, index) => {
            const { value, text } = item;
            return (
              <Radio key={index} value={value}>
                {text}
              </Radio>
            );
          })}
        </Space>
      </Radio.Group>
    </div>
  );
};

export default QuestionRadio;

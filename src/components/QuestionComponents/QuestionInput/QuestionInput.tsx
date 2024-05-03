import React from "react";
import { QuestionInputPropsType, QuestionInputDefaultProps } from "./interface";
import { Input, Typography } from "antd";

interface QuestionInputProps {
  // Define your props here
}

const { Paragraph } = Typography;

const QuestionInput: React.FC<QuestionInputPropsType> = (props) => {
  const { title, placeholder } = { ...QuestionInputDefaultProps, ...props };
  return (
    <div>
      <Paragraph>{title}</Paragraph>
      <div>
        <Input placeholder={placeholder}></Input>
      </div>
    </div>
  );
};

export default QuestionInput;

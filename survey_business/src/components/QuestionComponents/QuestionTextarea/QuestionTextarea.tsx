import React from "react";
import {
  QuestionTextareaPropsType,
  QuestionTextareaDefaultProps,
} from "./interface";
import { Input, Typography } from "antd";

const { Paragraph } = Typography;
const { TextArea } = Input;

const QuestionTextarea: React.FC<QuestionTextareaPropsType> = (props) => {
  const { title, placeholder } = { ...QuestionTextareaDefaultProps, ...props };
  return (
    <div>
      <Paragraph>{title}</Paragraph>
      <div>
        <TextArea placeholder={placeholder}></TextArea>
      </div>
    </div>
  );
};

export default QuestionTextarea;

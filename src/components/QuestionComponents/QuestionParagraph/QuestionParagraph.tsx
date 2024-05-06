import React from "react";
import {
  QuestionParagraphPropsType,
  QuestionParagraphDefaultProps,
} from "./interface";
import { Typography } from "antd";

const QuestionParagraph: React.FC<QuestionParagraphPropsType> = (props) => {
  const { Paragraph } = Typography;
  const { text = "", isCenter = false } = {
    ...QuestionParagraphDefaultProps,
    ...props,
  };

  return (
    <Paragraph
      style={{ textAlign: isCenter ? "center" : "start", marginBottom: "0" }}
    >
      {text}
    </Paragraph>
  );
};

export default QuestionParagraph;

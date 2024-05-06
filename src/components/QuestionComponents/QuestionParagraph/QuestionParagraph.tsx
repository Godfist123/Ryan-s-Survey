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
  //based on html's newline symbol generate an array
  const textList = text.split("\n");

  return (
    <Paragraph
      style={{ textAlign: isCenter ? "center" : "start", marginBottom: "0" }}
    >
      {textList.map((item, index) => (
        <span key={index}>
          {index > 0 && <br />}
          {item}
        </span>
      ))}
    </Paragraph>
  );
};

export default QuestionParagraph;

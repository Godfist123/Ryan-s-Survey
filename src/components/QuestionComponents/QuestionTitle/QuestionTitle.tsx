import React from "react";
import { QuestionTitlePropsType, QuestionTitleDefaultProps } from "./interface";
import { Typography } from "antd";

const { Title } = Typography;

const QuestionTitle: React.FC<QuestionTitlePropsType> = (props) => {
  const {
    text,
    level = 1,
    isCenter,
  } = { ...QuestionTitleDefaultProps, ...props };

  const getFontSize = (level: number) => {
    if (level === 1) return "28px";
    if (level === 2) return "24px";
    if (level === 3) return "20px";
    if (level === 4) return "16px";
    if (level === 5) return "12px";
    return "12px";
  };

  return (
    <Title
      level={level}
      style={{
        textAlign: isCenter ? "center" : "start",
        marginBottom: "0",
        fontSize: getFontSize(level),
      }}
    >
      {text}
    </Title>
  );
};

export default QuestionTitle;

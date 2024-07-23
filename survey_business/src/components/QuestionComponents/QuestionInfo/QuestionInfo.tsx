import React from "react";
import { QuestionInfoPropsType, QuestionInfoDefaultProps } from "./interface";
import { Typography } from "antd";
interface QuestionInfoProps {
  // Define your props here
}

const QuestionInfo: React.FC<QuestionInfoPropsType> = (props) => {
  const { title, desc } = { ...QuestionInfoDefaultProps, ...props };
  const { Title, Paragraph } = Typography;

  const newDesc = desc.split("\n");

  return (
    <div style={{ textAlign: "center" }}>
      <Title style={{ fontSize: "24px" }}>{title}</Title>
      <Paragraph>
        {newDesc.map((item, index) => {
          return (
            <span key={index}>
              {index !== 0 && <br />}
              {item}
            </span>
          );
        })}
      </Paragraph>
    </div>
  );
};

export default QuestionInfo;

import React, { CSSProperties } from "react";

interface QuestionParagraphProps {
  text: string;
  isCenter?: boolean;
}

const QuestionParagraph: React.FC<QuestionParagraphProps> = ({
  text,
  isCenter,
}) => {
  const style: CSSProperties = {};
  if (isCenter) {
    style["textAlign"] = "center";
  }

  const textList = text.split("\n");
  return (
    <p style={style}>
      {textList.map((item, index) => (
        <span key={index}>
          {index > 0 && <br />}
          {item}
        </span>
      ))}
    </p>
  );
};

export default QuestionParagraph;

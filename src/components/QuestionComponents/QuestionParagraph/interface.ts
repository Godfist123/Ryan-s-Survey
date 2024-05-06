export type QuestionParagraphPropsType = {
  text?: string;
  isCenter?: boolean;

  // for PropComponent
  onChange?: (newProps: QuestionParagraphPropsType) => void;
  disabled?: boolean;
};

export const QuestionParagraphDefaultProps: QuestionParagraphPropsType = {
  text: "Paragraph",
  isCenter: false,
};

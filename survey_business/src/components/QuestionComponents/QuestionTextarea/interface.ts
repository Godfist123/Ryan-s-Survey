import { FC } from "react";

export type QuestionTextareaPropsType = {
  title?: string;
  placeholder?: string;
  onChange?: (newProps: QuestionTextareaPropsType) => void;
  disabled?: boolean;
};

export const QuestionTextareaDefaultProps: QuestionTextareaPropsType = {
  title: "Please Enter Title (TextArea)",
  placeholder: "Please Enter ...",
};

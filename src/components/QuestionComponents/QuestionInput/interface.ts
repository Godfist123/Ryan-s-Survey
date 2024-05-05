import { FC } from "react";

export type QuestionInputPropsType = {
  title?: string;
  placeholder?: string;
  onChange?: (newProps: QuestionInputPropsType) => void;
  disabled?: boolean;
};

export const QuestionInputDefaultProps: QuestionInputPropsType = {
  title: "Please Enter Title",
  placeholder: "Please Enter ...",
};

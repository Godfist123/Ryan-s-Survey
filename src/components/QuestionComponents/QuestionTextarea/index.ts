import QuestionTextarea from "./QuestionTextarea";
import PropComponent from "./PropComponent";
import { QuestionTextareaDefaultProps } from "./interface";
import { Component } from "react";

export * from "./interface";

export default {
  title: "TextArea",
  type: "textArea",
  PropComponent: PropComponent,
  Component: QuestionTextarea,
  defaultProps: QuestionTextareaDefaultProps,
};

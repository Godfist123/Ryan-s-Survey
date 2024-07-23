import QuestionInfo from "./QuestionInfo";
import PropComponent from "./PropComponent";
import { QuestionInfoDefaultProps } from "./interface";

export * from "./interface";

export default {
  title: "QuestionInfo",
  type: "QuestionInfo",
  PropComponent,
  Component: QuestionInfo,
  defaultProps: QuestionInfoDefaultProps,
};

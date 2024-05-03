/**
 * @description survey input
 * @author Ryan
 */

import PropComponent from "./PropComponent";
import QuestionInput from "./QuestionInput";
import { QuestionInputDefaultProps } from "./interface";

export * from "./interface";

export default {
  title: "input",
  type: "QuestionInput",
  Component: QuestionInput,
  PropComponent,
  defaultProps: QuestionInputDefaultProps,
};

/**
 * @description survey input
 * @author Ryan
 */

import QuestionTitle from "./QuestionTitle";
import { QuestionTitleDefaultProps } from "./interface";
import PropComponent from "./PropComponent";
export * from "./interface";

export default {
  title: "title",
  type: "QuestionTitle",
  Component: QuestionTitle,
  PropComponent,
  defaultProps: QuestionTitleDefaultProps,
};

/**
 * @description survey radio
 */

import PropComponent from "./PropComponent";
import QuestionRadio from "./QuestionRadio";
import { QuestionRadioDefaultProps } from "./interface";

export * from "./interface";

export default {
  title: "QuestionRadio",
  type: "QuestionRadio",
  Component: QuestionRadio,
  PropComponent,
  defaultProps: QuestionRadioDefaultProps,
};

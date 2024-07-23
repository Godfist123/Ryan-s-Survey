import { QuestionCheckboxDefaultProps } from "./interface";
import QuestionCheckbox from "./QuestionCheckbox";
import PropComponent from "./PropComponent";
import StatComponent from "./StatComponent";
export * from "./interface";
export default {
  title: "QuestionCheckbox",
  type: "QuestionCheckbox",
  Component: QuestionCheckbox,
  PropComponent,
  defaultProps: QuestionCheckboxDefaultProps,
  StatComponent: StatComponent,
};

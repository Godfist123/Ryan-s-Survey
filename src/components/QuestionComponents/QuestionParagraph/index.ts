import QuestionParagraph from "./QuestionParagraph";
import { QuestionParagraphDefaultProps } from "./interface";
import PropComponent from "./PropComponent";

export * from "./interface";
//configs for Paragraph
export default {
  title: "paragraph",
  type: "QuestionParagraph",
  Component: QuestionParagraph,
  PropComponent,
  defaultProps: QuestionParagraphDefaultProps,
};

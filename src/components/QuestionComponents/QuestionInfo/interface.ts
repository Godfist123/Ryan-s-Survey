export type QuestionInfoPropsType = {
  title?: string;
  desc?: string;
  //for PropComponent.tsx
  onChange?: (newProps: QuestionInfoPropsType) => void;
  disabled?: boolean;
};

export const QuestionInfoDefaultProps = {
  title: "Survey Title",
  desc: "Survey Description",
};

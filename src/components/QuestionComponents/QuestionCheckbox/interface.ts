export type optionType = {
  value: string;
  text: string;
  checked: boolean;
};

export type QuestionCheckboxPropsType = {
  title?: string;
  isVertical?: boolean;
  list?: optionType[];
  onChange?: (newProps: QuestionCheckboxPropsType) => void;
  disabled?: boolean;
};

export const QuestionCheckboxDefaultProps = {
  title: "QuestionCheckbox",
  isVertical: false,
  list: [
    { value: "item1", text: "Option1", checked: false },
    { value: "item2", text: "Option2", checked: false },
    { value: "item3", text: "Option3", checked: false },
  ],
};

export type optionType = {
  value: string;
  text: string;
};

export type QuestionRadioPropsType = {
  title?: string;
  isVertical?: boolean;
  options?: optionType[];
  value?: string;
  onChange?: (newProps: QuestionRadioPropsType) => void;
  disabled?: boolean;
  stat?: Array<{
    name: string;
    count: number;
  }>;
};

export const QuestionRadioDefaultProps = {
  title: "Radio Title",
  isVertical: false,
  options: [
    {
      value: "item1",
      text: "Option1",
    },
    {
      value: "item2",
      text: "Option2",
    },
    {
      value: "item3",
      text: "Option3",
    },
  ],
  value: "",
};

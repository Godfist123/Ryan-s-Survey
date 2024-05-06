import QuestionInputConfig, { QuestionInputPropsType } from "./QuestionInput";
import QuestionParagraphConfig, {
  QuestionParagraphPropsType,
} from "./QuestionParagraph";
import QuestionTitleConfig, { QuestionTitlePropsType } from "./QuestionTitle";
import type { FC } from "react";

// unified handle component propType
export type ComponentPropsType = QuestionInputPropsType &
  QuestionTitlePropsType &
  QuestionParagraphPropsType;

// unified handle component config Type
export type ComponentConfType = {
  title: string;
  type: string;
  PropComponent: FC<ComponentPropsType>;
  Component: FC<ComponentPropsType>;
  defaultProps: ComponentPropsType;
};

const componentConfList: ComponentConfType[] = [
  QuestionInputConfig,
  QuestionTitleConfig,
  QuestionParagraphConfig,
];

export const componentConfGroup = [
  {
    groupId: "textGroup",
    groupname: "Text",
    components: [QuestionTitleConfig, QuestionParagraphConfig],
  },
  {
    groupId: "inputGroup",
    groupname: "Input",
    components: [QuestionInputConfig],
  },
];

export const getComponentConfByType = (type: string) => {
  return componentConfList.find((item) => item.type === type);
};

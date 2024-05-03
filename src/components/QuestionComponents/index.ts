import QuestionInputConfig, { QuestionInputPropsType } from "./QuestionInput";
import QuestionTitleConfig, { QuestionTitlePropsType } from "./QuestionTitle";
import type { FC } from "react";

// unified process component propType
export type ComponentPropsType = QuestionInputPropsType &
  QuestionTitlePropsType;

// unified process component config Type
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
];

export const componentConfGroup = [
  {
    groupId: "textGroup",
    groupname: "Text",
    components: [QuestionTitleConfig],
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

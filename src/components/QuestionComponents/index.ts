import QuestionInputConfig, { QuestionInputPropsType } from "./QuestionInput";
import QuestionParagraphConfig, {
  QuestionParagraphPropsType,
} from "./QuestionParagraph";
import QuestionTitleConfig, { QuestionTitlePropsType } from "./QuestionTitle";
import QuestionInfoConfig, { QuestionInfoPropsType } from "./QuestionInfo";
import QuestionTextareaConfig, {
  QuestionTextareaPropsType,
} from "./QuestionTextarea";
import QuestionRadioConfig, { QuestionRadioPropsType } from "./QuestionRadio";
import QuestionCheckboxConfig, {
  QuestionCheckboxPropsType,
} from "./QuestionCheckbox";
import type { FC } from "react";

// unified handle component propType
export type ComponentPropsType = QuestionInputPropsType &
  QuestionTitlePropsType &
  QuestionParagraphPropsType &
  QuestionInfoPropsType &
  QuestionTextareaPropsType &
  QuestionRadioPropsType &
  QuestionCheckboxPropsType;

// unified handle component config Type
export type ComponentConfType = {
  title: string;
  type: string;
  PropComponent: FC<ComponentPropsType>;
  Component: FC<ComponentPropsType>;
  defaultProps: ComponentPropsType;
  StatComponent?: FC<ComponentPropsType>;
};

const componentConfList: ComponentConfType[] = [
  QuestionInputConfig,
  QuestionTitleConfig,
  QuestionParagraphConfig,
  QuestionInfoConfig,
  QuestionTextareaConfig,
  QuestionRadioConfig,
  QuestionCheckboxConfig,
];

export const componentConfGroup = [
  {
    groupId: "textGroup",
    groupname: "Text Display",
    components: [
      QuestionTitleConfig,
      QuestionParagraphConfig,
      QuestionInfoConfig,
    ],
  },
  {
    groupId: "inputGroup",
    groupname: "Input",
    components: [QuestionInputConfig, QuestionTextareaConfig],
  },
  {
    groupId: "selectionGroup",
    groupname: "Selection",
    components: [QuestionRadioConfig, QuestionCheckboxConfig],
  },
];

export const getComponentConfByType = (type: string) => {
  return componentConfList.find((item) => item.type === type);
};

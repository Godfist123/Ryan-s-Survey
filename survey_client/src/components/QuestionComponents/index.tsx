import QuestionInfo from "./QuestionInfo";
import QuestionInput from "./QuestionInput";
import QuestionParagraph from "./QuestionParagraph";
import QuestionRadio from "./QuestionRadio";
import QuestionTitle from "./QuestionTitle";

type ComponentInfoType = {
  fe_id: string;
  type: string;
  //title: string;
  isHidden: boolean;
  props: any;
};

export const getComponent = (comp: ComponentInfoType) => {
  const { fe_id, type, props = {}, isHidden } = comp;
  if (isHidden) {
    return null;
  }

  if (type === "QuestionInput") {
    return <QuestionInput fe_id={fe_id} props={props} />;
  }

  if (type === "QuestionRadio") {
    return <QuestionRadio fe_id={fe_id} props={props} />;
  }

  if (type === "QuestionTitle") {
    return <QuestionTitle {...props} />;
  }

  if (type === "QuestionParagraph") {
    return <QuestionParagraph {...props} />;
  }

  if (type === "QuestionInfo") {
    return <QuestionInfo {...props} />;
  }
  return null;
};

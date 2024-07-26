import React from "react";
import styles from "./QuestionTextarea.module.scss";

interface QuestionTextareaProps {
  fe_id: string;
  props: {
    title: string;
    placeholder?: string;
  };
}

const QuestionTextarea: React.FC<QuestionTextareaProps> = ({
  fe_id,
  props,
}) => {
  const { title, placeholder = "" } = props;
  return (
    <>
      <p>{title}</p>
      <div className={styles.textAreaWrapper}>
        <textarea rows={5} name={fe_id} placeholder={placeholder} />
      </div>
    </>
  );
};

export default QuestionTextarea;

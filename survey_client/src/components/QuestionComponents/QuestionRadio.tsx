import React from "react";
import styles from "./QuestionRadio.module.scss";

interface QuestionRadioProps {
  fe_id: string;
  props: {
    title: string;
    options: Array<{
      value: string;
      text: string;
    }>;
    value: string;
    isVertical: boolean;
  };
}

const QuestionRadio: React.FC<QuestionRadioProps> = ({ fe_id, props }) => {
  const { title, options, value, isVertical } = props;
  return (
    <div>
      <p>{title}</p>
      <ul className={styles.list}>
        {options.map((option) => {
          let liClassName = "";
          if (isVertical) {
            liClassName = styles.verticalItem;
          } else {
            liClassName = styles.horizontalItem;
          }
          return (
            <li key={option.value} className={liClassName}>
              <label>
                <input
                  type="radio"
                  name={fe_id}
                  value={option.value}
                  defaultChecked={value === option.value}
                />
                {option.text}
              </label>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default QuestionRadio;

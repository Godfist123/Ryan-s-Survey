import React, { useEffect } from "react";
import styles from "./QuestionCheckbox.module.scss";

interface QuestionCheckboxProps {
  fe_id: string;
  props: {
    title: string;
    isVertical?: boolean;
    list: Array<{
      value: string;
      text: string;
      checked: boolean;
    }>;
  };
}

const QuestionCheckbox: React.FC<QuestionCheckboxProps> = ({
  fe_id,
  props,
}) => {
  const { title, isVertical, list } = props;

  const [checkedList, setCheckedList] = React.useState<Array<string>>([]);

  useEffect(() => {
    list.map((item) => {
      const newCheckedList = list
        .filter((item) => item.checked)
        .map((item) => item.value);
      setCheckedList(newCheckedList);
    });
  }, [list]);

  const toggleCheckbox = (value: string) => {
    if (checkedList.includes(value)) {
      setCheckedList(checkedList.filter((item) => item !== value));
    } else {
      setCheckedList([...checkedList, value]);
    }
  };

  return (
    <>
      <p>{title}</p>
      <input type="hidden" name={fe_id} value={checkedList.join(",")} />
      <ul className={styles.list}>
        {list.map((item, index) => {
          const { value, text, checked } = item;

          let className;
          if (isVertical) {
            className = styles.verticalItem;
          } else {
            className = styles.horizontalItem;
          }
          return (
            <li key={value} className={className}>
              <label>
                <input
                  type="checkbox"
                  onChange={() => toggleCheckbox(value)}
                  checked={checkedList.includes(value)}
                />
                {text}
              </label>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default QuestionCheckbox;

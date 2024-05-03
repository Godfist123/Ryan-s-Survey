import React from "react";
import {
  ComponentConfType,
  componentConfGroup,
} from "../../../components/QuestionComponents";
import { Typography } from "antd";
import styles from "./ComponentLib.module.scss";
import { useDispatch } from "react-redux";
import { addComponent } from "../../../store/componentSlice";
import { nanoid } from "@reduxjs/toolkit";

interface ComponentLibProps {
  // Define your props here
}
const { Title } = Typography;

const ComponentLib: React.FC<ComponentLibProps> = (props) => {
  const dispatch = useDispatch();

  const generateComponent = (item: ComponentConfType) => {
    const { title, type, defaultProps } = item;
    const handleClick = () => {
      dispatch(
        addComponent({
          title,
          fe_id: nanoid(),
          type,
          props: defaultProps,
        })
      );
    };

    return (
      <div
        key={type}
        className={styles.wrapper}
        onClick={() => {
          handleClick();
        }}
      >
        <div className={styles.component}>
          <item.Component />
        </div>
      </div>
    );
  };

  return (
    <div>
      {componentConfGroup.map((item, index) => {
        return (
          <div key={item.groupId}>
            <Title
              level={3}
              style={{
                fontSize: "16px",
                marginTop: index === 0 ? "0" : "20px",
              }}
            >
              {item.groupname}
            </Title>
            <div>{item.components.map((item) => generateComponent(item))}</div>
          </div>
        );
      })}
    </div>
  );
};

export default ComponentLib;

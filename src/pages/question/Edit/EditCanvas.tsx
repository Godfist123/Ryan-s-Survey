import React from "react";
import styles from "./EditCanvas.module.scss";
import QuestionTitle from "../../../components/QuestionComponents/QuestionTitle/QuestionTitle";
import QuestionInput from "../../../components/QuestionComponents/QuestionInput/QuestionInput";
import { Spin } from "antd";
import classNames from "classnames";
import useGetComponentInfo from "../../../hooks/useGetComponentInfo";
import { MouseEvent } from "react";
import {
  ComponentInfoType,
  changeSelectedId,
} from "../../../store/componentSlice";
import { getComponentConfByType } from "../../../components/QuestionComponents";
import { useDispatch } from "react-redux";
interface EditCanvasProps {
  loading: boolean;
}

function generateComponent(ComponentInfo: ComponentInfoType) {
  const { type, props } = ComponentInfo;
  const componentConf = getComponentConfByType(type);
  if (componentConf == null) return null;
  const { Component } = componentConf;
  return <Component {...props} />;
}

const EditCanvas: React.FC<EditCanvasProps> = ({ loading }) => {
  const dispatch = useDispatch();
  const { componentList, selectedId } = useGetComponentInfo();

  const handleClick = (event: MouseEvent, id: string) => {
    event.stopPropagation();
    dispatch(changeSelectedId(id));
  };

  if (loading) {
    return (
      <div style={{ textAlign: "center", marginTop: "24px" }}>
        <Spin />
      </div>
    );
  } else {
    return (
      <div className={styles.canvas}>
        {componentList.map((item) => {
          const { fe_id } = item;

          // const wrapperDefaultClassName = styles["component-wrapper"];
          // const selectedClassName = styles.selected;
          // const wrapperClassName = classNames({
          //   [wrapperDefaultClassName]: true,
          //   [selectedClassName]: fe_id === selectedId,
          // });

          return (
            <div
              key={fe_id}
              className={
                selectedId === fe_id
                  ? `${styles["component-wrapper"]} ${styles.selected}`
                  : styles["component-wrapper"]
              }
              onClick={(event) => {
                handleClick(event, fe_id);
              }}
            >
              <div className={styles.blockEvents}>
                {generateComponent(item)}
              </div>
            </div>
          );
        })}
        {/* <div className={styles["component-wrapper"]}>
          <div className={styles.blockEvents}>
            <QuestionTitle />
          </div>
        </div>
        <div className={styles["component-wrapper"]}>
          <div className={styles.blockEvents}>
            <QuestionInput />
          </div>
        </div> */}
      </div>
    );
  }
};

export default EditCanvas;

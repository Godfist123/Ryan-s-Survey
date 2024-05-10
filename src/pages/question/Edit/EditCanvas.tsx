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
  moveComponent,
} from "../../../store/componentSlice";
import { getComponentConfByType } from "../../../components/QuestionComponents";
import { useDispatch } from "react-redux";
import useBindCanvasPress from "../../../hooks/useBindCanvasKeyPress";
import SortableContainer from "../../../components/DragSortable/SortableContainer";
import SortableItem from "../../../components/DragSortable/SortableItem";
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
  useBindCanvasPress();

  const handleClick = (event: MouseEvent, id: string) => {
    event.stopPropagation();
    dispatch(changeSelectedId(id));
  };

  const generateClass = (
    id: string,
    selectedId: string,
    item: ComponentInfoType
  ) => {
    let className = styles["component-wrapper"];
    if (id === selectedId) {
      className = className.concat(` ${styles.selected}`);
    }
    if (item.isLocked) {
      className = className.concat(` ${styles.locked}`);
    }
    return className;
  };

  const listWithId = componentList.map((item) => {
    return { ...item, id: item.fe_id };
  });

  const handleDragEnd = (oldIndex: number, newIndex: number) => {
    dispatch(moveComponent({ oldIndex, newIndex }));
  };

  if (loading) {
    return (
      <div style={{ textAlign: "center", marginTop: "24px" }}>
        <Spin />
      </div>
    );
  } else {
    return (
      <SortableContainer items={listWithId} onDragEnd={handleDragEnd}>
        <div className={styles.canvas}>
          {componentList
            .filter((item) => {
              return item.isHidden !== true;
            })
            .map((item) => {
              const { fe_id } = item;

              // const wrapperDefaultClassName = styles["component-wrapper"];
              // const selectedClassName = styles.selected;
              // const wrapperClassName = classNames({
              //   [wrapperDefaultClassName]: true,
              //   [selectedClassName]: fe_id === selectedId,
              // });

              return (
                <SortableItem key={fe_id} id={fe_id}>
                  <div
                    className={generateClass(fe_id, selectedId, item)}
                    onClick={(event) => {
                      handleClick(event, fe_id);
                    }}
                  >
                    <div className={styles.blockEvents}>
                      {generateComponent(item)}
                    </div>
                  </div>
                </SortableItem>
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
      </SortableContainer>
    );
  }
};

export default EditCanvas;

import React from "react";
import useLoadQuestionData from "../../../hooks/useLoadQuestionData";
import styles from "./index.module.scss";
import EditCanvas from "./EditCanvas";
import { useDispatch } from "react-redux";
import { changeSelectedId } from "../../../store/componentSlice";
import LeftPanel from "./LeftPanel";
import RightPanel from "./RightPanel";
import EditHeader from "./EditHeader";

interface EditProps {
  // Define your props here
}

const Edit: React.FC<EditProps> = (props) => {
  const { loading } = useLoadQuestionData();
  const dispatch = useDispatch();
  const clearSelectId = () => {
    dispatch(changeSelectedId(""));
  };

  return (
    <div className={styles.container}>
      <div>
        <EditHeader />
      </div>
      <div className={styles["content-wrapper"]}>
        <div className={styles.content}>
          <div className={styles.left}>
            <LeftPanel />
          </div>
          <div
            className={styles.main}
            onClick={() => {
              clearSelectId();
            }}
          >
            <div className={styles["canvas-wrapper"]}>
              <EditCanvas loading={loading} />
            </div>
          </div>
          <div className={styles.right}>
            <RightPanel />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Edit;

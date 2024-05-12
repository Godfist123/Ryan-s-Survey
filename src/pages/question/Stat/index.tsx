import React from "react";
import useLoadQuestionData from "../../../hooks/useLoadQuestionData";
import { Spin, Result, Button } from "antd";
import useGetPageInfo from "../../../hooks/useGetPageInfo";
import { useNavigate } from "react-router-dom";
import { useTitle } from "ahooks";
import styles from "./index.module.scss";

interface StatProps {
  // Define your props here
}

const Stat: React.FC<StatProps> = (props) => {
  const { loading } = useLoadQuestionData();
  const { title, isPublished } = useGetPageInfo();
  const Navi = useNavigate();
  useTitle(`Statistics - ${title}`);

  const generateContent = () => {
    if (!isPublished) {
      return (
        <div style={{ flex: "1" }}>
          <Result
            status="warning"
            title="Sorry, the survey you visited hasn't published yet."
            extra={
              <Button
                onClick={() => {
                  Navi(-1);
                }}
                type="primary"
              >
                Back
              </Button>
            }
          />
        </div>
      );
    }
    return (
      <>
        <div className={styles.left}>left</div>
        <div className={styles.main}>mid</div>
        <div className={styles.right}>right</div>
      </>
    );
  };

  const LoadingElem = (
    <div style={{ textAlign: "center", marginTop: "27px" }}>
      <Spin />
    </div>
  );

  return (
    <div className={styles.container}>
      <div>Header</div>
      <div className={styles["content-wrapper"]}>
        {loading && LoadingElem}
        {!loading && <div className={styles.content}>{generateContent()}</div>}
      </div>
    </div>
  );
};

export default Stat;

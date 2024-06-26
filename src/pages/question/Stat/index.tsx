import React, { useState } from "react";
import useLoadQuestionData from "../../../hooks/useLoadQuestionData";
import { Spin, Result, Button } from "antd";
import useGetPageInfo from "../../../hooks/useGetPageInfo";
import { useNavigate } from "react-router-dom";
import { useTitle } from "ahooks";
import styles from "./index.module.scss";
import StatHeader from "./StatHeader";
import ComponentList from "./ComponentList";
import PageStat from "./PageStat";
import ChartStat from "./ChartStat";

interface StatProps {
  // Define your props here
}

const Stat: React.FC<StatProps> = (props) => {
  const [selectedComponentId, setSelectedComponentId] = useState("");
  const [selectedComponentType, setSelectedComponentType] = useState("");

  const { loading } = useLoadQuestionData();
  const { title, isPublished } = useGetPageInfo();
  const Navi = useNavigate();
  useTitle(`Statistics - ${title}`);

  const generateContent = () => {
    if (typeof isPublished === "boolean" && !isPublished) {
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
        <div className={styles.left}>
          <ComponentList
            selectedId={selectedComponentId}
            setSelectedComponentId={setSelectedComponentId}
            setSelectedComponentType={setSelectedComponentType}
          />
        </div>
        <div className={styles.main}>
          <PageStat
            selectedId={selectedComponentId}
            setSelectedComponentId={setSelectedComponentId}
            setSelectedComponentType={setSelectedComponentType}
          />
        </div>
        <div className={styles.right}>
          <ChartStat
            selectedId={selectedComponentId}
            selectedComponentType={selectedComponentType}
          />
        </div>
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
      <div>
        <StatHeader />
      </div>
      <div className={styles["content-wrapper"]}>
        {loading && LoadingElem}
        {!loading && <div className={styles.content}>{generateContent()}</div>}
      </div>
    </div>
  );
};

export default Stat;

import React, { useState } from "react";
import QuestionCard from "../../components/QuestionCard";
import ListPage from "../../components/ListPage";
import styles from "./Common.module.scss";
import ListSearch from "../../components/ListSearch";
import useLoadQuestionListData from "../../hooks/useLoadQuestionListData";
import { Empty, Typography, Spin, Pagination } from "antd";
const { Title } = Typography;

interface StarProps {
  // Define your props here
}

const Star: React.FC<StarProps> = (props) => {
  const { data = {}, loading } = useLoadQuestionListData();
  const { list = {}, total = 0 } = data;
  return (
    <div>
      <div className={styles.header}>
        <div className={styles.left}>
          <Title level={3}>Saved Survey</Title>
        </div>
        <div className={styles.right}>
          <ListSearch />
        </div>
      </div>
      <div className={styles.content}>
        {loading && (
          <div className={styles.loading}>
            <Spin />
          </div>
        )}
        {!loading && list.length === 0 && <Empty description="No Data" />}
        {list.length > 0 &&
          list.map((item: any) => {
            const id = item._id;
            return <QuestionCard key={id} {...item} />;
          })}
      </div>
      <div className={styles.footer}>
        {!loading && <ListPage total={total} />}
      </div>
    </div>
  );
};

export default Star;

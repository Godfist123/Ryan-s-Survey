import React, { useState } from "react";
import styles from "./Common.module.scss";
import ListPage from "../../components/ListPage";
import ListSearch from "../../components/ListSearch";
import {
  Empty,
  Typography,
  Table,
  Tag,
  Space,
  Button,
  Modal,
  Spin,
  message,
} from "antd";
import { title } from "process";
import { render } from "@testing-library/react";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import useLoadQuestionListData from "../../hooks/useLoadQuestionListData";
import { useRequest } from "ahooks";
import {
  deleteQuestionsService,
  updateQuestionService,
} from "../../services/question";

const { Title } = Typography;
const { confirm } = Modal;

interface TrashProps {
  // Define your props here
}

const Trash: React.FC<TrashProps> = (props) => {
  const { data = {}, loading, refresh } = useLoadQuestionListData();
  const { list = {}, total = 0 } = data;

  //record selected ids
  const [selectedIds, setSelectedIds] = useState<string[]>([]);

  //recover
  const { run: recover } = useRequest(
    async () => {
      for await (const item of selectedIds) {
        await updateQuestionService(item, { isDeleted: false });
      }
    },
    {
      manual: true,
      debounceWait: 500,
      onSuccess() {
        message.success("Recover Successful");
        //manual refresh
        refresh();
        setSelectedIds([]);
      },
    }
  );
  //delete
  const { run: deleteQuestions } = useRequest(
    async () => await deleteQuestionsService(selectedIds),
    {
      manual: true,
      onSuccess() {
        message.success("Delete Successful");
        refresh();
        setSelectedIds([]);
      },
    }
  );

  const tableColumns = [
    {
      title: "Title",
      dataIndex: "title",
    },
    {
      title: "IsPublished",
      dataIndex: "isPublished",
      render: (isPublished: boolean) => {
        return isPublished ? (
          <Tag color="processing">Published</Tag>
        ) : (
          <Tag>Haven't Published</Tag>
        );
      },
    },
    {
      title: "Answer Count",
      dataIndex: "answerCount",
    },
    {
      title: "Create Time",
      dataIndex: "CreateTime",
    },
  ];
  const del = () => {
    confirm({
      title: "Delete this survey?",
      icon: <ExclamationCircleOutlined />,
      onOk: deleteQuestions,
    });
  };

  const tableElement = (
    <>
      <div style={{ marginBottom: "16px" }}>
        <Space>
          <Button
            type="primary"
            disabled={selectedIds.length === 0 ? true : false}
            onClick={recover}
          >
            Recover
          </Button>

          <Button
            danger
            disabled={selectedIds.length === 0 ? true : false}
            onClick={() => {
              del();
            }}
          >
            Delete
          </Button>
        </Space>
      </div>
      <Table
        dataSource={list}
        columns={tableColumns}
        pagination={false}
        rowKey={(q) => q._id}
        rowSelection={{
          type: "checkbox",
          onChange: (selectedRowKeys) => {
            setSelectedIds(selectedRowKeys as string[]);
          },
        }}
      />
    </>
  );

  return (
    <div>
      <div className={styles.header}>
        <div className={styles.left}>
          <Title level={3}>Bin</Title>
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
        {list.length > 0 && tableElement}
      </div>
      <div className={styles.footer}>
        {!loading && <ListPage total={total} />}
      </div>
    </div>
  );
};

export default Trash;

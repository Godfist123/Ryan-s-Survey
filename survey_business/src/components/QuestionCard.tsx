import React, { useState } from "react";
import { Button, Divider, Popconfirm, Space, Tag, message } from "antd";
import {
  CopyOutlined,
  DeleteOutlined,
  EditOutlined,
  LineChartOutlined,
  StarOutlined,
} from "@ant-design/icons";
import styles from "./QuestionCard.module.scss";
import { spawn } from "child_process";
import { Link, useNavigate } from "react-router-dom";
import { useRequest } from "ahooks";
import {
  duplicateQuestionService,
  updateQuestionService,
} from "../services/question";

interface QuestionCardProps {
  _id: string;
  title: string;
  isPublished: boolean;
  isStar: boolean;
  answerCount: number;
  CreateTime: string;
}

const QuestionCard: React.FC<QuestionCardProps> = ({
  _id,
  title,
  isPublished,
  isStar,
  answerCount,
  CreateTime,
}) => {
  const Navi = useNavigate();
  const [starState, setStarState] = useState(isStar);

  //copy survey
  const { loading: changeDuplicateLoading, run: changeDupcliate } = useRequest(
    async () => {
      const data = await duplicateQuestionService(_id);
      return data;
    },
    {
      manual: true,
      onSuccess(resp) {
        message.success("Copy Successful");
        Navi(`/question/edit/${resp.id || resp._id}`);
      },
    }
  );

  //star update
  const { loading: changeStarLoading, run: changeStar } = useRequest(
    async () => {
      const data = await updateQuestionService(_id, { isStar: !starState });
      return data;
    },
    {
      manual: true,
      onSuccess() {
        setStarState(!starState);
        message.success("Update Successful");
      },
    }
  );

  //delete survey
  const [deleteState, setDeletestate] = useState(false);
  const { run: _delete, loading: changeDeleteLoading } = useRequest(
    () => {
      const data = updateQuestionService(_id, { isDeleted: true });
      return data;
    },
    {
      manual: true,
      onSuccess() {
        message.success("Delete Successful");
        setDeletestate(true);
      },
    }
  );
  if (deleteState) return null;
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <div className={styles.left}>
          <Link
            to={isPublished ? `/question/stat/${_id}` : `/question/edit/${_id}`}
          >
            <Space>
              {starState && <StarOutlined style={{ color: "red" }} />}
              {title}
            </Space>
          </Link>
        </div>
        <div className={styles.right}>
          <Space>
            <span>{CreateTime}</span>
            <span>AnswerCount : {answerCount}</span>
            {isPublished ? (
              <Tag color="processing">Published</Tag>
            ) : (
              <Tag>Haven't Published</Tag>
            )}
          </Space>
        </div>
      </div>
      <Divider style={{ margin: "12px 0" }} />
      <div className={styles["button-Container"]}>
        <div className={styles.left}>
          <Space>
            <Button
              icon={<EditOutlined />}
              type="text"
              size="small"
              onClick={() => {
                Navi(`/question/edit/${_id}`);
              }}
            >
              edit
            </Button>
            <Button
              icon={<LineChartOutlined />}
              type="text"
              size="small"
              onClick={() => {
                Navi(`/question/stat/${_id}`);
              }}
              disabled={isPublished ? false : true}
            >
              Statistics
            </Button>
          </Space>
        </div>
        <div className={styles.right}>
          <Space>
            <Button
              icon={<StarOutlined />}
              type="text"
              size="small"
              onClick={changeStar}
              disabled={changeStarLoading}
            >
              {starState ? "Cancel Star" : "Star"}
            </Button>
            <Popconfirm
              title="Copy this Survey?"
              okText="Yes"
              cancelText="Cancel"
              onConfirm={changeDupcliate}
            >
              <Button
                icon={<CopyOutlined />}
                type="text"
                size="small"
                disabled={changeDuplicateLoading}
              >
                Copy
              </Button>
            </Popconfirm>
            <Popconfirm
              title="Delete this survey?"
              okText="Yes"
              cancelText="Cancel"
              onConfirm={_delete}
            >
              <Button
                icon={<DeleteOutlined />}
                type="text"
                size="small"
                disabled={changeDeleteLoading}
              >
                Delete
              </Button>
            </Popconfirm>
          </Space>
        </div>
      </div>
    </div>
  );
};

export default QuestionCard;

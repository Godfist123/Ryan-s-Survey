import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import styles from "./ManageLayout.module.scss";
import { Button, Flex, Divider, message } from "antd";
import { useNavigate, useLocation } from "react-router-dom";
import {
  PlusCircleOutlined,
  BarsOutlined,
  StarOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import { createQuestionService } from "../services/question";
import { useRequest } from "ahooks";

interface ManageLayoutProps {
  // Define your props here
}

const ManageLayout: React.FC<ManageLayoutProps> = (props) => {
  const navi = useNavigate();
  const { pathname } = useLocation();

  // const [loading, setLoading] = useState(false);
  // async function handleCreateClick() {
  //   setLoading(true);
  //   const data = await createQuestionService();
  //   const { id } = data || {};
  //   if (id) {
  //     navi(`/question/edit/${id}`);
  //     message.success("Creation Successful");
  //   }
  //   setLoading(false);
  // }

  const {
    loading,

    run: handleCreateClick,
  } = useRequest(createQuestionService, {
    manual: true,
    onSuccess(resp) {
      navi(`/question/edit/${resp.id || resp._id}`);
      message.success("Creation Successful");
    },
  });

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <Flex gap="small" wrap="wrap">
          <Button
            type={"primary"}
            icon={<PlusCircleOutlined />}
            size="large"
            onClick={handleCreateClick}
            disabled={loading}
          >
            Create Survey
          </Button>
          <Divider style={{ margin: "12px 0" }} />
          <Button
            type={pathname.includes("list") ? "default" : "text"}
            icon={<BarsOutlined />}
            size="large"
            onClick={() => {
              navi("/manage/list");
            }}
          >
            My Survey
          </Button>
          <Button
            type={pathname.includes("star") ? "default" : "text"}
            icon={<StarOutlined />}
            size="large"
            onClick={() => {
              navi("/manage/star");
            }}
          >
            Saved Survey
          </Button>
          <Button
            type={pathname.includes("trash") ? "default" : "text"}
            icon={<DeleteOutlined />}
            size="large"
            onClick={() => {
              navi("/manage/trash");
            }}
          >
            Deleted Survey
          </Button>
        </Flex>
      </div>
      <div className={styles.right}>
        <Outlet />
      </div>
    </div>
  );
};

export default ManageLayout;

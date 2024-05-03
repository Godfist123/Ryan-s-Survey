import React from "react";
import styles from "./EditHeader.module.scss";
import { Button, Space, Typography } from "antd";
import { LeftOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import EditToolbar from "./EditToolbar";
interface EditHeaderProps {
  // Define your props here
}
const { Title } = Typography;

const EditHeader: React.FC<EditHeaderProps> = (props) => {
  const Navi = useNavigate();
  return (
    <div className={styles["header-wrapper"]}>
      <div className={styles.header}>
        <div className={styles.left}>
          <Space>
            <Button
              type="link"
              icon={<LeftOutlined />}
              onClick={() => {
                Navi(-1);
              }}
            >
              Back
            </Button>
            <Title>title</Title>
          </Space>
        </div>

        <div className={styles.main}>
          <EditToolbar />
        </div>
        <div className={styles.right}>
          <Space>
            <Button>Save</Button>
            <Button type="primary">Publish</Button>
          </Space>
        </div>
      </div>
    </div>
  );
};

export default EditHeader;

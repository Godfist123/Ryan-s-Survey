import React, { useRef } from "react";
import styles from "./StatHeader.module.scss";
import { useNavigate, useParams } from "react-router-dom";
import {
  Space,
  Button,
  Typography,
  Input,
  Tooltip,
  InputRef,
  message,
  Popover,
} from "antd";
import { CopyOutlined, LeftOutlined, QrcodeOutlined } from "@ant-design/icons";
import useGetPageInfo from "../../../hooks/useGetPageInfo";
import QRCode from "qrcode.react";

interface StatHeaderProps {
  // Define your props here
}

const StatHeader: React.FC<StatHeaderProps> = (props) => {
  const Navi = useNavigate();
  const { Title } = Typography;
  const { title, isPublished } = useGetPageInfo();
  const { id } = useParams();
  const urlInputRef = useRef<InputRef>(null);

  const copy = () => {
    const elem = urlInputRef.current;
    if (elem == null) return;
    elem.select();
    document.execCommand("copy");
    message.success("Copy Successful");
  };

  const generateLinkAndQRCode = () => {
    if (!isPublished) return null;
    const url = `http://localhost:3000/question/${id}`;
    const QRCodeElem = (
      <div style={{ textAlign: "center" }}>
        <QRCode value={url} size={100}></QRCode>
      </div>
    );

    return (
      <Space>
        <Input value={url} style={{ width: "300px" }} ref={urlInputRef} />
        <Tooltip title="Copy Link">
          <Button icon={<CopyOutlined />} onClick={copy}></Button>
        </Tooltip>
        <Popover content={QRCodeElem}>
          <Button icon={<QrcodeOutlined />}></Button>
        </Popover>
      </Space>
    );
  };

  return (
    <div className={styles["header-wrapper"]}>
      <div className={styles.header}>
        <div className={styles.left}>
          <Space>
            <Button
              type="link"
              icon={<LeftOutlined />}
              onClick={() => Navi(-1)}
            >
              Back
            </Button>
            <Title>{title}</Title>
          </Space>
        </div>
        <div className={styles.main}>{generateLinkAndQRCode()}</div>
        <div className={styles.right}>
          <Button
            type="primary"
            onClick={() => {
              Navi(`/question/edit/${id}`);
            }}
          >
            Edit
          </Button>
        </div>
      </div>
    </div>
  );
};

export default StatHeader;

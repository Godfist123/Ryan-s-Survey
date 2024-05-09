import React, { ChangeEvent, useEffect, useState } from "react";
import styles from "./EditHeader.module.scss";
import { Button, Input, Space, Typography } from "antd";
import { EditOutlined, LeftOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import EditToolbar from "./EditToolbar";
import useGetPageInfo from "../../../hooks/useGetPageInfo";
import { useDispatch } from "react-redux";
import { setTitle } from "../../../store/pageinfoSlice";
import { changeSelectedId } from "../../../store/componentSlice";
interface EditHeaderProps {
  // Define your props here
}
const { Title } = Typography;
const TitleElem: React.FC = () => {
  const pageInfo = useGetPageInfo();
  const [flag, setFlag] = useState(false);
  const dispatch = useDispatch();

  const handleButtonClick = () => {
    setFlag(true);
    dispatch(changeSelectedId(""));
  };
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newTitle = e.target.value;
    dispatch(setTitle({ title: newTitle }));
  };

  useEffect(() => {});

  return (
    <>
      {flag && (
        <Input
          value={pageInfo.title}
          onChange={(e) => {
            handleInputChange(e);
          }}
          onPressEnter={() => setFlag(false)}
          onBlur={() => setFlag(false)}
        />
      )}
      {!flag && (
        <Space>
          <Title>{pageInfo.title}</Title>{" "}
          <Button
            type="text"
            icon={<EditOutlined />}
            onClick={handleButtonClick}
          ></Button>
        </Space>
      )}
    </>
  );
};

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
            <TitleElem />
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

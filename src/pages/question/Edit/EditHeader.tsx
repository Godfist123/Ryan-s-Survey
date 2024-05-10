import React, { ChangeEvent, useEffect, useState } from "react";
import styles from "./EditHeader.module.scss";
import { Button, Input, Space, Typography, message } from "antd";
import { EditOutlined, LeftOutlined, LoadingOutlined } from "@ant-design/icons";
import { useNavigate, useParams } from "react-router-dom";
import EditToolbar from "./EditToolbar";
import useGetPageInfo from "../../../hooks/useGetPageInfo";
import { useDispatch } from "react-redux";
import { setTitle } from "../../../store/pageinfoSlice";
import { changeSelectedId } from "../../../store/componentSlice";
import useGetComponentInfo from "../../../hooks/useGetComponentInfo";
import { useDebounceEffect, useKeyPress, useRequest } from "ahooks";
import { updateQuestionService } from "../../../services/question";
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

const SaveBtn: React.FC = () => {
  const pageInfo = useGetPageInfo();
  const { id } = useParams();
  const { componentList } = useGetComponentInfo();

  const load = async () => {
    if (!id) return;
    await updateQuestionService(id, { ...pageInfo, componentList });
  };

  const { run, loading } = useRequest(load, { manual: true });

  useKeyPress(["ctrl.s", "meta.s"], (event: KeyboardEvent) => {
    event.preventDefault();
    if (loading) return;
    run();
  });

  useDebounceEffect(
    () => {
      run();
    },
    [pageInfo, componentList],
    {
      wait: 1000,
    }
  );
  return (
    <Button
      onClick={run}
      disabled={loading}
      icon={loading ? <LoadingOutlined /> : null}
    >
      Save
    </Button>
  );
};

const PublishBtn: React.FC = () => {
  const Navi = useNavigate();
  const pageInfo = useGetPageInfo();
  const { id } = useParams();
  const { componentList } = useGetComponentInfo();

  const load = async () => {
    if (!id) return;
    await updateQuestionService(id, {
      ...pageInfo,
      componentList,
      isPublished: true,
    });
  };

  const { run, loading } = useRequest(load, {
    manual: true,
    onSuccess: () => {
      message.success("Successfully Published");
      Navi(`/question/stat/${id}`);
    },
  });
  return (
    <Button type="primary" onClick={run} disabled={loading}>
      Publish
    </Button>
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
            <SaveBtn />
            <PublishBtn />
          </Space>
        </div>
      </div>
    </div>
  );
};

export default EditHeader;

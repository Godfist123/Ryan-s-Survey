import React, { FC, useState, ChangeEvent } from "react";
import { message, Input, Button, Space } from "antd";
import { useDispatch } from "react-redux";
import useGetComponentInfo from "../../../hooks/useGetComponentInfo";
import { modifyTitle } from "../../../store/componentSlice";
import { changeSelectedId } from "../../../store/componentSlice";
import styles from "./Layer.module.scss";
import { EyeInvisibleOutlined, LockOutlined } from "@ant-design/icons";

const Layers: FC = () => {
  const { componentList, selectedId } = useGetComponentInfo();
  const [changeingTitleId, setChangingTitleId] = useState("");
  const dispatch = useDispatch();

  const handleTitleClick = (fe_id: string) => {
    const curComp = componentList.find((c) => c.fe_id === fe_id);
    if (curComp && curComp.isHidden) {
      message.info("Can't select forbidden component");
      return;
    }
    if (fe_id !== selectedId) {
      dispatch(changeSelectedId(fe_id));
      setChangingTitleId("");
      return;
    }
    setChangingTitleId(fe_id);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>, id: string) => {
    const newTitle = event.target.value.trim();
    dispatch(modifyTitle({ id, newTitle }));
  };

  const generateClass = (id: string, selectedId: string) => {
    let className = styles.title;
    if (id === selectedId) {
      className = className.concat(` ${styles.selected}`);
    }
    return className;
  };

  return (
    <>
      {componentList.map((c) => {
        const { fe_id, title, isHidden, isLocked } = c;

        return (
          <div key={fe_id} className={styles.wrapper}>
            <div
              className={generateClass(fe_id, selectedId)}
              onClick={() => handleTitleClick(fe_id)}
            >
              {changeingTitleId === fe_id ? (
                <Input
                  value={title}
                  onPressEnter={() => setChangingTitleId("")}
                  onBlur={() => setChangingTitleId("")}
                  onChange={(e) => handleChange(e, fe_id)}
                />
              ) : (
                title
              )}
            </div>
            <div className={styles.handler}>
              <Space>
                <Button
                  size="small"
                  shape="circle"
                  className={!isHidden ? styles.btn : ""}
                  icon={<EyeInvisibleOutlined />}
                  type={isHidden ? "primary" : "text"}
                />
                <Button
                  size="small"
                  shape="circle"
                  className={!isHidden ? styles.btn : ""}
                  icon={<LockOutlined />}
                  type={isHidden ? "primary" : "text"}
                />
              </Space>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Layers;

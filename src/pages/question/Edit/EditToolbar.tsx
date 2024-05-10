import {
  BlockOutlined,
  CopyOutlined,
  DeleteOutlined,
  DownCircleOutlined,
  EyeInvisibleOutlined,
  LockOutlined,
  UpCircleOutlined,
} from "@ant-design/icons";
import { Button, Space, Tooltip, message } from "antd";
import React from "react";
import { useDispatch } from "react-redux";
import {
  changeComponentHidden,
  copySelectedComponent,
  removeSelectedComponent,
  toggleComponentLocked,
  pasteCopiedComponent,
  toolBarUp,
  toolBarDown,
} from "../../../store/componentSlice";
import useGetComponentInfo from "../../../hooks/useGetComponentInfo";

interface EditToolbarProps {
  // Define your props here
}

const EditToolbar: React.FC<EditToolbarProps> = (props) => {
  const dispatch = useDispatch();
  const { selectedId, selectedComponent, copiedComponent } =
    useGetComponentInfo();
  const isLocked = selectedComponent?.isLocked;

  const handleToolBar = (action: string) => {
    switch (action) {
      case "Delete":
        dispatch(removeSelectedComponent());
        break;
      case "Hide":
        dispatch(changeComponentHidden({ id: selectedId, isHidden: true }));
        break;
      case "Lock":
        dispatch(toggleComponentLocked({ id: selectedId }));
        break;
      case "Duplicate":
        dispatch(copySelectedComponent());
        break;
      case "Paste":
        dispatch(pasteCopiedComponent());
        break;
      case "Up":
        if (!selectedId) {
          message.warning("Please select a Component", 1);
          break;
        }
        dispatch(toolBarUp());
        break;
      case "Down":
        if (!selectedId) {
          message.warning("Please select a Component", 1);
          break;
        }
        dispatch(toolBarDown());
        break;
    }
  };
  return (
    <Space>
      <Tooltip title="Delete">
        <Button
          shape="circle"
          icon={<DeleteOutlined />}
          onClick={() => handleToolBar("Delete")}
        ></Button>
      </Tooltip>
      <Tooltip title="Hide">
        <Button
          shape="circle"
          icon={<EyeInvisibleOutlined />}
          onClick={() => handleToolBar("Hide")}
        ></Button>
      </Tooltip>
      <Tooltip title="Lock">
        <Button
          shape="circle"
          icon={<LockOutlined />}
          onClick={() => handleToolBar("Lock")}
          type={isLocked ? "primary" : "default"}
        ></Button>
      </Tooltip>
      <Tooltip title="Duplicate">
        <Button
          shape="circle"
          icon={<CopyOutlined />}
          onClick={() => handleToolBar("Duplicate")}
        ></Button>
      </Tooltip>
      <Tooltip title="Paste">
        <Button
          shape="circle"
          icon={<BlockOutlined />}
          onClick={() => handleToolBar("Paste")}
          disabled={copiedComponent === null ? true : false}
        ></Button>
      </Tooltip>
      <Tooltip title="Up">
        <Button
          shape="circle"
          icon={<UpCircleOutlined />}
          onClick={() => handleToolBar("Up")}
        ></Button>
      </Tooltip>
      <Tooltip title="Down">
        <Button
          shape="circle"
          icon={<DownCircleOutlined />}
          onClick={() => handleToolBar("Down")}
        ></Button>
      </Tooltip>
    </Space>
  );
};

export default EditToolbar;

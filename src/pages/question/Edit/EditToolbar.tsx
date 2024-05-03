import { DeleteOutlined, EyeInvisibleOutlined } from "@ant-design/icons";
import { Button, Space, Tooltip } from "antd";
import React from "react";
import { useDispatch } from "react-redux";
import {
  changeComponentHidden,
  removeSelectedComponent,
} from "../../../store/componentSlice";
import useGetComponentInfo from "../../../hooks/useGetComponentInfo";

interface EditToolbarProps {
  // Define your props here
}

const EditToolbar: React.FC<EditToolbarProps> = (props) => {
  const dispatch = useDispatch();
  const { selectedId, selectedComponent } = useGetComponentInfo();

  const handleToolBar = (action: string) => {
    switch (action) {
      case "Delete":
        dispatch(removeSelectedComponent());
        break;
      case "Hide":
        const flag = selectedComponent?.isHidden;

        dispatch(changeComponentHidden({ id: selectedId, isHidden: !flag }));
        console.log("flag", !flag);
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
    </Space>
  );
};

export default EditToolbar;

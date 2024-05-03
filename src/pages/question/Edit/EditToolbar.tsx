import { DeleteOutlined } from "@ant-design/icons";
import { Button, Space, Tooltip } from "antd";
import React from "react";
import { useDispatch } from "react-redux";
import { removeSelectedComponent } from "../../../store/componentSlice";

interface EditToolbarProps {
  // Define your props here
}

const EditToolbar: React.FC<EditToolbarProps> = (props) => {
  const dispatch = useDispatch();

  const handleToolBar = (action: string) => {
    switch (action) {
      case "Delete":
        dispatch(removeSelectedComponent());
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
    </Space>
  );
};

export default EditToolbar;

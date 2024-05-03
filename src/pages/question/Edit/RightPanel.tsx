import React from "react";
import { Tabs } from "antd";
import { FileTextOutlined, SettingOutlined } from "@ant-design/icons";
import ComponentProp from "./ComponentProp";
interface RightPanelProps {
  // Define your props here
}

const RightPanel: React.FC<RightPanelProps> = (props) => {
  const tabItems = [
    {
      key: "prop",
      label: (
        <span>
          <FileTextOutlined />
          Configuration
        </span>
      ),
      children: (
        <div>
          <ComponentProp />
        </div>
      ),
    },
    {
      key: "setting",
      label: (
        <span>
          <SettingOutlined />
          Page Settings
        </span>
      ),
      children: <div> Page Settings</div>,
    },
  ];
  return <Tabs defaultActiveKey="prop" items={tabItems}></Tabs>;
};

export default RightPanel;

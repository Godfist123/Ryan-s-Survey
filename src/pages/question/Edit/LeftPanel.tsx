import { AppstoreOutlined, BarsOutlined } from "@ant-design/icons";
import { Tabs } from "antd";
import React from "react";
import ComponentLib from "./ComponentLib";

interface LeftPanelProps {
  // Define your props here
}

const LeftPanel: React.FC<LeftPanelProps> = (props) => {
  const tabItems = [
    {
      key: "library",
      label: (
        <span>
          <AppstoreOutlined />
          Library
        </span>
      ),
      children: (
        <div>
          <ComponentLib />
        </div>
      ),
    },
    {
      key: "layers",
      label: (
        <span>
          <BarsOutlined />
          Layers
        </span>
      ),
      children: <div>Layers</div>,
    },
  ];
  return (
    <div>
      <Tabs defaultActiveKey="library" items={tabItems}></Tabs>
    </div>
  );
};

export default LeftPanel;

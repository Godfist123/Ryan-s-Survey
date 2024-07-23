import React, { useEffect, useState } from "react";
import { Tabs } from "antd";
import { FileTextOutlined, SettingOutlined } from "@ant-design/icons";
import ComponentProp from "./ComponentProp";
import PageSetting from "./PageSetting";
import { ComponentPropsType } from "../../../components/QuestionComponents";
import useGetComponentInfo from "../../../hooks/useGetComponentInfo";

enum TAB_KEYS {
  PROP_KEY = "prop",
  SETTING_KEY = "setting",
}

const RightPanel: React.FC<ComponentPropsType> = (props) => {
  const { selectedId } = useGetComponentInfo();
  const [activeKey, setActiveKey] = useState(TAB_KEYS.PROP_KEY);

  useEffect(() => {
    if (selectedId) {
      setActiveKey(TAB_KEYS.PROP_KEY);
    } else {
      setActiveKey(TAB_KEYS.SETTING_KEY);
    }
  }, [selectedId]);

  const tabItems = [
    {
      key: TAB_KEYS.PROP_KEY,
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
      key: TAB_KEYS.SETTING_KEY,
      label: (
        <span>
          <SettingOutlined />
          Page Settings
        </span>
      ),
      children: (
        <div>
          <PageSetting />
        </div>
      ),
    },
  ];
  return <Tabs activeKey={activeKey} items={tabItems}></Tabs>;
};

export default RightPanel;

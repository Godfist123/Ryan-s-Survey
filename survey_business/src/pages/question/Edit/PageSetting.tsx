import React, { useEffect } from "react";
import useGetPageInfo from "../../../hooks/useGetPageInfo";
import { Form, Input } from "antd";
import { useDispatch } from "react-redux";
import { resetPageInfo } from "../../../store/pageinfoSlice";

interface PageSettingProps {
  // Define your props here
}

const PageSetting: React.FC<PageSettingProps> = (props) => {
  const { TextArea } = Input;
  const pageInfo = useGetPageInfo();
  const [form] = Form.useForm();
  const dispatch = useDispatch();

  useEffect(() => {
    form.setFieldsValue(pageInfo);
  }, [pageInfo]);

  const handleChange = () => {
    dispatch(resetPageInfo(form.getFieldsValue()));
  };

  return (
    <Form
      layout="vertical"
      initialValues={pageInfo}
      onValuesChange={handleChange}
      form={form}
    >
      <Form.Item
        label="Title"
        name="title"
        rules={[{ required: true, message: "Please Enter Title" }]}
      >
        <Input placeholder="Please Enter Title" />
      </Form.Item>
      <Form.Item label="Description" name="desc">
        <TextArea />
      </Form.Item>
      <Form.Item label="CSS Code" name="css">
        <TextArea placeholder="Please Enter CSS Code" />
      </Form.Item>
      <Form.Item label="JS Code" name="js">
        <TextArea placeholder="Please Enter JS Code" />
      </Form.Item>
    </Form>
  );
};

export default PageSetting;

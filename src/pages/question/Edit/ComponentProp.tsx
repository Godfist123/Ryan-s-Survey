import React from "react";
import useGetComponentInfo from "../../../hooks/useGetComponentInfo";
import {
  ComponentPropsType,
  getComponentConfByType,
} from "../../../components/QuestionComponents";
import { useDispatch } from "react-redux";
import { changeComponentProp } from "../../../store/componentSlice";

interface ComponentPropProps {
  // Define your props here
}

const ComponentProp: React.FC<ComponentPropProps> = (props) => {
  const dispatch = useDispatch();
  const { selectedComponent } = useGetComponentInfo();

  if (selectedComponent == null)
    return <div style={{ textAlign: "center" }}>Empty</div>;

  const { type, props: prop } = selectedComponent;
  const componentConfig = getComponentConfByType(type);
  if (componentConfig == null)
    return <div style={{ textAlign: "center" }}>Empty</div>;

  const { PropComponent } = componentConfig;

  const changeProps = (newProps: ComponentPropsType) => {
    const { fe_id } = selectedComponent;
    dispatch(changeComponentProp({ id: fe_id, newProps }));
  };

  return (
    <div>
      <PropComponent {...prop} onChange={changeProps} />
    </div>
  );
};

export default ComponentProp;

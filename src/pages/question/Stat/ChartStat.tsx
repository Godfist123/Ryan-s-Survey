import { useRequest } from "ahooks";
import { Typography } from "antd";
import React, { useEffect, useState } from "react";
import { getComponentStatService } from "../../../services/stat";
import { useParams } from "react-router-dom";
import { getComponentConfByType } from "../../../components/QuestionComponents";

interface ChartStatProps {
  selectedId: string;
  selectedComponentType: string;
}
const ChartStat: React.FC<ChartStatProps> = (props) => {
  const { selectedId, selectedComponentType } = props;
  const { Title } = Typography;
  const { id = "" } = useParams();
  const [stat, setStat] = useState([]);

  const { run } = useRequest(
    async () => {
      const resp = await getComponentStatService(id, selectedId);
      return resp;
    },
    {
      manual: true,
      onSuccess: (resp) => {
        setStat(resp.stat);
      },
    }
  );

  useEffect(() => {
    if (selectedId) run();
  }, [id, selectedId]);

  const generateStatElem = () => {
    if (!selectedId) return <div>No selection</div>;
    else {
      const component = getComponentConfByType(selectedComponentType);
      const StatComponent = component?.StatComponent;
      if (StatComponent == null) return <div>No Statistics</div>;
      else {
        return <StatComponent stat={stat} />;
      }
    }
  };

  return (
    <>
      <Title level={3}>Chart</Title>
      <div>{generateStatElem()}</div>
    </>
  );
};

export default ChartStat;

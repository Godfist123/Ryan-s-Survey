import React, { useMemo } from "react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import { STAT_COLORS } from "../../../constant";
import { QuestionRadioPropsType } from "./interface";

const StatComponent: React.FC<QuestionRadioPropsType> = (props) => {
  const { stat = [] } = props;
  const sum = useMemo(() => {
    let s = 0;
    stat.forEach((item) => {
      return (s += item.count);
    });
    return s;
  }, stat);

  return (
    <div style={{ width: "250px", height: "300px" }}>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            dataKey="count"
            data={stat}
            cx="50%"
            cy="50%"
            outerRadius={50}
            fill="#8884d8"
            label={(i) => `${i.name}: ${((i.count / sum) * 100).toFixed(2)}%`}
          >
            {stat.map((i, index) => {
              return <Cell key={index} fill={STAT_COLORS[index]} />;
            })}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default StatComponent;

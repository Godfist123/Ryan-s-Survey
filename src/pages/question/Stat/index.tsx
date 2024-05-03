import React from "react";
import useLoadQuestionData from "../../../hooks/useLoadQuestionData";

interface StatProps {
  // Define your props here
}

const Stat: React.FC<StatProps> = (props) => {
  const { loading } = useLoadQuestionData();
  return (
    <div>
      statics;
      {loading ? <p>loading</p> : <p>data</p>}
    </div>
  );
};

export default Stat;

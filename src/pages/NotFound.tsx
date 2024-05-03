import { useNavigate } from "react-router-dom";
import React from "react";
import { Button, Result } from "antd";

const NotFound: React.FC = () => {
  const Navi = useNavigate();
  return (
    <React.Fragment>
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={
          <Button
            onClick={() => {
              Navi("/");
            }}
            type="primary"
          >
            Back Home
          </Button>
        }
      />
    </React.Fragment>
  );
};

export default NotFound;

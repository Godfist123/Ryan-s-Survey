import { Typography, Button } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Home.module.scss";

interface HomeProps {
  // Define your props here
}
const { Title, Paragraph } = Typography;

const Home: React.FC<HomeProps> = (props) => {
  const navi = useNavigate();
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <Title>Survey | Online Voting</Title>
        <Paragraph>Good</Paragraph>
        <div>
          <Button
            type="primary"
            onClick={() => {
              navi("/manage/list");
            }}
          >
            Start Now!
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Home;

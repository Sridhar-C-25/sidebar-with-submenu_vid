import { useParams } from "react-router-dom";

const Analytics = () => {
  const { aID } = useParams();
  return <h1>Analytics / {aID}</h1>;
};

export default Analytics;

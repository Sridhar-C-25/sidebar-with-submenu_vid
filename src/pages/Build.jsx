import { useParams } from "react-router-dom";

const Build = () => {
  const { bID } = useParams();
  return <h1>Build / {bID}</h1>;
};

export default Build;

import { useContext } from "react";
import { userContext } from "./context/UserContext";
import { useStyle } from "./Main";

const Component3 = () => {
  const { email } = useContext(userContext);
  return (
    <div style={useStyle}>
      <h2>{email}</h2>
    </div>
  );
};

export default Component3;

import { userContext } from "./context/UserContext";
import { useContext } from "react";
import { useStyle } from "./Main";
import Component3 from "./Component3";

const Component2 = () => {
  const { name, userId } = useContext(userContext);

  return (
    <div style={useStyle}>
      <h1>USer's name:{name}</h1>
      <h2>Secret name:{userId}</h2>
      <Component3 />
    </div>
  );
};

export default Component2;

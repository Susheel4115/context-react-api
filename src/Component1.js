import { useContext } from "react";
import { userContext } from "./context/UserContext";
import { useStyle } from "./Main";
import Component2 from "./Component2";

export default function Component1(props) {
  return (
    <div style={useStyle}>
      <Component2 />
    </div>
  );
}

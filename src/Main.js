import { userContext } from "./context/UserContext";
import Component1 from "./Component1";
import "./styles.css";

export const useStyle = {
  backgroundColor: "#5f5f5f",
  padding: "10px",
  borderRadius: "10px",
  boxShadow:
    "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px",
  width: "200px",
  margin: "auto",
  marginBottom: "15px",
  fontFamily: "cursive"
};
export function Main() {
  let data = {
    theme: "light",
    name: "Susheel",
    userId: "TrickyHash",
    email: "susheel1@gmail.com",
    contactNumber: "+91 9398689812",
    noOfQuestionsSolved: 120,
    codingStreak: 30
  };
  return (
    <userContext.Provider value={data}>
      <Component1 />
    </userContext.Provider>
  );
}

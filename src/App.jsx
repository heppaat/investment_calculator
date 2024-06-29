import UserInput from "./components/UserInput";
import { useState } from "react";
import Results from "./components/Results";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 1000,
    annualInvestment: 1500,
    expectedReturn: 6,
    duration: 10,
  });

  const handleGetInput = (id, newValue) => {
    setUserInput((prevValue) => {
      return {
        ...prevValue,
        [id]: newValue,
      };
    });
  };

  return (
    <>
      <UserInput onChange={handleGetInput} userInput={userInput} />
      <Results userInput={userInput} />
    </>
  );
}

export default App;

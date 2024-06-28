import { useState } from "react";

const UserInput = () => {
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
    console.log(userInput.initialInvestment);
  };

  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input
            type="number"
            required
            value={userInput.initialInvestment}
            onChange={(e) =>
              handleGetInput("initialInvestment", e.target.value)
            }
          />
        </p>
        <p>
          <label>Annual Investment</label>
          <input
            type="number"
            required
            value={userInput.annualInvestment}
            onChange={(e) => handleGetInput("annualInvestment", e.target.value)}
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Expected Return</label>
          <input
            type="number"
            required
            value={userInput.expectedReturn}
            onChange={(e) => handleGetInput("expectedReturn", e.target.value)}
          />
        </p>
        <p>
          <label>Duration</label>
          <input
            type="number"
            required
            value={userInput.duration}
            onChange={(e) => handleGetInput("duration", e.target.value)}
          />
        </p>
      </div>
    </section>
  );
};

export default UserInput;

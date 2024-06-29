import { calculateInvestmentResults } from "../util/investment";

const Results = ({ userInput }) => {
  const result = calculateInvestmentResults(userInput);
  console.log(result);

  return (
    <div>
      <p>Hello here are the results...</p>
    </div>
  );
};

export default Results;

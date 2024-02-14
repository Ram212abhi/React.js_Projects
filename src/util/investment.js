// This function expects a JS object as an argument
// The object should contain the following properties
// - initialInvestment: The initial investment amount
// - annualInvestment: The amount invested every year
// - : The expected (annual) rate of return
// - duration: The investment duration (time frame)
export function calculateInvestmentResults({
  initialInvestment,
  annualInvestment,
  expectedReturns,
  duration,
}) {
  const annualData = [];
  let investmentValue = initialInvestment;
  // console.log('expectedReturn',)

  for (let i = 0; i < duration; i++) {
    // console.log('investmentValue', investmentValue)
    const interestEarnedInYear = investmentValue * (expectedReturns / 100);
    investmentValue += interestEarnedInYear + annualInvestment;

    // console.log('interestEarnedInYear', interestEarnedInYear);
    // console.log('investmentValue', investmentValue);
    annualData.push({
      year: i + 1, // year identifier
      interest: interestEarnedInYear,  // the amount of interest earned in this year
      valueEndOfYear: investmentValue, // investment value at end of year
      annualInvestment: annualInvestment, // investment added in this year
    });
  }
  // console.log('ssss', annualData)
  return annualData;
}

// The browser-provided Intl API is used to prepare a formatter object
// This object offers a "format()" method that can be used to format numbers as currency
// Example Usage: formatter.format(1000) => yields "$1,000"
export const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});

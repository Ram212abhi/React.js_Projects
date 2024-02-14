import { useState } from 'react';
import React from 'react';
import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Results from './components/Results';

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturns: 6,
    duration: 10,
});

const invalidInput = userInput.duration >=1;

function handleChange ( inputIdentifier,newValue) {
    setUserInput(prevUserInput => {
        return {
            ...prevUserInput,
            [inputIdentifier]: +newValue,
        }
    });
        
};
  return (
  <>
    <Header />
    <UserInput newUserInput={userInput} newOnChange ={handleChange}/>
    {!invalidInput && <p className='center'>Please Enter Duration greater than zero</p>}
    {invalidInput &&<Results input={userInput} />}
  </>
  
  )

  
}

export default App;

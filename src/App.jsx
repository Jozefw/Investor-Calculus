import { useState } from "react";
import Header from "./components/Header.jsx";
import UserInput from "./components/UserInput.jsx";
import Results from './components/Results.jsx';

function App() {
  const [userInputs,setUserInput] = useState({
    initialInvestment:100,
    annualInvestment:100,
    expectedReturn:6,
    duration:10
  });
  
  function handleChange(inputId,newValue){
    setUserInput(prevUserInput => {
        return {
            ...prevUserInput,
            [inputId]:newValue
        }
    })
  }
  return (
    <>
    <Header></Header>
    <UserInput userInputChange={handleChange} userInputObj ={userInputs}></UserInput>
    <Results inputChart={userInputs}></Results>
    </>
  )
}

export default App

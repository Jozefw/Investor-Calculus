import { useState } from "react";


export default function UserInput() {
    const [userInput,setUserInput] = useState({
        initialInvest:100,
        annualInvest:100,
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
        <section id="user-input">
            <div className="input-group">
                <p>
                    <label>Enter Initial Investment</label>
                    <input type='number' value={userInput.initialInvest} required onChange={(event)=>handleChange('initialInvest',event.target.value)}></input>
                </p>

                <p>
                    <label>Enter Annual Investment</label>
                    <input type='number' value={userInput.annualInvest} onChange={(event)=>handleChange('annualInvest',event.target.value)} required></input>
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label>Anticipated Return</label>
                    <input type='number' value={userInput.duration} onChange={(event)=>handleChange('duration',event.target.value)} required></input>
                </p>

                <p>
                    <label>Investment Duration</label>
                    <input type='number' value={userInput.expectedReturn} onChange={(event)=>handleChange('expectedReturn',event.target.value)} required ></input>
                </p>
            </div>
        </section>
    )
}
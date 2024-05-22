export default function UserInput({userInputChange,userInputObj}) {

    return (
        <section id="user-input">
            <div className="input-group">
                <p>
                    <label>Enter Initial Investment</label>
                    <input type='number' value={userInputObj.initialInvest} required onChange={(event)=>userInputChange('initialInvest',event.target.value)}></input>
                </p>

                <p>
                    <label>Enter Annual Investment</label>
                    <input type='number' value={userInputObj.annualInvest} onChange={(event)=>userInputChange('annualInvest',event.target.value)} required></input>
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label>Anticipated Return</label>
                    <input type='number' value={userInputObj.duration} onChange={(event)=>userInputChange('duration',event.target.value)} required></input>
                </p>

                <p>
                    <label>Investment Duration</label>
                    <input type='number' value={userInputObj.expectedReturn} onChange={(event)=>userInputChange('expectedReturn',event.target.value)} required ></input>
                </p>
            </div>
        </section>
    )
}
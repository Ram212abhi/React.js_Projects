

export default function UserInput({newOnChange,newUserInput}){
    

    return <section id="user-input">
            <div className="input-group">
                <p>
                    <label>Initial Invesment</label>
                    <input type="number" 
                    required  
                    value={newUserInput.initialInvestment} 
                 onChange={(event)=>newOnChange("initialInvestment" , event.target.value)} />
                </p>
                <p>
                    <label>Annual Investment</label>
                    <input type="number"  
                    required
                    value={newUserInput.annualInvestment} 
                 onChange={(event)=>newOnChange("annualInvestment" , event.target.value)} />
                </p>
            </div>
            <div  className="input-group">
                <p>
                    <label>Expected returns</label>
                    <input type="number"  
                    required 
                    value={newUserInput.expectedReturns} 
                 onChange={(event)=>newOnChange("expectedReturns" , event.target.value)} />
                </p>
                <p>
                    <label>Duration</label>
                    <input type="number" 
                     required
                     value={newUserInput.duration} 
                     onChange={(event)=>newOnChange("duration" , event.target.value)} />
                </p>
            </div>
        </section>
    
};
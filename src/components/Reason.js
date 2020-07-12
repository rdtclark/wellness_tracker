import React from 'react';

const Reason = ({}) => {

    return(
        <div>
            
            <p>Good/Bad Day Reason [Box]</p>
            <input 
            type="text" 
            placeholder="Answer" 
            id="day-reason"
            />
            <input type="submit" value="Submit" />
        </div>
    )
    
}

export default Reason;
import React from 'react';

const Reason = ({reason, dayScore, date}) => {


    return (
        <div>
            <p>On {date} you rated your day <b>{dayScore}</b></p>
            <p>This was your reason: "<i>{reason}</i>"</p>
            <br></br>
        </div>

    )
}

export default Reason;
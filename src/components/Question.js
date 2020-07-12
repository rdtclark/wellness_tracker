import React from 'react';

const Question = ({type}) => {

    if (!type) return null;

    return(
        <div>
            <li>
            {type}
            </li>
        </div>
    )
}




export default Question;
import React from 'react';

const Question = ({type}) => {

    if (!type) return null;

    return(
        <div>
            {type}
        </div>
    )
}




export default Question;
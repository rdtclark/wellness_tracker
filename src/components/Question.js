import React from 'react';

const Question = ({question_content}) => {

    if (!question_content) return null;

    return(
        <div>
            <li>
            {question_content}
            </li>
        </div>
    )
}




export default Question;
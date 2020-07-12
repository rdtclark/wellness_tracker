import React from 'react';
import Question from '.Question';

const QuestionList = ({questionList}) => {

    const questions = questionList.map(question => {

        return (
            <Question
            type={question.type}
            key={question.id}>
            </Question>
        )
    })

    return(
        <div>
            <ul>
            {questions}
            </ul>
        </div>
    )
}

export default QuestionList;
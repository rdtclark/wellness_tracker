import React from 'react';
import Question from './Question';
import Reason from './Reason';

const QuestionList = ({questionList}) => {

    const questions = questionList.map(question => {

        return (
            <Question
            question_content={question.content}
            key={question.id}>
            </Question>
        )
    })

    return(
        <div>
            <ul>
            {questions}
            </ul>
            <Reason/>
        </div>
    )
}

export default QuestionList;
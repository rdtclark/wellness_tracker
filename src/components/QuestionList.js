import React, { Component } from 'react';
import Question from './Question';
import Reason from './Reason';

class QuestionList extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            answers: []
        }
    }

    render() {

        const questions = this.props.questionList.map(question => {
          return <Question
            question_content={question.content}
            key={question.id}
            id={question.id}>
            </Question>
        
        });
        
        return (
            <>
                <form className="question-form">      
                {questions}
                <Reason/>
                </form>
            </>
        )
    }
}


export default QuestionList;
import React, { Component } from 'react';

class QuestionList extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            answer1: "",
            answer2: "",
            answer3: "",
            answer4: "",
            answer5: "",
            answer6: "",
            dayComment: ""
        }
    }

    render() {

        const questions = this.props.questionList.map(question => {

            if (!question.content && !question.id) return null;

            return <div key={question.id}>
            <p>
            {question.content}
            </p>
            <input
             
            type="text" 
            placeholder="Answer" 
            id={question.id}
            />
            </div>
        
        });
        
        return (
            <>
                <form className="question-form">      
                {questions}
                <p>Good/Bad Day Reason [Box]</p>
                <input 
                type="text" 
                placeholder="Answer" 
                id="day-comment"
                />
                <input type="submit" value="Submit" />
                </form>
            </>
        )
    }
}


export default QuestionList;
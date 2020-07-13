import React, { Component } from 'react';

class QuestionList extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            SLEEP: "",
            EAT: "",
            PHYSICAL: "",
            MENTAL: "",
            SOCIAL: "",
            DAY: "",
            dayComment: ""
        }

        // Answer Bindings
        this.handleAnswerChange = this.handleAnswerChange.bind(this);
        this.handleDayCommentChange = this.handleDayCommentChange.bind(this);
        
        // Submit Binding
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDayCommentChange = this.handleDayCommentChange.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        const SLEEP = this.state.SLEEP.trim();
        if (!SLEEP) {
          return
        }

      this.props.onAnswerSubmit({
        SLEEP: SLEEP
      });

      this.setState({
        SLEEP: ''
      });
    }

    handleAnswerChange(event) {
        // console.log(event.target.id);
        this.setState({
          [event.target.id]: event.target.value
        });
    }

    handleDayCommentChange(event) {
        this.setState({
            dayComment: event.target.value
        })
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
            onChange={this.handleAnswerChange}
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
                onChange={this.handleDayCommentChange}
                />
                <input 
                type="submit"
                value="Submit"
                
                />
                </form>
            </>
        )
    }
}


export default QuestionList;
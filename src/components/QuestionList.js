import React, { Component } from 'react';

class QuestionList extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            SLEEP: 3,
            EAT: 3,
            PHYSICAL: 3,
            MENTAL: 3,
            SOCIAL: 3,
            DAY: 3,
            dayComment: ""
        }

        // Answer Bindings
        this.handleAnswerChange = this.handleAnswerChange.bind(this);
        this.handleDayCommentChange = this.handleDayCommentChange.bind(this);
        
        // Submit Binding
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        const SLEEP = this.state.SLEEP;
        const EAT = this.state.EAT;
        const PHYSICAL = this.state.PHYSICAL;
        const MENTAL = this.state.MENTAL;
        const SOCIAL = this.state.SOCIAL;
        const DAY = this.state.DAY;
        const dayComment = this.state.dayComment.trim();
        if (!SLEEP || !EAT || !PHYSICAL || !MENTAL || !SOCIAL || !DAY || !dayComment) {
          return
        }

      this.props.onAnswerSubmit({
        SLEEP: SLEEP,
        EAT: EAT,
        PHYSICAL: PHYSICAL,
        MENTAL: MENTAL,
        SOCIAL: SOCIAL,
        DAY: DAY,
        dayComment: dayComment
      });

      this.setState({
        SLEEP: 3,
        EAT: 3,
        PHYSICAL: 3,
        MENTAL: 3,
        SOCIAL: 3,
        DAY: 3,
        dayComment: ""
      });
    }

    handleAnswerChange(event) {
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
            id={question.id} 
            type="range" 
            min="1" max="6" 
            value={this.state[question.id]}
            onChange={this.handleAnswerChange}
            step="1"/>
            </div>
        
        });
        
        return (
            <>
                <form className="question-form" onSubmit={this.handleSubmit}>      
                {questions}
                <p>Good/Bad Day Reason [Box]</p>
                <input 
                type="text" 
                placeholder="Answer"
                id="day-comment"
                value={this.state.dayComment}
                onChange={this.handleDayCommentChange}
                />
                <input className="button is-info is-inverted" type="submit"value="Post"
                />
                </form>
            </>
        )
    }
}


export default QuestionList;

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
    }

    handleSubmit(event) {
        event.preventDefault();
        const SLEEP = this.state.SLEEP.trim();
        const EAT = this.state.EAT.trim();
        const PHYSICAL = this.state.PHYSICAL.trim();
        const MENTAL = this.state.MENTAL.trim();
        const SOCIAL = this.state.SOCIAL.trim();
        const DAY = this.state.DAY.trim();
        const dayComment = this.state.dayComment.trim();
        if (!SLEEP || !EAT || !PHYSICAL || !MENTAL || !SOCIAL || !DAY || !dayComment) {
          return
        }

      this.props.onAnswerSubmit({
        SLEEP: SLEEP,
        EAT: EAT,
        PHYSICAL: PHYSICAL,
        MENTAL: MENTAL,
        SOCIAL:SOCIAL,
        DAY: DAY,
        dayComment: dayComment
      });

      this.setState({
        SLEEP: '',
        EAT: '',
        PHYSICAL: '',
        MENTAL: '',
        SOCIAL: '',
        DAY: '',
        dayComment: ''
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
            type="text" 
            placeholder="Answer" 
            id={question.id}
            onChange={this.handleAnswerChange}
            />
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
                onChange={this.handleDayCommentChange}
                />
                <input 
                type="submit"
                value="Post"
                />
                </form>
            </>
        )
    }
}


export default QuestionList;
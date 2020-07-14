import React, { Component } from 'react';

class QuestionList extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            currentStep: 1,
            SLEEP: 3,
            EAT: 3,
            PHYSICAL: 3,
            MENTAL: 3,
            SOCIAL: 3,
            DAY: 3,
            dayComment: ""
        }

        // Answer Binding
        this.handleAnswerChange = this.handleAnswerChange.bind(this);

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

    _next = () => {
        let currentStep = this.state.currentStep
        currentStep = currentStep >= 6? 7: currentStep + 1
        this.setState({
          currentStep: currentStep
        })
      }
        
    _prev = () => {
        let currentStep = this.state.currentStep
        currentStep = currentStep <= 1? 1: currentStep - 1
        this.setState({
            currentStep: currentStep
        })
    }

    /*
    * the functions for our button
    */
    previousButton() {
        let currentStep = this.state.currentStep;
        if(currentStep !==1){
            return (
                <button 
                    className="button is-light" 
                    type="button" onClick={this._prev}>
                Previous
                </button>
            )
        }
        return null;
    }
    
    nextButton(){
        let currentStep = this.state.currentStep;
        if(currentStep <7){
            return (
                <button 
                    className="button is-primary float-right" 
                    type="button" onClick={this._next}>
                Next
                </button>        
            )
        }
        return null;
    }

    handleAnswerChange(event) {
        this.setState({
        [event.target.id]: event.target.value
        });
    }

    questions() { 
        return this.props.questionList 
    };

    render() {
        
        return (
            <>
                <h2>Wellness Submission for TODO..Make..Dynamic..Today</h2>
                <p>Question {this.state.currentStep}</p> 
                <form className="question-form" onSubmit={this.handleSubmit}>

                    <Step1
                    questions={this.props.questionList}
                    currentStep={this.state.currentStep} 
                    handleAnswerChange={this.handleAnswerChange}
                    SLEEP={this.state.SLEEP}
                    />

                    <Step2
                    currentStep={this.state.currentStep} 
                    handleAnswerChange={this.handleAnswerChange}
                    EAT={this.state.EAT}
                    />

                    <Step3
                    currentStep={this.state.currentStep} 
                    handleAnswerChange={this.handleAnswerChange}
                    PHYSICAL={this.state.PHYSICAL}
                    />

                    <Step4
                    currentStep={this.state.currentStep} 
                    handleAnswerChange={this.handleAnswerChange}
                    MENTAL={this.state.MENTAL}
                    />

                    <Step5
                    currentStep={this.state.currentStep} 
                    handleAnswerChange={this.handleAnswerChange}
                    SOCIAL={this.state.SOCIAL}
                    />

                    <Step6
                    currentStep={this.state.currentStep} 
                    handleAnswerChange={this.handleAnswerChange}
                    DAY={this.state.DAY}
                    />

                    <Step7
                    currentStep={this.state.currentStep} 
                    handleAnswerChange={this.handleAnswerChange}
                    dayComment={this.state.dayComment}
                    />

                    {this.previousButton()}
                    {this.nextButton()}
                
                </form>
            </>
        )
    }
}


// STEP 1 INPUT
function Step1(props) {
    if (props.currentStep !== 1) {
      return null
    } 
    return(
    <>
        {console.log(props.questions.content)}
        <p>How well did you sleep?</p>
        <input
        className="slider"
        id="SLEEP" 
        type="range" 
        min="1" max="6" 
        value={props.SLEEP}
        onChange={props.handleAnswerChange}
        step="1"
        />
    </>
    );
}

// STEP 2 INPUT
function Step2(props) {
    if (props.currentStep !== 2) {
      return null
    } 
    return(
    <>
        <p>Did you eat well?</p>
        <input
        className="slider"
        id="EAT" 
        type="range" 
        min="1" max="6" 
        value={props.EAT}
        onChange={props.handleAnswerChange}
        step="1"
        />
    </>
    );
}

// STEP 3 INPUT
function Step3(props) {
    if (props.currentStep !== 3) {
      return null
    } 
    return(
    <>
        <p>Have you exercised?</p>
        <input
        className="slider"
        id="PHYSICAL" 
        type="range" 
        min="1" max="6" 
        value={props.PHYSICAL}
        onChange={props.handleAnswerChange}
        step="1"
        />
    </>
    );
}

// STEP 4 INPUT
function Step4(props) {
    if (props.currentStep !== 4) {
      return null
    } 
    return(
    <>
        <p>Did you learn anything new?</p>
        <input
        className="slider"
        id="MENTAL" 
        type="range" 
        min="1" max="6" 
        value={props.MENTAL}
        onChange={props.handleAnswerChange}
        step="1"
        />
    </>
    );
}

// STEP 5 INPUT
function Step5(props) {
    if (props.currentStep !== 5) {
      return null
    } 
    return(
    <>
        <p>Did you speak to anyone?</p>
        <input
        className="slider"
        id="SOCIAL" 
        type="range" 
        min="1" max="6" 
        value={props.SOCIAL}
        onChange={props.handleAnswerChange}
        step="1"
        />
    </>
    );
}

// STEP 6 INPUT
function Step6(props) {
    if (props.currentStep !== 6) {
      return null
    } 
    return(
    <>
        <p>Score your day..</p>
        <input
        className="slider"
        id="DAY" 
        type="range" 
        min="1" max="6" 
        value={props.DAY}
        onChange={props.handleAnswerChange}
        step="1"
        />
    </>
    );
}

// STEP 7 INPUT
function Step7(props) {
    if (props.currentStep !== 7) {
      return null
    } 
    return(
    <>
        <p>Comments on your day...</p>
        <input
        className="input is-rounded" 
        type="text" 
        placeholder="Answer"
        id="dayComment"
        value={props.dayComment}
        onChange={props.handleAnswerChange}
        />
        <input
        className="button is-success" 
        type="submit"
        value="Post"
        />
    </>
    );
}


export default QuestionList;

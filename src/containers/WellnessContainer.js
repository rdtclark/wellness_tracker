import React, { Component } from 'react';
import QuestionList from '../components/QuestionList';

class WellnessContainer extends Component{

    constructor(props){
        super(props);
        this.state={
            // questionList:[]
            questionList:[
                { "id":"SLEEP", "content":"How well did you sleep?" }, 
                { "id":"EAT", "content":"Did you eat well?" },
                { "id":"PHYSICAL", "content":"Have you exercised?" },
                { "id":"MENTAL", "content":"Did you learn anything new?" },
                { "id":"SOCIAL", "content": "Did you speak to anyone?" },
                { "id":"DAY", "content": "Rate your day?" }
            ],
            answers: []
        };
        this.handleAnswerSubmit = this.handleAnswerSubmit.bind(this);
    } 

    // http://localhost:8080

    // componentDidMount(){
    //     const url = "/"

    //     fetch(url)
    //     .then(res => res.json())
    //     .then(data => this.setState({questionList: data}))
    // }

    handleAnswerSubmit(submittedAnswers) {
        
        // TODO: make Date - yesterady if time past 5pm
        // submittedAnswers.timestamp = Date.now();

        const requestOptions = {
                
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({"userId": 1,
                "dayScore": submittedAnswers.DAY,
                "dayComment": submittedAnswers.dayComment,
                "date": "01-09-2020",
                "answers": [
                    {
                    "question": "SLEEP",
                    "score": parseInt(submittedAnswers.SLEEP, 10)
                    },
                            {
                    "question": "EAT",
                    "score": parseInt(submittedAnswers.EAT, 10)
                    },
                            {
                    "question": "MENTAL",
                    "score": parseInt(submittedAnswers.MENTAL, 10)
                    },
                            {
                    "question": "PHYSICAL",
                    "score": parseInt(submittedAnswers.PHYSICAL, 10)
                    },
                            {
                    "question": "SLEEP",
                    "score": parseInt(submittedAnswers.SLEEP, 10)
                    },
                            {
                    "question": "SOCIAL",
                    "score": parseInt(submittedAnswers.SOCIAL, 10)
                
                            }
                ]
            })
        };

        // console.log(requestOptions);
        fetch('http://localhost:8080/submissions', requestOptions)
        .then(response => response.json())

    }

    render(){
        return(
            <>
                <QuestionList
                questionList={this.state.questionList}
                onAnswerSubmit={this.handleAnswerSubmit}
                />
            </>
        )
    }
}
export default WellnessContainer;
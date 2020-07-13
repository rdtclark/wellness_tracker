import React, { Component } from 'react';
import QuestionList from '../components/QuestionList';
import ReviewList from '../components/ReviewList';
import ReasonByDate from '../components/ReasonByDate';

class WellnessContainer extends Component{

    constructor(props){
        super(props);
        this.state={
            questionList:[],
            previousResults: [],
            previousResultsTest: [
                {"id": 1, "user": "Frank", "answers":[], "dayScore": 5, "dayComment": "Met with friends", "date": "12-06-2020"},
                {"id": 1, "user": "Frank", "answers":[], "dayScore": 5, "dayComment": "Ate like a King", "date": "15-05-2020"},
                {"id": 1, "user": "Frank", "answers":[], "dayScore": 5, "dayComment": "Finally starting to understand Ruby", "date": "16-05-2020"},
                {"id": 2, "user": "Phil", "answers":[], "dayScore": 4, "dayComment": "Found a new cafe to write my novel", "date": "12-05-2020"},
                {"id": 3, "user": "Jane", "answers":[], "dayScore": 2, "dayComment": "Didn't eat enough", "date": "14-06-2020"},
                {"id": 4, "user": "Terry", "answers":[], "dayScore": 1, "dayComment": "Saw no one", "date": "18-05-2020"},
                {"id": 4, "user": "Terry", "answers":[], "dayScore": 1, "dayComment": "Didn't want to get out of bed", "date": "19-06-2020"},
                {"id": 4, "user": "Terry", "answers":[], "dayScore": 1, "dayComment": "Didn't leave the house", "date": "20-06-2020"}
            ]
        }
        this.handleAnswerSubmit = this.handleAnswerSubmit.bind(this);
        this.handleDateSubmit = this.handleDateSubmit.bind(this);
    }

    

    // http://localhost:8080

    componentDidMount() {
        const url = "http://localhost:8080/questions"

        fetch(url)
        .then(res => res.json())
        .then(data => this.setState({questionList: data}))
    }

    handleAnswerSubmit(submittedAnswers) {
        
        // TODO: make Date - yesterady if time past 5pm
        // submittedAnswers.timestamp = Date.now();

        let timestamp = new Date().toISOString().split('T')[0];

        const requestOptions = {
                
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({"userId": 1,
                "dayScore": submittedAnswers.DAY,
                "dayComment": submittedAnswers.dayComment,
                // TODO set date dynamically
                "date": timestamp,
                "answers": [
                    {
                    "question": "SLEEP",
                    "score": submittedAnswers.SLEEP
                    },
                            {
                    "question": "EAT",
                    "score": submittedAnswers.EAT
                    },
                            {
                    "question": "MENTAL",
                    "score": submittedAnswers.MENTAL
                    },
                            {
                    "question": "PHYSICAL",
                    "score": submittedAnswers.PHYSICAL
                    },
                            {
                    "question": "SLEEP",
                    "score": submittedAnswers.SLEEP
                    },
                            {
                    "question": "SOCIAL",
                    "score": submittedAnswers.SOCIAL
                
                            }
                ]
            })
        };

        // console.log(requestOptions);
        fetch('http://localhost:8080/submissions', requestOptions)
        .then(response => response.json())

    }
    
    // componentDidMount(){
    //     const url = "/submissions"

    //     fetch(url)
    //     .then(res => res.json())
    //     .then(data => this.setState({previousResults: data}))

    // }

    handleDateSubmit(dates){

        console.log(dates.startDate);
        const url =`http://localhost:8080/submissions/1?from=${dates.startDate}&to=${dates.endDate}`
        fetch(url)
        .then(res => res.json())
        .then(data => this.setState({previousResults: data}))
        .then(console.log(this.state.previousResults));
        console.log(url);
    }


    render(){
        return(
            <>
                <QuestionList
                questionList={this.state.questionList}
                onAnswerSubmit={this.handleAnswerSubmit}
                />

                <ReviewList 
                previousResults={this.state.previousResults} 
                previousResultsTest={this.state.previousResultsTest}/>

                <ReasonByDate
                onDateSubmit={this.handleDateSubmit}/>
            </>
            )
        }
}
export default WellnessContainer;
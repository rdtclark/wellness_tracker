import React, { Component } from 'react';
import Header from '../components/Header';
import NavBar from '../components/NavBar';
import QuestionList from '../components/QuestionList';
import CalendarBox from '../components/CalendarBox';
import ReviewList from '../components/ReviewList';
import ReasonByDate from '../components/ReasonByDate';
import Greeting from '../components/Greeting';
import Footer from '../components/Footer';
import ErrorPage from "../components/ErrorPage";
import Home from "../components/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class WellnessContainer extends Component{

    constructor(props){
        super(props);
        this.state={
            user: [],
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

        // Get all questiosn
        const questions_url = "http://localhost:8080/questions"

        fetch(questions_url)
        .then(res => res.json())
        .then(data => this.setState({questionList: data}))

        // Get User Data
        const users_url = "http://localhost:8080/users/1"

        fetch(users_url)
        .then(res => res.json())
        .then(data => this.setState({user: data}))

    }

    handleAnswerSubmit(submittedAnswers) {
        
        // If it's past 5PM submit for yesterday
        let submission_day = new Date();
        if (submission_day.getHours() >= 17) {
            submission_day.setDate( submission_day.getDate() - 1 )
            // {console.log("its past 5PM, submitting for yesterday")}
        }

        let timestamp = submission_day.toISOString().split('T')[0];

        // POST All Answers
        const requestOptions = {
                
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({"userId": 1,
                "dayScore": submittedAnswers.DAY,
                "dayComment": submittedAnswers.dayComment,
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

        const url =`http://localhost:8080/submissions/1?from=${dates.startDate}&to=${dates.endDate}`
        fetch(url)
        .then(res => res.json())
        .then(data => this.setState({previousResults: data}))
        .then(console.log(this.state.previousResults));
    }


    render(){ 

        return(
            <>

            <Header/>

            <Greeting
            name={this.state.user.name}
            />

            <Router>
                <>
                    <NavBar />
                    <Switch>
                    <Route exact path="/" component={Home} />
                    <Route
                        path="/submission"
                        render={() => <QuestionList 
                            questionList={this.state.questionList}
                            onAnswerSubmit={this.handleAnswerSubmit} />}
                    />
                    <Route 
                    path="/calendar"
                    render={() => <CalendarBox 
                         />}
                    />

                    <Route component={ErrorPage}/>
                    </Switch>
                </>
            </Router>

                <ReasonByDate
                onDateSubmit={this.handleDateSubmit}/>

                <ReviewList 
                previousResults={this.state.previousResults} 
                previousResultsTest={this.state.previousResultsTest}/>

                <Footer />

            </>
            )
        }
}
export default WellnessContainer;
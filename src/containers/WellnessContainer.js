import React, { Component } from 'react';
import QuestionList from '../components/QuestionList';
import ReviewList from '../components/ReviewList';

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
            previousResults: [],
            previousResultsTest: [
                {"id": 1, "user": "Frank", "answers":[], "dayScore": 5, "dayComment": "Met with friends", "date": "12-06-2020"},
                {"id": 2, "user": "Phil", "answers":[], "dayScore": 2, "dayComment": "Didn't eat enough", "date": "12-05-2020"},
                {"id": 3, "user": "Jane", "answers":[], "dayScore": 4, "dayComment": "Found a new cafe to write my novel", "date": "14-06-2020"},
                {"id": 4, "user": "Terry", "answers":[], "dayScore": 1, "dayComment": "Saw no one", "date": "18-05-2020"}
            ]
        }
    } 

    // http://localhost:8080

    // componentDidMount(){
    //     const url = "/"

    //     fetch(url)
    //     .then(res => res.json())
    //     .then(data => this.setState({questionList: data}))
    // }

    componentDidMount(){
        const url = "/submissions"

        fetch(url)
        .then(res => res.json())
        .then(data => this.setState({previousResults: data}))
    }


    render(){
        return(
            <>
                <QuestionList
                questionList={this.state.questionList}/>
                <ReviewList previousResults={this.state.previousResults} previousResultsTest={this.state.previousResultsTest}/>
            </>
        )
    }
}
export default WellnessContainer;
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

    render(){
        return(
            <>
                <QuestionList
                questionList={this.state.questionList}/>
            </>
        )
    }
}
export default WellnessContainer;
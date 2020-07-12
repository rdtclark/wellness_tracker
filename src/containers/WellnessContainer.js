import React, { Component } from 'react';
import QuestionList from '../components/QuestionList';

class WellnessContainer extends Component{

    constructor(props){
        super(props);
        this.state={
            questionList:[],
            QuestionSelected: null
        }
    }

    // http://localhost:8080

    componentDidMount(){
        const url = "/"

        fetch(url)
        .then(res => res.json())
        .then(data => this.setState({questionList: data}))
    }

    // handleQuestionSelected(questions){
    //     this.setState({QuestionSelected: questions})
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
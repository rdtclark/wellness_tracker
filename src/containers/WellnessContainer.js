import React, { Component } from 'react';
import WellnessContainer from '../components/WellnessContainer'

class WellnessContainer extends Component{

    constructor(props){
        super(props);
        this.state={
            questions:[],
            QuestionSelected: null
        }
    }

    // http://localhost:8080

    componentDidMount(){
        const url = "/"

        fetch(url)
        .then(res => res.json())
        .then(data => this.setState({questions: data}))
    }

    // handleQuestionSelected(questions){
    //     this.setState({QuestionSelected: questions})
    // }

    render(){
        return(
            <>
               
            </>
        )
    }



}
export default WellnessContainer;
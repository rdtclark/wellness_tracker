import React, { Component } from 'react';
import WellnessContainer from '../components/WellnessContainer'

class WellnessContainer extends Component{

    constructor(props){
        super(props);
        this.state={
            wellness:[],
            WellnessSelected: null
        }
    }

    // http://localhost:8080

    componentDidMount(){
        const url = "/"

        fetch(url)
        .then(res => res.json())
        .then(data => this.setState({wellness: data}))
    }

    handlePirateSelected(wellness){
        this.setState({WellnessSelected: wellness})
    }

    render(){
        return(
            <>
               
            </>
        )
    }



}
export default WellnessContainer;
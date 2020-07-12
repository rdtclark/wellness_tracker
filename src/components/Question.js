import React, { Component } from 'react';
import { render } from '@testing-library/react';

class Question extends Component{
    constructor(props){
        super(props);
    }

    render() {

    if (!this.props.question_content && !this.props.id) return null;
    
    return(
        <>
            <p>
            {this.props.question_content}
            </p>
            <input 
            type="text" 
            placeholder="Answer" 
            id={this.props.id}
            />
        </>
    )
    
    }
}

export default Question;
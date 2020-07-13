import React, {Component} from 'react';

class ReasonByDate extends Component {

    constructor(props){
        super(props);
        this.state={

        }
    }




    render(){
        return(
            <div>
                <b><h1>Select a date</h1></b>
            <form>
                <input
                type="date"
                placeholder="Start"/>
                <input
                type="date"
                placeholder="End"/>
            </form>
            </div>
        )
    }
}

export default ReasonByDate;
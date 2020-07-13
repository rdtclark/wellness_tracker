import React, {Component} from 'react';

class ReasonByDate extends Component {

    constructor(props){
        super(props);
        this.state={
            startDate: '',
            endDate: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleStartDateChange = this.handleStartDateChange.bind(this);
        this.handleEndDateChange = this.handleEndDateChange.bind(this);
    }

    handleSubmit(event){
        event.preventDefault();

        const startDate = this.state.startDate;
        const endDate = this.state.endDate;
        if (!startDate || !endDate){
            return
        }

        this.props.onDateSubmit({
            startDate: startDate,
            endDate: endDate
        })

        this.setState({
            startDate: '',
            endDate: ''
        })
    }


    handleEndDateChange(event){
        this.setState({
            startEnd: event.target.value
        })
    }

    handleStartDateChange(event){
        this.setState({
            startDate: event.target.value
        })
    }

    render(){
        return(
            <div>
                <h1><b>Select a date</b></h1>
            <form onSubmit={this.handleSubmit}>
                <label for="sdate">Start Date</label>
                <input
                type="date"
                placeholder="Start Date"
                name="sdate"
                value={this.state.startDate}
                onChange={this.handleStartDateChange}/>


                <label for="edate">End Date</label>
                <input
                type="date"
                placeholder="End Date"
                name="edate"
                value={this.start.endDate}
                onChange={this.handleEndDateChange}/>

                <input
                type="submit"
                value="Get"/>
            </form>
            </div>
        )
    }
}

export default ReasonByDate;
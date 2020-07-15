import React, {Component} from 'react';

class DayModal extends Component {

    constructor(props){
        super(props)
        this.state = {
            modal: false,
            selectedDay: ''
        }
        this.modalAction = this.modalAction.bind(this)
        this.modal= this.modal.bind(this)
    }

    modalAction(event){
        console.log(this.state.modal);
        this.setState({modal: !this.state.modal})
        this.setState({selectedDay: event.target.value})
    }

    modal() {

        const day_results = this.props.selectedDay.map(result => { 
            return <>
            <p>{result.question}</p>
            <p>{result.id}</p>
            <p>{result.score}</p>
            </>
        })

        if (this.state.modal) {

        return (
            <div className="modal is-active">
                <div className="modal-background"></div>
                <div className="modal-content">
                    <p>Info about the day</p>
                    <div>{day_results}</div>
                </div>
                <button 
                onClick={this.modalAction} 
                aria-label="close" 
                className="close-button modal-close is-large">Close
                </button>
            </div>

        )} else {
           return null
        }
    }

    render(){
        return (
            <>
            <button onClick={this.modalAction}>More Info</button>
            {this.modal()}
            </>
        )

    }
}

export default DayModal;
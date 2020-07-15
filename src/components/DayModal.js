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

        if (this.state.modal) {

        const day_results = this.props.selectedDay.map(result => { 
            return <>
            <i className="fas fa-camera"></i>
            <p>{result.question}</p>
            <p>{result.score}</p>
            </>
        })

        return (
            <div className="modal is-active">
                <div className="modal-background"></div>
                <div className="modal-content">
                    <div className="box">
                    <p>Info about the day</p>
                    {day_results}
                    </div>
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
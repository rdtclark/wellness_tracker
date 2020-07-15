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
        return (
            <div class="modal">
                <div class="modal-background"></div>
                <div class="modal-content">
                    <p>{this.state.selectedDay}</p>
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
            <div>{this.modal()}</div>
            </>
        )

    }
}

export default DayModal;
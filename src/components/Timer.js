import React, { Component } from 'react';
import moment from 'moment';

class Timer extends Component {

    constructor(props) {
         super(props);

         this.state = {
             incidentTime : 'No incident has occurred'
         }
    }
    

    componentDidMount(){
        this.CalculateIncidentTime();
    }


     CalculateIncidentTime() {
     
        const { datetime } = this.props; 
        if (datetime !== '') {
            let time = moment(datetime).format("dddd, MMMM Do YYYY, HH:mm");
            console.log('time', time);
            this.setState({ incidentTime : time });
        }       
     }


    render() {
        return (
            <div>
                <span className="time">{ this.state.incidentTime } </span>         
            </div>
        );
    }
}

export default Timer;


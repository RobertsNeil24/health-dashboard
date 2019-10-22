import React, { Component } from 'react';
import moment from 'moment';

class Timer extends Component {

    constructor(props) {
         super(props);

         this.state = {
             incidentTime : ''
         }
    }
    

    componentDidMount(){
        this.CalculateIncidentTime();
    }


     CalculateIncidentTime() {
     
        const { datetime } = this.props; 
        // let now = moment('2019-10-18T12:24:23');
        if (datetime) {
            let incidentTime = moment(datetime).fromNow();
            this.setState({ incidentTime : incidentTime });
        }       
     }


    render() {
        return (
            <div>
                { this.state.incidentTime }            
            </div>
        );
    }
}

export default Timer;


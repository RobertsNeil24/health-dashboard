import React, { Component } from 'react';
import moment from 'moment';

class HealthCardIncidentDate extends Component {

    componentDidMount(){
        this.CalculateIncidentTime();
    }

     CalculateIncidentTime() {
     
            let date = moment(this.props.datetime).local();
            if(!date.isValid()){
                return 'No incident logged';
            }

            let day = date.format('Do');
            let month = date.format('MMMM');
            let time = date.format('HH:mm');

            return day + " " + month + " " + time;   

     }


    render() {

        return (
            <div className="incident-date">
              <span>{ this.CalculateIncidentTime() }</span>     
            </div>
        );
    }
}

export default HealthCardIncidentDate;


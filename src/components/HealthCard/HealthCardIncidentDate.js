import React, { useEffect } from 'react';
import moment from 'moment';


const HealthCardIncidentDate = ({datetime}) => {

  useEffect(() => {
    CalculateIncidentTime();
  });

  const CalculateIncidentTime = () => {

    let date = moment(datetime).local();
    if (!date.isValid()) {
      return 'No incident logged';
    }
  
    let day = date.format('Do');
    let month = date.format('MMMM');
    let time = date.format('HH:mm');
  
    return day + " " + month + " " + time;
  }

  return (
    <div className="incident-date">
      <span>{CalculateIncidentTime()}</span>
    </div>
  );

  
};




export default HealthCardIncidentDate;


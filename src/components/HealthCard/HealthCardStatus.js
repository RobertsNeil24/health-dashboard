import React from 'react';
import Timer from '../Timer';

const HealthStatus = (props) => {
    const healthyMsg = 'Time since last incident';
    if (!props.healthy) {
       
        return (
            <div className="health-card-error">
                <p>Error message</p>
                <span> {props.errorMsg}</span>

            </div>
        );
    } 
        return (
        <div className="health-card-success">
            <p>No problems detected</p>
            <span className="incident-time">
                {healthyMsg}
                <Timer datetime={props.incidentTime} />
            </span>
        </div>
    
        );

}


export default HealthStatus;


import React from 'react';
import HealthCardIncidentDate from './HealthCardIncidentDate';

const HealthCardStatus = (props) => {
    const healthyMsg = 'Time of last incident';
    if (!props.healthy) {

        return (
            <div className="item card-status">
                <div className="card-status-error">
                    <p>Error message</p>
                    <span> {props.errorMsg}</span>

                </div>
            </div>
        );
    }
    return (
        <div className="item card-status">
            <div className="card-status-success">
                <p>No problems detected</p>
                <span className="incident-time">
                    {healthyMsg}
                    <HealthCardIncidentDate datetime={props.incidentTime} />
                </span>
            </div>
        </div>

    );

}


export default HealthCardStatus;


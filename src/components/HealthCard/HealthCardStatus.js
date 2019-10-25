import React from 'react';
import HealthCardIncidentDate from './HealthCardIncidentDate';

const HealthCardStatus = (props) => {
    const healthyMsg = 'Time of last incident';
    if (!props.healthy) {

        return (
            <div className="item card-status">
                <div className="card-status-error">
                    <p>Error message</p>
                    <div className="message">
                        {props.errorMsg}
                    </div>

                </div>
            </div>
        );
    }
    return (
        <div className="item card-status">
            <div className="card-status-success">
                <p>No problems detected</p>
                <div className="message">
                    <span>{healthyMsg}</span>
                    <HealthCardIncidentDate datetime={props.incidentTime} />
                </div>
            </div>
        </div>

    );

}


export default HealthCardStatus;


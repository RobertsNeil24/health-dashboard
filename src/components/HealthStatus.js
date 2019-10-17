import React from 'react';


const HealthStatus = (props) => {

    const healthyMsg = 'Time since last incident';

    if (props.errorMsg !== '') {
        return (
            <div className="health-card-error">
                <p>Error message</p>
                <span> {props.errorMsg}</span>

            </div>
        );
    } return (<div className="health-card-success">
        <p>No problems detected</p>
        <span className="incident-time">{healthyMsg}12 HRS</span>

    </div>);

}


export default HealthStatus;


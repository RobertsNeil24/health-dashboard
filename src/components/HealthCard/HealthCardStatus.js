import React from 'react';
import HealthCardIncidentDate from './HealthCardIncidentDate';

const HealthCardStatus = ({ healthy, incidentTime, errorMsg }) => {
    const healthyMsg = 'Time of last incident';
    if(healthy) {
        return (
        <div className="item card-status">
            <div className="card-status-success">
                <p>No problems detected</p>
                <div className="message">
                    <span>{healthyMsg}</span>
                    <HealthCardIncidentDate datetime={incidentTime} />
                </div>
            </div>
        </div>
         );
    }

    return (
      <div className="item card-status">
          <div className="card-status-error">
              <p>Error message</p>
              <div className="message">
                  {errorMsg}
              </div>

          </div>
      </div>
  );
}


export default HealthCardStatus;


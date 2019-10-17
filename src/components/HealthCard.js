import React from 'react';
import HeartRate from './HeartRate';
import HealthError from './HealthError';
import SystemImage from './SystemImage';
import HealthStatus from './HealthStatus';
import Timer from './Timer';
import './HealthCard.scss';


const HealthCard = (props) => {

    const { application, source, healthy, error, name, incidentTime } = props.appdata;
   

    return (
        <div className="health-card health-card__shadow">

            <div className="health-card-header">
                <h4 className={`${healthy ? 'healthy' : 'down'}`}> {healthy ? "Healthy" : "System Down"}</h4>
                <div>{healthy && <HeartRate />}
                {!healthy && <HealthError />}</div>
            </div>


            <div className="health-card-content">

                <SystemImage name={name} />
              
                <h2>{application}</h2>

                <div className="card-status-pill">{ source }</div>
     
            </div>

            <HealthStatus errorMsg={error ? error : ''} />
              
              <Timer datetime={incidentTime} />
                
        </div>
    );
}



export default HealthCard;
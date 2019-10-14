import React from 'react';
import HeartRate from './HeartRate';




const HealthCard = (props) => {

    const { application, healthy, internal, incidentTime } = props.appdata;

    

    return (
        <div className="health-card health-card--shadow">
            <div className="content">
                <h4>{application}</h4>
                <div class="health-card-status">
                    { healthy? "Healthy" : "Down" }
                    { healthy && <HeartRate /> }
                </div>
               
                <p>{internal ? "internal" : "external"}</p>
                <p>{incidentTime}</p>
            </div>
           
        </div>
    );
}



export default HealthCard;
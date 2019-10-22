import React from 'react';
import HealthCardHeader from './HealthCardHeader';
import HealthCardContent from './HealthCardContent';
import HealthStatus from './HealthCardStatus';
import '../../styles/HealthCard.scss';


const HealthCard = (props) => {

    const { application, source, healthy, error, name, incidentTime, nextRun } = props.cardData;

    return (
        <div className="health-card health-card__shadow">
            <HealthCardHeader healthy={healthy} />
            <HealthCardContent application={application} source={source} name={name} />
            <HealthStatus healthy={healthy} incidentTime={incidentTime} errorMsg={error ? error : ''} nextRun={nextRun} />
        </div>
    );
}
export default HealthCard;
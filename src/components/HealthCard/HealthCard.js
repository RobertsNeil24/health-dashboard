import React from 'react';
import HealthCardHeader from './HealthCardHeader';
import HealthCardContent from './HealthCardContent';
import HealthCardStatus from './HealthCardStatus';
import HealthCardCountDown from './HealthCardCountDown';

const HealthCard = (props) => {

    const { application, source, healthy, error, name, incidentTime, nextRun } = props.cardData;

    // const { healthy, ...otherItemProps} = props.cardData;

    return (
        <div className="card card__shadow">
            <HealthCardHeader healthy={healthy} />
            <HealthCardContent application={application} source={source} name={name} />
            <HealthCardStatus healthy={healthy} incidentTime={incidentTime} errorMsg={error ? error : ''} />
            <HealthCardCountDown nextRun={nextRun} />
        </div>

    );
}
export default HealthCard;
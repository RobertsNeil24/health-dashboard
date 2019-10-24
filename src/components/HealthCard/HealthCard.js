import React from 'react';
import HealthCardHeader from './HealthCardHeader';
import HealthCardContent from './HealthCardContent';
import HealthCardStatus from './HealthCardStatus';
import CountDown from '../CountDown';
import '../../styles/HealthCard.scss';


const HealthCard = (props) => {

    const { application, source, healthy, error, name, incidentTime, nextRun } = props.cardData;
    //...otherItemProps

   // const { healthy, ...otherItemProps} = props.cardData;

    return (
        <div className="health-card health-card__shadow">
           
            <HealthCardHeader healthy={healthy}  />
           
            <HealthCardContent application={application} source={source} name={name} />
            <HealthCardStatus healthy={healthy} incidentTime={incidentTime} errorMsg={error ? error : ''} />
            <CountDown nextRun={nextRun} />
        </div>
    );
}
export default HealthCard;
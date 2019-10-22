import React from 'react';
import HeartRate from '../HeartRate';
import HealthError from './HealthCardError';

const HealthCardHeader = ({ healthy }) => {

    return (
    <div className="health-card-header">
        <h4 className={`${healthy ? 'healthy' : 'down'}`}> {healthy ? "Healthy" : "System Down"}</h4>
        <div>{healthy && <HeartRate />}
            {!healthy && <HealthError />}</div>
    </div>)
}

export default HealthCardHeader;
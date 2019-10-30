import React from 'react';
import HeartRate from '../common/HeartRate';
import HealthCardError from './HealthCardError';

const HealthCardHeader = ({ healthy }) => {

    return (
    <div className="card-header">
        <h4 className={`${healthy ? 'healthy' : 'down'}`}> {healthy ? "Healthy" : "System Down"}</h4>
        <div className="card-header-icon">{healthy && <HeartRate />}{!healthy && <HealthCardError />}</div>
    </div>)
}

export default HealthCardHeader;
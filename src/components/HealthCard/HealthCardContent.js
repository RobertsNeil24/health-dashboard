import React from 'react';
import SystemLogo from '../common/SystemLogo';

const HealthCardContent = ({name, application, source}) => (
    <div className="card-content">
    <SystemLogo name={name} />
    <h2>{application}</h2>
    <div className="card-status-pill">{ source }</div>
</div>
);

export default HealthCardContent;
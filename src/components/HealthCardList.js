import React from 'react';
import HealthCard from './HealthCard';


    const HealthCardList = ({ applications }) => {
        const healthCards = applications.map((app) => {
            return <HealthCard key={app.id} appdata={app} />;
        });
    
        return <div className="health-card-grid">{healthCards}</div>;
    };

export default HealthCardList;
import React from 'react';
import HealthCard from './HealthCard';


    const CardList = ({ apps }) => {
        const renderedList = apps.map((app) => {
            return <HealthCard key={app.id} appdata={app} />;
        });
    
        return <div className="health-card-grid">{renderedList}</div>;
    };

export default CardList;
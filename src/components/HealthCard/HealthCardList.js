import React from 'react';
import HealthCard from './HealthCard';


    const HealthCardList = ({ applications }) => {
        const healthCards = applications.map((card) => {
            return <HealthCard key={card.id} cardData={card} />;
        });
    
        return <div className="card-grid">{healthCards}</div>;
    };

export default HealthCardList;
import React from 'react'; 
import alert from '../../images/alert.svg'
import '../../styles/Errorpulse.scss';

const HealthErrorAlert = () => {
    return (
        <div>
            <img src={alert} className="error-alert" alt="error pulse" />
        </div>
    );
}


export default HealthErrorAlert;
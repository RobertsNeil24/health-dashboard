import React from 'react'; 
import alert from '../../assets/alert.svg'
//import { ReactComponent as Alert } from '../../assets/alert.svg'
import '../../styles/Errorpulse.scss';

const HealthErrorAlert = () => {
    return (
        <div>
            {/* <Alert className="error-alert" /> */}
            <img src={alert} className="error-alert" alt="error pulse" />
        </div>
    );
}


export default HealthErrorAlert;
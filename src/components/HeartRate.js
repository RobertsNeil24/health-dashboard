import React from 'react'; 
import heartbeat from '../heartrate.svg'
import '../Heartrate.scss';

const HeartRate = () => {
    return (
        <div className="heart-rate">
            <img src={heartbeat} className="App-logo" alt="logo" />
            <div className="fade-in"></div>
            <div className="fade-out"></div>
        </div>
    );
}


export default HeartRate;
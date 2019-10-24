import React from 'react'; 
import heartrate from '../assets/heartrate.svg'
import '../styles/Heartrate.scss';

const HeartRate = () => {
    return (
        <div className="heart-rate">
            <img src={heartrate} className="App-logo" alt="heartrate" />
            <div className="fade-in"></div>
            <div className="fade-out"></div>
        </div>
    );
}


export default HeartRate;
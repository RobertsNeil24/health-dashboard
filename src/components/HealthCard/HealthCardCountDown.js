import React, { useState, useEffect } from 'react';
import moment from 'moment';


const CalculateTime = (nextRun) => {
    let now = moment().valueOf();
    let d = moment.duration(parseInt(nextRun) - now);

    let hours = d.hours() > 0 ? d.hours() + ' HR ' : '';
    let mins = d.minutes() > 0 ? d.minutes() + ' MIN ' : '';
    let sec = d.seconds() > 0 ? d.seconds() + ' SEC ' : '';

    return hours + mins + sec;
}


const HealthCardCountDown = ({ nextRun }) => {

    //Using hooks
    const [calculatedTime, setCalculateTime] = useState('Calculating');

    useEffect(() => {
        TriggerTimer();
    });

    const TriggerTimer = () => {
        setInterval(() => {
            setCalculateTime(CalculateTime(nextRun));
        }, 1000);
    }


    return (
        <div className="item card-countdown">
            <p>Next update</p>
            <p className="card-countdown-time">{calculatedTime}</p>
        </div>
    );
}


export default HealthCardCountDown;
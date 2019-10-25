import React, { Component } from 'react';
import moment from 'moment';


class HealthCardCountDown extends Component {

    constructor(props) {
        super(props);

        this.state = {
            calculatedTime: 'Calculating'
        }
    }

    componentDidMount() {
        this.TriggerTimer();
    }

    TriggerTimer() {
        setInterval(() => {
            this.CalculateTime();
        }, 1000);
    }

    CalculateTime() {
        let now = moment().valueOf();
        let d = moment.duration(parseInt(this.props.nextRun) - now);

        let hours = d.hours() > 0 ? d.hours() + ' HR ' : '';
        let mins = d.minutes() > 0 ? d.minutes() + ' MIN ' : '';
        let sec = d.seconds() > 0 ? d.seconds() + ' SEC ' : '';

        this.setState({ calculatedTime: hours + mins + sec});

    }

    render() {
        return (
            <div className="item card-countdown">
                <p>Next update</p>
                <p className="card-countdown-time">{this.state.calculatedTime}</p>
            </div>
        )
    }

}

export default HealthCardCountDown;
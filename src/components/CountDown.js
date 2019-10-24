import React, { Component } from 'react';
import moment from 'moment';


class CountDown extends Component {

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

        let next = moment(this.props.nextRun);
        let now = moment(new Date());

        let ms = moment(next, "DD/MM/YYYY HH:mm:ss").diff(moment(now, "DD/MM/YYYY HH:mm:ss"));
        let d = moment.duration(ms);

        let hours = d.hours() > 0 ? d.hours() + ' HR ' : '';
        let mins = d.minutes() > 0 ? d.minutes() + ' MIN ' : '';
        let sec = d.seconds() > 0 ? d.seconds() + ' SEC ' : '';

        this.setState({ calculatedTime: hours + mins + sec });
    }

    render() {
        return (
            <div className="countdown"><p>Next update</p><p>{this.state.calculatedTime}</p></div>
        )
    }

}

export default CountDown;
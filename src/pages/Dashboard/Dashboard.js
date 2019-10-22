import React, { Component } from 'react';
import '../../styles/Dashboard.scss';
import socketIOClient from "socket.io-client";
import SYSTEM_DATA from '../../system.data';
import moment from 'moment';

import HealthCardList from '../../components/HealthCard/HealthCardList';

class Dashboard extends Component {

    constructor(props) {
        super(props);

        this.state = {
            healthApps: [],
            runner: '',
            nextRun: ''
        }
    }

    async componentDidMount() {
        //this.loadSocket();
        this.loadMockData();
    }

    loadSocket() {
        const socket = socketIOClient('http://24.154.155.182:2222');
        socket.on("data", data => {
            this.setState({ healthApps: data });
        })
    }

    loadMockData() {
        this.setState({ healthApps: SYSTEM_DATA });
        this.setState({ runner: SYSTEM_DATA[0].nextRun });

        setInterval(() => {
            let next = moment(this.state.runner);
            let now = moment(new Date());

            let ms = moment(next,"DD/MM/YYYY HH:mm:ss").diff(moment(now,"DD/MM/YYYY HH:mm:ss"));
            let d = moment.duration(ms);
            
            let hours = d.hours() > 0 ? d.hours() + ' hours ' : '';
            let mins = d.minutes() > 0 ? d.minutes() + ' minutes ' : '';
            let sec = d.seconds() > 0 ? d.seconds() + ' seconds ' : '';

           
            this.setState({ nextRun: hours + mins + sec });

        }, 1000);
    }

    render() {
        return (
            <div className="container">
                <h2>Payments Health Dashboard</h2>
                Next Update: {this.state.nextRun}
                <HealthCardList applications={this.state.healthApps} />
            </div>
        );
    }
}

export default Dashboard;

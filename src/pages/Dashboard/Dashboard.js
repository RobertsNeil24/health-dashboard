import React, { Component } from 'react';
import '../../styles/Dashboard.scss';
import socketIOClient from "socket.io-client";
import SYSTEM_DATA from '../../system.data';


import HealthCardList from '../../components/HealthCard/HealthCardList';

class Dashboard extends Component {

    constructor(props) {
        super(props);

        this.state = {
            healthApps: []
        }
    }

    async componentDidMount() {
        this.loadSocket();
        //this.loadMockData();
    }

    loadSocket() {
        const socket = socketIOClient('http://localhost:2222');
        socket.on("data", data => {
            this.setState({ healthApps: data }, () => {
                console.log('data', data);
            });
        })
    }

    loadMockData() {
        this.setState({ healthApps: SYSTEM_DATA });
    }

    render() {
        return (
            <div className="container">
                <HealthCardList applications={this.state.healthApps} />
            </div>
        );
    }
}

export default Dashboard;

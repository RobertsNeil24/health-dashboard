import React, { Component } from 'react';
import './Dashboard.scss';
//import socketIOClient from "socket.io-client";
import SYSTEM_DATA from '../../system.data';

import HealthCardList from '../../components/HealthCardList';

class Dashboard extends Component {

    constructor(props) {
        super(props);

        this.state = {
            healthApps: [],
        }
    }

    async componentDidMount() {

       // const socket = socketIOClient('http://24.154.155.182:2222');
        //Listen for data on the "outgoing data" namespace and supply a callback for what to do when we get one. In this case, we set a state variable
        // socket.on("data", data => this.setState({healthApps: data}));

        //socket.on("data", data => this.setState({ healthApps: data}));
        // socket = openSocket('http://24.154.155.182:2222');
        //console.log(socket);
       // const response = await axios.get('./health-apps.json');
        this.setState({ healthApps: SYSTEM_DATA });
    }

   

    render() {
        return (
            <div className="container">
                <HealthCardList applications={ this.state.healthApps } />
            </div>
        );
    }
}

export default Dashboard;

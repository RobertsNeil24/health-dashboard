import React, { Component } from 'react';
import axios from 'axios';
import './App.scss';
import CardList from './components/CardList';

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            healthApps: [],
        }
    }

    async componentDidMount() {
        const response = await axios.get('./health-apps.json');
        this.setState({ healthApps: response.data });
    }

    render() {
        return (
            <div className="container">
                <CardList apps={ this.state.healthApps } />
            </div>
        );
    }
}

export default App;

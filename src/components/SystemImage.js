import React, { Component } from 'react';

class SystemImage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            src: 'default'
        }
    }

    componentDidMount() {
        this.setSource();
    }

    setSource() {
        try {
            const src = require(`../images/${this.props.name.toLowerCase()}.svg`);
            this.setState({ src });
        }
        catch (err) {
            this.setState({ src: require(`../images/default.svg`) })
        }
    }

    render() {
        return <img src={this.state.src} alt="System Logo" className="logo" height="60px" />;
    }
}

export default SystemImage;
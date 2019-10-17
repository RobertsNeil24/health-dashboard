import React, { Component } from 'react';
//import Moment from 'react-moment';

class Timer extends Component {


    constructor(props) {
         super(props);
         this.state = {
             dateVal : ''
         }
    }

    updateTime(){
        let date = new Date();
        this.setState({ dateVal: date.setSeconds(new Date().getSeconds() + 1)});
        console.log(this.state.dateVal);
    }

    componentDidMount(){
        //setInterval(this.CalculateIncidentTime, 1000);
        this.CalculateIncidentTime();
    }

     CalculateIncidentTime() {
        let result;
        // current time
        const now = Math.floor(Date.now() / 1000);
        const date = this.props.datetime;
      //  let seconds = "0" + date.getSeconds();
        //const now = new Date().getTime();  
      //  const secondsSinceEpoch = Math.round(now.getTime() / 1000)  
       // const now = new Date() 
        console.log('now', now);
        console.log('seconds', date);
        // time since message was sent in seconds
        let delta = ( date - now);
        console.log('delta', delta);
        // format string
        if (delta < 10)
        {
            result = 'Now';
        }
        else if (delta < 60)
        { // sent in last minute
            const s = Math.floor(delta);
            result = ( s === 1 ? s + ' Second Ago' : s + ' Seconds Ago')  
        }
        else if (delta < 3600)
        { // sent in last hour
           const r = Math.floor(delta / 60);
           result = ( r === 1 ? r + ' Minute Ago' : r + ' Minutes Ago')  
            
        }
        else if (delta < 86400)
        { // sent on last day
            const h = Math.floor(delta / 3600);
            result = (h === 1 ? h + ' Hour Ago' : h + ' Hours ago');
        }
        else
        { // sent more than one day ago
            const d = Math.floor(delta / 86400);
            result = (d === 1 ? d + ' Day Ago' : d + ' Days ago');
        }

        this.setState({ dateVal:result });
    }


    render() {
     //   const together = "2019-10-17T09:30";

        return (
            <div>
                { this.state.dateVal }
                {/* <p><Moment interval={1000} diff={together} unit="seconds">{this.state.date}</Moment> Seconds</p> */}
            </div>
        );
    }
}

export default Timer;


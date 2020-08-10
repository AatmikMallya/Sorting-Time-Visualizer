import React from 'react';
import './SortingTimeVisualizer.css';
// https://github.com/peterdurham/timers-demo

export default class Timer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            status: this.props.status,
            timeStart: 0,
            time: 0
        };
    }

    // Starts whenever "Execute" button is pressed
    startTimer = () => {
        this.setState({
            status: true,
            timeStart: Date.now() - this.state.time,
            time: this.state.time
        });
        this.timer = setInterval(() => {
            this.setState({ time: Date.now() - this.state.timeStart });
        }, 10);
    }

    stopTimer = () => {
        this.setState({ status: false });
        clearInterval(this.timer);
    }

    resetTimer = () => {
        this.setState({
            timeStart: 0,
            time: 0
        });
    }

    setStatus = bool => {
        if (bool) {
            if (this.state.status) return;
            this.resetTimer();
            // Timer won't reset if this isn't in a setTimeout
            setTimeout(() => this.startTimer(), 0);
        }
        else {
            this.stopTimer();
        }
    }
    
    render = () => {
        const { time } = this.state;
        const centiseconds = ("0" + (Math.floor(time / 10) % 100)).slice(-2);
        const seconds = ("0" + (Math.floor(time / 1000) % 60)).slice(-2);
        const minutes = ("0" + (Math.floor(time / 60000) % 60)).slice(-2);
        return (
            <span id="timer-container" className="noselect">
                <span className="timer timer-icon">
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 296.228 296.228" enableBackground="new 0 0 296.228 296.228">
                        <g>
                            <path d="m167.364,48.003v-23.003h10.5c6.903,0 12.5-5.597 12.5-12.5s-5.596-12.5-12.5-12.5h-59.5c-6.903,0-12.5,5.597-12.5,12.5s5.597,12.5 12.5,12.5h10.5v23.003c-59.738,9.285-105.604,61.071-105.604,123.37-3.55271e-15,68.845 56.01,124.854 124.854,124.854s124.854-56.01 124.854-124.854c0-62.299-45.866-114.085-105.604-123.37zm-19.25,223.225c-55.06,0-99.854-44.795-99.854-99.854s44.795-99.854 99.854-99.854 99.854,44.795 99.854,99.854-44.794,99.854-99.854,99.854z"/>
                            <path d="m160.614,166.18v-58.889c0-6.903-5.597-12.5-12.5-12.5s-12.5,5.597-12.5,12.5v66.1c0,2.033 0.81,3.982 2.25,5.416l34.969,34.822c4.893,4.872 12.806,4.854 17.678-0.037 4.871-4.892 4.854-12.807-0.037-17.678l-29.86-29.734z"/>
                        </g>
                    </svg>
                </span>
                <span className="timer timer-display">
                    <span id="seconds">{minutes}:{seconds}</span>
                    <span id="centiseconds">{centiseconds}</span>
                </span>
            </span>
      );
    }
  }

import React from 'react';
import ReactDOM from 'react-dom'
import './main.css';

export default class Main extends React.Component {
    constructor() {
        super();

        this.state = {
            number: 0
        };

        setInterval(() => {
            this.setState({
                number:++this.state.number
            })

        }, 500);
    }

    render() {
        const n = this.state.number;
        return <span className="number">{n}</span>;
    }
}
import React from 'react';
import './main.css';

export default class Counter extends React.Component {
    constructor(props) {
        super(props);

        console.log("constructor");
    }

    render() {
        const {value} = this.props;
        const fontColor = value < 10 ? 'red' : 'gray';
        const fontSize = 600 - value * 20;

        const result = <div id="counterDiv" className="counter" style={{fontSize: fontSize, color: fontColor}}>{value}</div>;

        return result;
    }
}
import React from 'react';
import Counter from './counter';
import Explode from './explode';
import './main.css';

export default class Main extends React.Component {
    constructor() {
        super();

        this.state = {
            number: 30,
        };

        (this.tick = this.tick.bind(this))();
    }

    render() {
        const {number} = this.state;

        const explode = <Explode url={"https://media.giphy.com/media/12KiGLydHEdak8/giphy.gif"} />;
        const counter = <Counter value={number} />;

        return number > 0 ? counter : explode;
    }

    speak() {
        const {speechSynthesis} = window;
        const utterance = new SpeechSynthesisUtterance("Time is out! Ahahahaha!");

        speechSynthesis.speak(utterance);
    }

    tick() {
        const delayId = setInterval(() => {
            if (this.state.number <= 0) {
                clearInterval(delayId);
                this.speak();
            } else {
                this.setState({
                    number: --this.state.number,
                })
            }
        }, 100);
    }
}
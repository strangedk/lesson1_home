import React from 'react';

export default class Explode extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        let result = <img src={this.props.url} />;

        return result;
    }
}
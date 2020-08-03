import React from 'react';

import '../CSS/StatBar.css';

class StatBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (<div className="StatBar">
            <span className="stats">
                Speed: {this.props.statsValue.Speed}pts</span>
            <span className="stats">
                Stealth: {this.props.statsValue.Stealth}pts</span>
            <span className="stats">
                Strength: {this.props.statsValue.Strength}pts</span>
            <span className="stats">
                Durability: {this.props.statsValue.Durability}pts</span>
            <span className="stats">
                Skills: {this.props.statsValue.Skills}pts</span>
        </div>)
    }
}

export default StatBar;
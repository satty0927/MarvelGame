import React from 'react';

import '../CSS/ResetButton.css';

class ResetButton extends React.Component {
    render() {
        return (<div className="ResetButton">
            <div>
                <button id="resetButton" onClick={this.props.handleResetClick}>RESET</button>
            </div>
        </div>)
    }
}

export default ResetButton;
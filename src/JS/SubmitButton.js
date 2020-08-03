import React from 'react';

import '../CSS/SubmitButton.css';

class SubmitButton extends React.Component {
    render() {
        return (<div className="SubmitButton">
            <div>
                <button id="submitButton" onClick={this.props.handleCompareClick}>COMPARE</button>
            </div>
        </div>)
    }
}

export default SubmitButton;
import React from 'react';

import '../CSS/HeroBox.css';

class HeroBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        var heroList = this.props.DCHeroes;
        var list = heroList.map((ele) => {
            return <div className="cardDiv" key={ele.Key}>
                <div className="cardName">{ele.Name}</div>
                <div className="cardDesignation">{ele.Designation}</div>
                <img className="cardImage" alt="img" src={ele.Image}></img>
            </div>
        })
        return (
            <div className="HeroBox">
                {list}
            </div>
        )
    }
}

export default HeroBox;
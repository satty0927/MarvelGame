import React from 'react';

import '../CSS/HeroList.css';
//Its the big box.
class HeroList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            backgroundColor: "#00909e",
            width: "150px",
            borderRadius: "8px"
        }
    }

    render() {
        var heroList = this.props.heroList;
        var list = heroList.map((ele) => {
            if (ele.isHeroSelected) {
                return <div className="heroDiv" key={ele.Key} style={{ backgroundColor: this.state.backgroundColor, width: this.state.width, borderRadius: this.state.borderRadius }} onClick={() => this.props.handleClick(ele.Key)}>
                    <div className="eleName">{ele.Name}</div>
                    <div className="eleDesignation">{ele.Designation}</div>
                    <img className="eleImage" alt="img" src={ele.Image}></img>
                </div>
            } else {
                return <div className="heroDiv" key={ele.Key} onClick={() => this.props.handleClick(ele.Key)}>
                    <div className="eleName">{ele.Name}</div>
                    <div className="eleDesignation">{ele.Designation}</div>
                    <img className="eleImage" alt="img" src={ele.Image}></img>
                </div>
            }
        })
        return (<div className="HeroList">
            {list}
        </div>)
    }
}

export default HeroList;
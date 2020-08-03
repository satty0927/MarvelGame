import React from 'react';
import '../CSS/Game.css';

import StatBar from './StatBar';
import HeroList from './HeroList';
import SubmitButton from './SubmitButton';
import HeroBox from './HeroBox';
import ResetButton from './ResetButton';

const HeroListJSON = require('../JSON/Marvel.json');
const DCHeroListJSON = require('../JSON/Justice.json');

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            HeroList: [],
            DCHeroList: [],
            SelectCount: 0,
            CurrentHero: {
                Name: "",
                Designation: "",
                Image: "",
                Speed: "",
                Stealth: "",
                Strength: "",
                Durability: "",
                Skills: "",
                Key: "",
                isHeroSelected: false
            },
            ShownStats: {
                Speed: 0,
                Stealth: 0,
                Strength: 0,
                Durability: 0,
                Skills: 0
            },
            modalState: "none",
            winModal: "none",
            lostModal: "none"
        }
        this.componentDidMount = this.componentDidMount.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleResetButton = this.handleResetButton.bind(this);
        this.handleCompareButton = this.handleCompareButton.bind(this);
    }

    async handleCompareButton() {
        var filteredHeroes = this.state.HeroList.filter(val => val.isHeroSelected);
        var right_Speed = 0, right_Stealth = 0, right_Strength = 0, right_Durability = 0, right_Skills = 0;
        filteredHeroes.forEach(hero => {
            right_Speed = parseInt(right_Speed) + parseInt(hero.Speed);
            right_Stealth = parseInt(right_Stealth) + parseInt(hero.Stealth);
            right_Strength = parseInt(right_Strength) + parseInt(hero.Strength);
            right_Durability = parseInt(right_Durability) + parseInt(hero.Durability);
            right_Skills = parseInt(right_Skills) + parseInt(hero.Skills);
        });
        var isRightSpeed = false, isRightStealth = false, isRightStrength = false, isRightDurability = false, isRightSkills = false;
        if (parseInt(this.state.ShownStats.Speed) < right_Speed) {
            isRightSpeed = true;
        }
        if (parseInt(this.state.ShownStats.Stealth) < right_Stealth) {
            isRightStealth = true;
        }
        if (parseInt(this.state.ShownStats.Strength) < right_Strength) {
            isRightStrength = true;
        }
        if (parseInt(this.state.ShownStats.Durability) < right_Durability) {
            isRightDurability = true;
        }
        if (parseInt(this.state.ShownStats.Skills) < right_Skills) {
            isRightSkills = true;
        }
        if (isRightSpeed && isRightStealth && isRightDurability && isRightStrength && isRightSkills) {
            this.setState({
                winModal: "block"
            })
            setInterval(() => {
                this.setState({ modalState: "none" });
                window.location.reload();
            }, 5000);
        }
        else {
            this.setState({
                lostModal: "block"
            })
            setInterval(() => {
                this.setState({ lostModal: "none" });
                window.location.reload();
            }, 5000);
        }
    }

    async componentDidMount() {
        //This method if for setting the state with data from the JSON.
        for (var i = 0; i < HeroListJSON.length; i++) {
            await this.setState({
                CurrentHero: {
                    Name: HeroListJSON[i].Name,
                    Designation: HeroListJSON[i].Designation,
                    Image: HeroListJSON[i].Image,
                    Speed: HeroListJSON[i].Speed.toString(),
                    Stealth: HeroListJSON[i].Stealth.toString(),
                    Strength: HeroListJSON[i].Strength.toString(),
                    Durability: HeroListJSON[i].Durability.toString(),
                    Skills: HeroListJSON[i].Skills.toString(),
                    Key: Date.now(),
                    isHeroSelected: false
                }
            })
            var tempHeroList = [...this.state.HeroList, this.state.CurrentHero];
            this.setState({
                HeroList: tempHeroList
            })
        }
        //Update DC HeroList
        for (var j = 0; j < 5; j++) {
            var index = Math.floor(Math.random() * DCHeroListJSON.length);
            var DCHero = {
                Name: DCHeroListJSON[index].Name,
                Designation: DCHeroListJSON[index].Designation,
                Image: DCHeroListJSON[index].Image,
                Speed: DCHeroListJSON[index].Speed.toString(),
                Stealth: DCHeroListJSON[index].Stealth.toString(),
                Strength: DCHeroListJSON[index].Strength.toString(),
                Durability: DCHeroListJSON[index].Durability.toString(),
                Skills: DCHeroListJSON[index].Skills.toString(),
                Key: Date.now()
            }

            var tempList = [...this.state.DCHeroList, DCHero];
            await this.setState({
                DCHeroList: tempList
            })
        }
        //Update stats
        var statList = this.state.DCHeroList;
        var speed = 0, stealth = 0, strength = 0, durability = 0, skills = 0;
        statList.forEach(element => {
            speed = parseInt(speed) + parseInt(element.Speed);
            stealth = parseInt(stealth) + parseInt(element.Stealth);
            strength = parseInt(strength) + parseInt(element.Strength);
            durability = parseInt(durability) + parseInt(element.Durability);
            skills = parseInt(skills) + parseInt(element.Skills);
        });
        await this.setState({
            ShownStats: {
                Speed: speed,
                Stealth: stealth,
                Strength: strength,
                Durability: durability,
                Skills: skills
            }
        })
    }

    async handleResetButton() {
        //Update DC HeroList when the ResetButton is triggered.
        await this.setState({
            DCHeroList: []
        })
        for (var j = 0; j < 5; j++) {
            var index = Math.floor(Math.random() * DCHeroListJSON.length);
            var DCHero = {
                Name: DCHeroListJSON[index].Name,
                Designation: DCHeroListJSON[index].Designation,
                Image: DCHeroListJSON[index].Image,
                Speed: DCHeroListJSON[index].Speed.toString(),
                Stealth: DCHeroListJSON[index].Stealth.toString(),
                Strength: DCHeroListJSON[index].Strength.toString(),
                Durability: DCHeroListJSON[index].Durability.toString(),
                Skills: DCHeroListJSON[index].Skills.toString(),
                Key: Date.now()
            }
            var tempList = [...this.state.DCHeroList, DCHero];
            this.setState({
                DCHeroList: tempList
            })
        }
        //Update stats
        var statList = this.state.DCHeroList;
        var speed = 0, stealth = 0, strength = 0, durability = 0, skills = 0;
        statList.forEach(element => {
            speed = parseInt(speed) + parseInt(element.Speed);
            stealth = parseInt(stealth) + parseInt(element.Stealth);
            strength = parseInt(strength) + parseInt(element.Strength);
            durability = parseInt(durability) + parseInt(element.Durability);
            skills = parseInt(skills) + parseInt(element.Skills);
        });
        this.setState({
            ShownStats: {
                Speed: speed,
                Stealth: stealth,
                Strength: strength,
                Durability: durability,
                Skills: skills
            }
        })
    }

    handleClick(key) {
        //This method will update color for clicking in the card.
        var tempHeroList = this.state.HeroList;
        var isElementSelected = false;
        tempHeroList.forEach(element => {
            if (element.Key === key) {
                isElementSelected = element.isHeroSelected;
            }
        });
        if (!isElementSelected) {
            if (this.state.SelectCount < 5) {
                var currentSelectCount = this.state.SelectCount + 1;
                tempHeroList.forEach(element => {
                    if (element.Key === key) {
                        element.isHeroSelected = true;
                    }
                });
                this.setState({
                    HeroList: tempHeroList,
                    SelectCount: currentSelectCount
                })
            }
            else {
                //Set alert of only 5 cards selection required.
                this.setState({
                    modalState: "block"
                })
                setInterval(() => {
                    this.setState({ modalState: "none" });
                }, 3000);
            }
        }
        else {
            currentSelectCount = this.state.SelectCount - 1;
            tempHeroList.forEach(element => {
                if (element.Key === key) {
                    element.isHeroSelected = false;
                }
            });
            this.setState({
                HeroList: tempHeroList,
                SelectCount: currentSelectCount
            })
        }
    }

    render() {
        return (
            <div className="Game">
                <div id="WinModal" style={{ display: this.state.winModal }}>
                    <p>You Won!</p>
                </div>
                <div id="LostModal" style={{ display: this.state.lostModal }}>
                    <p>You Lose!</p>
                </div>
                <div id="Modal" style={{ display: this.state.modalState }}>
                    <p>Can Select only 5 heroes!<br></br>Unselect one if you wanna change</p>
                </div>
                <StatBar statsValue={this.state.ShownStats} />
                <div id="majorScreen">
                    <HeroList heroList={this.state.HeroList} handleClick={this.handleClick} />
                    <HeroBox DCHeroes={this.state.DCHeroList} />
                </div>
                <div id="ButtonSet">
                    <SubmitButton handleCompareClick={this.handleCompareButton} />
                    <ResetButton handleResetClick={this.handleResetButton} />
                </div>
            </div>
        )
    }
}

export default Game;
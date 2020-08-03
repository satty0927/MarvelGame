import React from 'react';
import '../CSS/Title.css';

class Title extends React.Component {
    render() {
        return (
            <div className="Title">
                <div id="major">
                    <img id="avengers" alt="avengers-logo" src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Symbol_from_Marvel%27s_The_Avengers_logo.svg"></img>
                    <div>Versus</div>
                    <img id="justice" alt="justice-logo" src="https://upload.wikimedia.org/wikipedia/commons/b/bb/Justice_League_2017_Movie_Logo.svg"></img>
                </div>
            </div >
        )
    }
}

export default Title;
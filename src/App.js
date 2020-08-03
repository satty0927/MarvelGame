import React from 'react';

import Title from './JS/Title';
import Game from './JS/Game';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Title />
        <Game />
      </div>
    );
  }
}

export default App;

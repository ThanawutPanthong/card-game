
import React, { Component } from 'react';
import './App.css';
import logo from './logo.svg';
import WordCard from './WordCard';
const word = ['Hello','React','Random','ComputerEngineer','GoodLuck'];
var item = word[Math.floor(Math.random()*word.length)];
class App extends Component {
  newgame = () => {
    window.location.reload(false);
  }
  render() {
 return (
 < div>
   <div className = "App">
   <h1 id="layer">Random Game</h1>
    <br></br>
    <WordCard value = {item.toUpperCase()}/>
    <br></br>
    <br></br>
    <h1 id ="results">Let's Play</h1>
    </div>
    <button id="newgame" className="button" onClick={this.newgame}>NEW GAME</button>
  </div>
 );
 }
}
export default App;


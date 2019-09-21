
import React, { Component } from 'react';
import './App.css';
import logo from './logo.svg';
import WordCard from './WordCard';
//import CountDown from './CountDown';
const word = ['Hello','React','Random','ComputerEngineer','GoodLuck'];
var item = word[Math.floor(Math.random()*word.length)];
class App extends Component {
  newgame = () => {
    window.location.reload(false);
  }
  close = () =>{
    window.close();
  }
  render() {
 return (
 < div>
   <div className = "App">
   <h1 id="layer">Random Game</h1>
   <br></br>
    <br></br>
    <WordCard value = {item.toUpperCase()}/>
    <br></br>
    <br></br>
    <h1 id ="results">Let's Play</h1>
    <h1 id ="wordenter"></h1>
    </div>
    <button id="newgame" className="button" onClick={this.newgame}>NEW GAME</button>
    <button className ="button" onClick={this.close}>Quit</button>
  </div>
 );
 }
}
export default App;


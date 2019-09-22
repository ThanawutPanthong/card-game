
import React, { Component } from 'react';
import './App.css';
import logo from './logo.svg';
import WordCard from './WordCard';
//import CountDown from './CountDown';
const word = ['Hello','React','Random','ComputerEngineer','GoodLuck'];
var item = word[Math.floor(Math.random()*word.length)];
class App extends Component {
  constructor(){
    super();
    this.state = {requestAnswer: false,requestHint: false}
  }
  newgame = () => {
    window.location.reload(false);
  }
  close = () =>{
    window.close();
  }

  requestAnswer = () =>{
    this.setState({requestAnswer: true});
  }

  requestHint = () =>{
    this.setState({requestHint: true});
  }

  getHint = (hint) =>{
    document.getElementById('wordenter').innerHTML = `Hint is : ${hint}`
  }

  getAnswer = (answer) =>{
    document.getElementById('wordenter').innerHTML = `Answer is : ${answer}`
  }
  render() {
 return (
 < div>
   <div className = "App">
   <h1 id="layer">Random Game</h1>
   <br></br>
    <br></br>
    <WordCard value = {item.toUpperCase()}
    getAnswer = {this.getAnswer}
    getHint = {this.getHint}
    requestAnswer = {this.state.requestAnswer}
    requestHint ={this.state.requestHint}/>
    <br></br>
    <br></br>
    <h1 id ="results">Let's Play</h1>
    <h1 id ="wordenter"></h1>
    </div>
    <button id="newgame" className="button" onClick={this.newgame}>NEW GAME</button>
    <button id="answer" className="button" onClick = {this.requestAnswer}>Answer</button>
    <br></br><br></br>
    <button id ="hint" className = "button" onClick={this.requestHint}>Hint</button>
    <br></br><br></br>
    <button className ="button" onClick={this.close}>Quit</button>
  </div>
 );
 }
}
export default App;


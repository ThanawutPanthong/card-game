
import React, { Component } from 'react';
import './App.css';
import logo from './logo.svg';
import WordCard from './WordCard';
const word = ['Hello','React'];
var item = word[Math.floor(Math.random()*word.length)];
class App extends Component {
 render() {
 return (
 < div className = "App">
   <h1 id="layer">Random Game</h1>
    <br></br>
    <WordCard value = {item.toUpperCase()}/>
    <br></br>
    <br></br>
    <h1 id ="results">Let's Play</h1>
 </div>
 );
 }
}
export default App;


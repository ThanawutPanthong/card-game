
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
   <h2 id="layer">Random Game</h2>
    <WordCard value = {item.toUpperCase()}/>
    <h2 id ="results"></h2>
 </div>
 );
 }
}
export default App;


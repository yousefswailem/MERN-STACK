import { Router } from '@reach/router';
import './App.css';
import Hello from './components/Hello';
import Home from './components/Home'
import Num from './components/Num'
import Color from './components/Color'
import React from 'react'


function App() {

  return (
    <div className="App">
      <Router>
     
      <Home path="/home" />
      <Num path="/:id" />
      <Hello path="/word/:word" />
      <Color path="/:color/:back" />

      </Router>
    </div>
  );
}

export default App;

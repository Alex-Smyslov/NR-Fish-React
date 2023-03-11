import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Description } from './Description';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Description />
      </header>
    </div>
  );
}

export default App;

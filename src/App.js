import React from 'react';
import logo from './logo.svg';
import './App.css';
import NotificationButton from './NotificationButton';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React</h1>
      </header>
      <p className="App-intro">
        To get started, edit <code>src/App.js</code> and save to reload.
      </p>
      <NotificationButton />
    </div>
  );
}

export default App;

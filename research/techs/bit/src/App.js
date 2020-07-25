import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from '@bit/mui-org.material-ui.button'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Button>hey</Button>
      </header>
    </div>
  );
}

export default App;

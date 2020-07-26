import React from 'react';
import './App.css';
import Header from '@bit/silver-birder.sample.header'
import Button from '@bit/mui-org.material-ui.button'
import Footer from '@bit/silver-birder.sample.footer'

function App() {
  return (
    <div className="App">
        <Header title="Title"></Header>
        <Button>hey</Button>
        <Footer title="Title"></Footer>
    </div>
  );
}

export default App;

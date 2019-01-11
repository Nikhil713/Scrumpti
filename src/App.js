import React, { Component } from 'react';
import './App.css';
import Navbar from './components/navbar/navbar.js'
import Body from './components/body/body.js'
import Footer from './components/footer/footer.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Body />
        <Footer />
      </div>
    );
  }
}

export default App;

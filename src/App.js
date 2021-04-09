import React, { Component } from 'react';
import Header from './Components/Header';
import Body from './Components/Body'
import Footer from './Components/Footer'
import './Components/styles/App.css'

function App() {
  return (
    <div className="App">
      <Header className="Header"/>
      <Body className="Body"/>
      <Footer className="Footer"/>
    </div>
    
  );
}
 
export default App;

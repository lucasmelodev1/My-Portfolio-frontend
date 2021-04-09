import React from 'react';
import Presentation from './Components/Presentation'
import About from './Components/About'
import Experiences from './Components/Experiences'
import './styles/Body.css'
import Technology from './Components/Technology'

const Body = () => {
  return (
    <div className="Body">
      <Presentation />
      <About />
      <Experiences />
      <Technology />
    </div>
  );
}
 
export default Body;
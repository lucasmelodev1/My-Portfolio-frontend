import React from 'react';
import './styles/Presentation.css'
import topWave from '../../img/wave (1).png'
import arrowDown from '../../img/arrow-down.png'
import Fade from 'react-reveal/Fade'

const Presentation = () => {
  return (
    <div className="Presentation">
      <img src={topWave} alt="" className="top-wave"/>
        <div className="Presentation-title">
          <div className="fading-title">
            <Fade duration={1100} delay={600}><h1 className="hello">Hello,&nbsp;</h1></Fade>
            <Fade duration={1100} delay={1600}><h1>I'm Lucas</h1></Fade>
          </div>
          <Fade duration={1100} delay={2600}><h2>A full-stack developer</h2></Fade>
        </div>
        <img src={arrowDown} alt="" className="arrow-down"/>
    </div>
  );
}
 
export default Presentation;
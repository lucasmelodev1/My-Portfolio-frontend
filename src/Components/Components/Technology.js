import React from 'react';
import './styles/Technology.css'
import nodeIcon from '../../img/node-js-icon.png'
import reactIcon from '../../img/react-icon.png'
import goIcon from '../../img/go-icon.png'
import pythonIcon from '../../img/python-icon.png'
import Fade from 'react-reveal/Fade'

const Technology = () => {
  return (
    <div className="Technology" id="contact-anchor">
      <div className="Technology-title">
        <Fade bottom><h1>Technologies i use</h1></Fade>
      </div>
      <Fade bottom cascade duration={1500}><div className="technologies-images">
        <img src={nodeIcon} alt=""/>
        <img src={reactIcon} alt=""/>
        <img src={goIcon} alt="" className="go-icon"/>
        <img src={pythonIcon} alt=""/>
      </div></Fade>
    </div>
  );
}
 
export default Technology;
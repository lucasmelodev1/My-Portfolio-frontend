import React from 'react';
import './styles/About.css'
import bottomWave from '../../img/wave.png'
import aboutPic from '../../img/about-photo.png'
import githubIcon from '../../img/github-icon.png'
import linkedinIcon from '../../img/linkedin-icon.png'
import twitterIcon from '../../img/twitter-icon.png'
import Fade from 'react-reveal/Fade'

const About = () => {
  return (
    <div className="About" id="about-anchor">
      <img src={bottomWave} alt="" className="bottom-wave"/>
      <div className="About-title">
      <Fade top><h1>About</h1></Fade>
      </div>
      <Fade top cascade><div className="about-header">
        <div className="name-and-medias">
          <div className="name">
            <h3>Lucas Gabriel de Melo Rodrigues</h3>
          </div>
          <div className="medias">
            <h3>Social Medias: </h3>
            <a href="https://github.com/musicianrpr" target="_blank"><img src={githubIcon} alt="" className="github-icon"/></a>
            <a href="https://www.linkedin.com/in/lucas-gabriel-2011571b4/" target="_blank"><img src={linkedinIcon} alt="" className="linkedin-icon"/></a>
            <a href="https://twitter.com/mscnluxas" target="_blank"><img src={twitterIcon} alt=""/></a>
          </div>
        </div>
        <img src={aboutPic} alt="" />
      </div></Fade>
    </div>
  );
}
 
export default About;
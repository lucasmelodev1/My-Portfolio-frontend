import React from 'react';
import Experience from './Experience'
import './styles/Experiences.css'
import Fade from 'react-reveal/Fade'
import experience1 from '../../img/experience1.jpg'
import experience2 from '../../img/experience2.jpg'
import experience3 from '../../img/experience3.jpg'

const Experiences = () => {
  const description1 = 'To make this portfolio i used React and Node.js. The barriers i broke include Back-end and Front-end integration using Express and Axios libraries, CSS animations and React animation packages, Javascript dynamism and deploy stuff. I went from 0 to a whole website, solving the problems modernly. This project taught me the complexity of a deploy and the huge variability of options to solve one problem'
  const description2 = 'In this registration website i needed to learn NoSQL database structure and implementation, using programming good habits to make a clean and functional code. Also i used Express and Axios to implement back-end and front-end together for the first time'
  return (
    <div className="Experience">
      <div className="Experience-title">
        <Fade left><h1>Experiences</h1></Fade>
      </div>
      <div className="experiences">
      <Fade left delay={400}><Experience className="experience-element" description={description1} title="My Portfolio" img={experience1}/></Fade>
      <Fade left delay={200}><Experience className="experience-element" description={description1} title="Register Website" img={experience2}/></Fade>
      <Fade left><Experience className="experience-element" description={description1} title="Wine Artificial Intelligence" img={experience3}/></Fade>
      </div>
    </div>
  );
}
 
export default Experiences;
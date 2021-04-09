import React from 'react';
import { Experiences } from '../implementations/provisory'
import './styles/Experience.css'

const Experience = (props) => {
  const experience = Experiences[props.title]
  return (
    <div className="Experience-element" id="experience-anchor">
      <header className="header">
        <img src={props.img} alt={props.title}/>
        <h2 className="title">{props.title}</h2>
        <hr style={{width: '5rem'}}></hr>
      </header>
      <footer className="footer">
        <div className="description">
          <p>{props.description}</p>
        </div>
        <a className="link" href={props.link}><button className="button">
          See on Github
        </button></a>
      </footer>
    </div>
  );
}
 
export default Experience;
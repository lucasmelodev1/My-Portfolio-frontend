import React from 'react';
import logo from '../img/logo.png'
import './styles/Header.css'
import { Link } from 'react-scroll';

const Header = () => {
  return (
    /* #0d0c0c    #1f2023    #16a4d0    #7c5cc9    #f408c1 */
    <header className="Header">
      <div className="logo-div">
        <img src={logo} style={{height: "5rem"}} alt=""/>
      </div>
      <div className="Header-buttons">
        <Link
        to="about-anchor"
        smooth={true}
        duration={1000}><button>{'<'} About /{'>'}</button></Link>
        <Link
        to="experience-anchor"
        smooth={true}
        duration={1500}
        offset={-240}><button>{'<'} Experience /{'>'}</button></Link>
        <Link
        to="contact-anchor"
        smooth={true}
        duration={2000}
        offset={50}><button>{'<'} Contact /{'>'}</button></Link>
      </div>
    </header>
  );
}
  
export default Header

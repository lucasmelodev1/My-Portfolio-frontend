import React from 'react';
import './styles/Footer.css'

const Footer = () => {
  return (
    <div className="Footer">
      <div className="name">
        <h2>Lucas Gabriel de Melo Rodrigues</h2>
        <h3>Web Developer</h3>
      </div>
      <div className="info">
        <div className="number">
          <h2>Number</h2>
          <h3>+55 84 99914 4328</h3>
        </div>
        <div className="email">
          <h2>Email</h2>
          <h3>lucasgabrielmelorodrigues@gmail.com</h3>
        </div>
      </div>
    </div>
  );
}
 
export default Footer;
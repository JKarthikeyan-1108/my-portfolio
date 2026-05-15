import React from 'react';
import Section from './Section';

export default function Contact() {
  return (
    <Section id="contact" title="08. What's Next? Get In Touch">
      <p style={{ marginBottom: "10px" }}>
        <i className="fas fa-map-marker-alt" style={{ width: "25px", color: "#00ffff" }}></i> Chennai
      </p>
      <p style={{ marginBottom: "10px" }}>
        <i className="fas fa-envelope" style={{ width: "25px", color: "#00ffff" }}></i> 
        <a href="mailto:karthikeyanj0608@gmail.com" style={{ color: "white", textDecoration: "none" }} onMouseOver={(e) => e.target.style.color='#00ffff'} onMouseOut={(e) => e.target.style.color='white'}>karthikeyanj0608@gmail.com</a>
      </p>
      <p style={{ marginBottom: "20px" }}>
        <i className="fas fa-phone" style={{ width: "25px", color: "#00ffff" }}></i> 
        <a href="tel:+919442725891" style={{ color: "white", textDecoration: "none" }} onMouseOver={(e) => e.target.style.color='#00ffff'} onMouseOut={(e) => e.target.style.color='white'}>+91 9442725891</a>
      </p>
      <div className="social-icons">
        <a href="https://www.linkedin.com/in/karthikeyan-j-387a4b297" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin fa-2x"></i>
        </a>
        <a href="https://github.com/JKarthikeyan-1108" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github fa-2x"></i>
        </a>
      </div>
    </Section>
  );
}

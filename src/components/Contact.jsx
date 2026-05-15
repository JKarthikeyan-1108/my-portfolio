import React from 'react';
import Section from './Section';
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <Section id="contact" title="08. What's Next? Get In Touch">
      <div className="flex flex-col items-center text-center max-w-[600px] mx-auto">
        <p className="text-slate text-lg mb-10">
          Although I'm not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>

        <div className="flex flex-col items-start bg-navy-light p-8 rounded-lg border border-navy-lighter shadow-lg mb-10 w-full">
          <p className="text-slate mb-4 flex items-center gap-4">
            <i className="fas fa-map-marker-alt text-cyan text-xl w-6"></i> 
            <span className="font-mono">Chennai, India</span>
          </p>
          <p className="text-slate mb-4 flex items-center gap-4">
            <i className="fas fa-envelope text-cyan text-xl w-6"></i> 
            <a href="mailto:karthikeyanj0608@gmail.com" className="font-mono text-slate-light hover:text-cyan transition-colors">karthikeyanj0608@gmail.com</a>
          </p>
          <p className="text-slate flex items-center gap-4">
            <i className="fas fa-phone text-cyan text-xl w-6"></i> 
            <a href="tel:+919442725891" className="font-mono text-slate-light hover:text-cyan transition-colors">+91 9442725891</a>
          </p>
        </div>

        <a href="mailto:karthikeyanj0608@gmail.com" className="inline-block px-7 py-4 border border-cyan rounded text-cyan font-mono hover:bg-cyan-light transition-colors duration-300">
          Say Hello
        </a>

        <div className="flex gap-6 mt-16">
          <a href="https://www.linkedin.com/in/karthikeyan-j-387a4b297" target="_blank" rel="noopener noreferrer" className="text-slate hover:text-cyan hover:-translate-y-1 transition-all duration-300">
            <i className="fab fa-linkedin fa-2x"></i>
          </a>
          <a href="https://github.com/JKarthikeyan-1108" target="_blank" rel="noopener noreferrer" className="text-slate hover:text-cyan hover:-translate-y-1 transition-all duration-300">
            <i className="fab fa-github fa-2x"></i>
          </a>
        </div>
      </div>
    </Section>
  );
}

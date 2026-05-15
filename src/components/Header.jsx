import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const textArray = ["Computer Science & Business Systems Student", "Java & MERN Stack Enthusiast", "Problem Solver"];

export default function Header() {
  const [currentText, setCurrentText] = useState("");
  const [count, setCount] = useState(0);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const type = () => {
      if (count === textArray.length) {
        setCount(0);
        return;
      }
      const fullText = textArray[count];
      
      setCurrentText(fullText.slice(0, index + 1));
      
      if (index + 1 === fullText.length) {
        setTimeout(() => {
          setCount((prev) => prev + 1);
          setIndex(0);
        }, 1500);
      } else {
        setIndex((prev) => prev + 1);
      }
    };

    const timer = setTimeout(type, 100);
    return () => clearTimeout(timer);
  }, [count, index]);

  return (
    <motion.header
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div style={{ color: 'var(--accent)', fontFamily: 'var(--font-mono)', marginBottom: '20px' }}>Hi, my name is</div>
      <h1>J Karthikeyan.</h1>
      <div className="subtitle">I build things for the web & AI.</div>
      <div className="typing" id="typing">&gt; {currentText}<span className="cursor">_</span></div>
      
      <div className="code-snippet">
        <div><span className="keyword">const</span> <span className="function">portfolio</span> = {'{'}</div>
        <div style={{ paddingLeft: '20px' }}>name: <span className="string">'J Karthikeyan'</span>,</div>
        <div style={{ paddingLeft: '20px' }}>role: <span className="string">'Full-stack Developer'</span>,</div>
        <div style={{ paddingLeft: '20px' }}>passions: [<span className="string">'React'</span>, <span className="string">'Node.js'</span>, <span className="string">'AI'</span>]</div>
        <div>{'}'};</div>
      </div>

      <div>
        <a className="btn" href="resume.pdf" target="_blank" rel="noopener noreferrer">
          <i className="fa fa-download"></i> Download Resume
        </a>
      </div>
    </motion.header>
  );
}

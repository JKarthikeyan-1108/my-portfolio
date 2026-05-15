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
      className="min-h-screen flex flex-col justify-center px-[5%] md:px-[10%] text-left max-w-[1200px] mx-auto"
    >
      <div className="text-cyan font-mono mb-5">Hi, my name is</div>
      <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-slate-light leading-tight m-0">J Karthikeyan.</h1>
      <div className="text-3xl sm:text-5xl md:text-6xl font-bold text-slate leading-tight mt-2">I build things for the web & AI.</div>
      <div className="font-mono text-cyan mt-8 text-sm sm:text-lg">&gt; {currentText}<span className="animate-pulse">_</span></div>
      
      <div className="bg-navy-light p-6 rounded-lg font-mono text-sm sm:text-base text-slate border-l-2 border-purple mt-8 max-w-[600px] shadow-lg shadow-black/20">
        <div><span className="text-purple">const</span> <span className="text-cyan">portfolio</span> = {'{'}</div>
        <div className="pl-5">name: <span className="text-[#98c379]">'J Karthikeyan'</span>,</div>
        <div className="pl-5">role: <span className="text-[#98c379]">'Full-stack Developer'</span>,</div>
        <div className="pl-5">passions: [<span className="text-[#98c379]">'React'</span>, <span className="text-[#98c379]">'Node.js'</span>, <span className="text-[#98c379]">'AI'</span>]</div>
        <div>{'}'};</div>
      </div>

      <div className="mt-10">
        <a 
          className="inline-block px-7 py-3 border border-cyan rounded text-cyan font-mono text-sm hover:bg-cyan-light transition-colors duration-300 shadow-lg shadow-cyan/10" 
          href="resume.pdf" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <i className="fa fa-download mr-2"></i> Download Resume
        </a>
      </div>
    </motion.header>
  );
}

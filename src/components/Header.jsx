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
      
      <motion.div 
        className="bg-navy-light p-6 rounded-lg font-mono text-sm sm:text-base text-slate border-l-2 border-purple mt-8 max-w-[600px] shadow-lg shadow-black/20 transform-gpu"
        whileHover={{ scale: 1.02, rotateY: 5, rotateX: 2 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <div><span className="text-purple">const</span> <span className="text-cyan">portfolio</span> = {'{'}</div>
        <div className="pl-5">name: <span className="text-[#98c379]">'J Karthikeyan'</span>,</div>
        <div className="pl-5">role: <span className="text-[#98c379]">'Full-stack Developer'</span>,</div>
        <div className="pl-5">passions: [<span className="text-[#98c379]">'React'</span>, <span className="text-[#98c379]">'Node.js'</span>, <span className="text-[#98c379]">'AI'</span>]</div>
        <div>{'}'};</div>
      </motion.div>

      <motion.div 
        className="mt-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <motion.a 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center px-8 py-4 border-2 border-cyan rounded-md text-cyan font-mono text-sm hover:bg-cyan-light transition-colors duration-300 shadow-[0_0_15px_rgba(100,255,218,0.15)] hover:shadow-[0_0_20px_rgba(100,255,218,0.3)]" 
          href="J_Karthikeyan_Resume.pdf" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <i className="fa fa-download mr-3 text-lg"></i> Download Resume
        </motion.a>
      </motion.div>
    </motion.header>
  );
}

import React from 'react';
import Section from './Section';
import { motion } from 'framer-motion';

export default function Projects() {
  return (
    <Section id="projects" title="04. Projects">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <motion.div className="bg-navy-light rounded-lg p-8 flex flex-col justify-between h-full border border-transparent hover:border-cyan hover:-translate-y-2 transition-all duration-300 shadow-lg hover:shadow-cyan/10" whileHover={{ y: -8 }}>
          <div>
            <div className="flex justify-between items-center mb-6">
              <i className="far fa-folder-open text-4xl text-cyan"></i>
              <a href="https://github.com/JKarthikeyan-1108/mini-ecommerce" target="_blank" rel="noopener noreferrer" className="text-slate hover:text-cyan transition-colors">
                <i className="fab fa-github text-2xl"></i>
              </a>
            </div>
            <h3 className="text-2xl font-bold text-slate-light mb-4">Mini Ecommerce Website</h3>
            <p className="text-slate mb-4">Developed a full-stack e-commerce application with product browsing, user authentication, and shopping cart functionality. Built REST APIs using Node.js and Express.js to handle application requests and interact with MongoDB. Implemented JWT-based authentication to support secure user access.</p>
          </div>
          <div className="flex flex-wrap gap-3 mt-4">
            <span className="font-mono text-xs text-cyan bg-cyan-light px-3 py-1 rounded-full">React</span>
            <span className="font-mono text-xs text-cyan bg-cyan-light px-3 py-1 rounded-full">Node.js</span>
            <span className="font-mono text-xs text-cyan bg-cyan-light px-3 py-1 rounded-full">Express.js</span>
            <span className="font-mono text-xs text-cyan bg-cyan-light px-3 py-1 rounded-full">MongoDB</span>
          </div>
        </motion.div>

        <motion.div className="bg-navy-light rounded-lg p-8 flex flex-col justify-between h-full border border-transparent hover:border-cyan hover:-translate-y-2 transition-all duration-300 shadow-lg hover:shadow-cyan/10" whileHover={{ y: -8 }}>
          <div>
            <div className="flex justify-between items-center mb-6">
              <i className="far fa-folder-open text-4xl text-cyan"></i>
              <a href="https://github.com/JKarthikeyan-1108/FINTRACK" target="_blank" rel="noopener noreferrer" className="text-slate hover:text-cyan transition-colors">
                <i className="fab fa-github text-2xl"></i>
              </a>
            </div>
            <h3 className="text-2xl font-bold text-slate-light mb-4">FinTrack – Personal Finance Tracker</h3>
            <p className="text-slate mb-4">Developed a finance dashboard for tracking income, expenses, and budgets with interactive Recharts visualizations. Implemented password hashing and JWT-based authentication, and containerized the application using Docker.</p>
          </div>
          <div className="flex flex-wrap gap-3 mt-4">
            <span className="font-mono text-xs text-cyan bg-cyan-light px-3 py-1 rounded-full">React</span>
            <span className="font-mono text-xs text-cyan bg-cyan-light px-3 py-1 rounded-full">Node.js</span>
            <span className="font-mono text-xs text-cyan bg-cyan-light px-3 py-1 rounded-full">MongoDB</span>
          </div>
        </motion.div>

        <motion.div className="bg-navy-light rounded-lg p-8 flex flex-col justify-between h-full border border-transparent hover:border-cyan hover:-translate-y-2 transition-all duration-300 shadow-lg hover:shadow-cyan/10" whileHover={{ y: -8 }}>
          <div>
            <div className="flex justify-between items-center mb-6">
              <i className="far fa-folder-open text-4xl text-cyan"></i>
              <a href="https://github.com/JKarthikeyan-1108/expense-tracker" target="_blank" rel="noopener noreferrer" className="text-slate hover:text-cyan transition-colors">
                <i className="fab fa-github text-2xl"></i>
              </a>
            </div>
            <h3 className="text-2xl font-bold text-slate-light mb-4">Expense Tracker (Python)</h3>
            <p className="text-slate mb-4">Python expense tracking system with categorized analytics and automated monthly reporting across 10+ categories using Matplotlib. Tested with pytest for core calculation modules.</p>
          </div>
          <div className="flex flex-wrap gap-3 mt-4">
            <span className="font-mono text-xs text-cyan bg-cyan-light px-3 py-1 rounded-full">Python</span>
            <span className="font-mono text-xs text-cyan bg-cyan-light px-3 py-1 rounded-full">Matplotlib</span>
            <span className="font-mono text-xs text-cyan bg-cyan-light px-3 py-1 rounded-full">pytest</span>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}

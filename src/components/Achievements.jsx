import React from 'react';
import Section from './Section';
import { motion } from 'framer-motion';

export default function Achievements() {
  return (
    <Section id="achievements" title="05. Achievements">
      <motion.div className="bg-navy-light rounded-lg p-8 border border-transparent hover:border-cyan hover:-translate-y-2 transition-all duration-300 shadow-lg mb-6" whileHover={{ y: -8 }}>
        <div className="flex items-center mb-6">
          <i className="fas fa-trophy text-4xl text-purple"></i>
        </div>
        <h3 className="text-2xl font-bold text-slate-light mb-4 leading-tight">Amazon ML Summer School 2026</h3>
        <p className="text-cyan font-mono text-sm mb-4">Jul – Aug 2026</p>
        <ul className="list-disc ml-5 text-slate">
            <li className="mb-2">One of around 3,000 participants selected for Amazon ML Summer School 2026, out of nearly 2 lakh (200,000) students who registered.</li>
            <li>An integrated learning program on Machine Learning concepts and applications, held virtually across July 11–26 and August 1–2, 2026.</li>
        </ul>
      </motion.div>

      <motion.div className="bg-navy-light rounded-lg p-8 border border-transparent hover:border-cyan hover:-translate-y-2 transition-all duration-300 shadow-lg" whileHover={{ y: -8 }}>
        <div className="flex items-center mb-6">
          <i className="fas fa-certificate text-4xl text-purple"></i>
        </div>
        <h3 className="text-2xl font-bold text-slate-light mb-4 leading-tight">Google Study Jams (GDG)</h3>
        <ul className="list-disc ml-5 text-slate">
            <li>Took part in Google Study Jams, organized under Google Developer Groups (GDG).</li>
        </ul>
      </motion.div>
    </Section>
  );
}

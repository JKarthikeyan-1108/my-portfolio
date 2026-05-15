import React from 'react';
import Section from './Section';
import { motion } from 'framer-motion';

export default function Certifications() {
  return (
    <Section id="certifications" title="07. Certifications">
      <div className="timeline-line">
        <motion.div className="relative mb-10" whileHover={{ x: 10 }}>
          <div className="timeline-dot"></div>
          <div className="font-mono text-cyan text-sm mb-1">Aug 2025</div>
          <div className="text-lg font-semibold text-slate-light">Oracle Cloud Infrastructure 2025</div>
          <div className="text-slate">AI Foundations Associate & Foundations Associate</div>
        </motion.div>
        
        <motion.div className="relative mb-10" whileHover={{ x: 10 }}>
          <div className="timeline-dot"></div>
          <div className="font-mono text-cyan text-sm mb-1">Jul-Sep 2025</div>
          <div className="text-lg font-semibold text-slate-light">NPTEL Online Certification</div>
          <div className="text-slate">Introduction to Machine Learning (IIT Kharagpur)</div>
        </motion.div>

        <motion.div className="relative mb-10" whileHover={{ x: 10 }}>
          <div className="timeline-dot"></div>
          <div className="font-mono text-cyan text-sm mb-1">Feb 2024</div>
          <div className="text-lg font-semibold text-slate-light">Data Science for Beginners</div>
          <div className="text-slate">NASSCOM (Gold - 89%)</div>
        </motion.div>

        <motion.div className="relative mb-6" whileHover={{ x: 10 }}>
          <div className="timeline-dot"></div>
          <div className="font-mono text-cyan text-sm mb-1">Dec 2023</div>
          <div className="text-lg font-semibold text-slate-light">Code-Galatta</div>
          <div className="text-slate">Certified in C, C++, Java, Python in DSA</div>
        </motion.div>
      </div>
    </Section>
  );
}

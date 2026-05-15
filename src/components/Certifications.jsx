import React from 'react';
import Section from './Section';
import { motion } from 'framer-motion';

export default function Certifications() {
  return (
    <Section id="certifications" title="07. Certifications">
      <div className="timeline">
        <motion.div className="timeline-item" whileHover={{ x: 10 }}>
          <div className="timeline-date">Aug 2025</div>
          <div className="timeline-title">Oracle Cloud Infrastructure 2025</div>
          <div className="timeline-subtitle">AI Foundations Associate & Foundations Associate</div>
        </motion.div>
        
        <motion.div className="timeline-item" whileHover={{ x: 10 }}>
          <div className="timeline-date">Jul-Sep 2025</div>
          <div className="timeline-title">NPTEL Online Certification</div>
          <div className="timeline-subtitle">Introduction to Machine Learning (IIT Kharagpur)</div>
        </motion.div>

        <motion.div className="timeline-item" whileHover={{ x: 10 }}>
          <div className="timeline-date">Feb 2024</div>
          <div className="timeline-title">Data Science for Beginners</div>
          <div className="timeline-subtitle">NASSCOM (Gold - 89%)</div>
        </motion.div>

        <motion.div className="timeline-item" whileHover={{ x: 10 }}>
          <div className="timeline-date">Dec 2023</div>
          <div className="timeline-title">Code-Galatta</div>
          <div className="timeline-subtitle">Certified in C, C++, Java, Python in DSA</div>
        </motion.div>
      </div>
    </Section>
  );
}

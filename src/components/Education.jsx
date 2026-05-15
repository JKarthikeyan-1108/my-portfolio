import React from 'react';
import Section from './Section';
import { motion } from 'framer-motion';

export default function Education() {
  return (
    <Section id="education" title="02. Education">
      <div className="timeline">
        <motion.div className="timeline-item" whileHover={{ x: 10 }}>
          <div className="timeline-date">Sept 2023 - Present</div>
          <div className="timeline-title">B.Tech in Computer Science and Business Systems</div>
          <div className="timeline-subtitle">Panimalar Engineering College, Chennai</div>
          <p>CGPA: 8.81 (Up to 5th Sem)</p>
        </motion.div>
        
        <motion.div className="timeline-item" whileHover={{ x: 10 }}>
          <div className="timeline-date">2022 - 2023</div>
          <div className="timeline-title">SSLC</div>
          <div className="timeline-subtitle">Sri Chaitanya School, Hosur</div>
          <p>Percentage: 70%</p>
        </motion.div>

        <motion.div className="timeline-item" whileHover={{ x: 10 }}>
          <div className="timeline-date">2014 - 2021</div>
          <div className="timeline-title">HSLC</div>
          <div className="timeline-subtitle">Mathakondapalli Model School, Hosur</div>
          <p>Percentage: 65%</p>
        </motion.div>
      </div>
    </Section>
  );
}

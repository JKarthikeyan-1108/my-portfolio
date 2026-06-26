import React from 'react';
import Section from './Section';
import { motion } from 'framer-motion';

export default function Education() {
  return (
    <Section id="education" title="02. Education">
      <div className="timeline-line">
        <motion.div className="relative mb-12" whileHover={{ x: 10 }}>
          <div className="timeline-dot"></div>
          <div className="font-mono text-cyan text-sm mb-2">Sept 2023 - Present</div>
          <div className="text-xl font-semibold text-slate-light">B.Tech in Computer Science and Business Systems</div>
          <div className="text-lg text-slate mb-3">Panimalar Engineering College, Chennai</div>
          <p className="text-slate">CGPA: 8.81 (Up to 5th Sem)</p>
        </motion.div>
        
        <motion.div className="relative mb-12" whileHover={{ x: 10 }}>
          <div className="timeline-dot"></div>
<<<<<<< HEAD
          <div className="font-mono text-cyan text-sm mb-2">2022 - 2023</div>
          <div className="text-xl font-semibold text-slate-light">HSLC</div>
          <div className="text-lg text-slate mb-3">Sri Chaitanya School, Hosur</div>
          <p className="text-slate">Percentage: 70%</p>
=======
          <div className="font-mono text-cyan text-sm mb-2">2014 - 2021</div>
          <div className="text-xl font-semibold text-slate-light">SSLC</div>
          <div className="text-lg text-slate mb-3">Mathakondapalli Model School, Hosur</div>
          <p className="text-slate">Percentage: 65%</p>
>>>>>>> 142988ba2fe64ad3cb6e9ed4aecafe0d057f75b0
        </motion.div>

        <motion.div className="relative mb-8" whileHover={{ x: 10 }}>
          <div className="timeline-dot"></div>
<<<<<<< HEAD
          <div className="font-mono text-cyan text-sm mb-2">2014 - 2021</div>
          <div className="text-xl font-semibold text-slate-light">SSLC</div>
          <div className="text-lg text-slate mb-3">Mathakondapalli Model School, Hosur</div>
          <p className="text-slate">Percentage: 65%</p>
=======
          <div className="font-mono text-cyan text-sm mb-2">2022 - 2023</div>
          <div className="text-xl font-semibold text-slate-light">HSLC</div>
          <div className="text-lg text-slate mb-3">Sri Chaitanya School, Hosur</div>
          <p className="text-slate">Percentage: 70%</p>
>>>>>>> 142988ba2fe64ad3cb6e9ed4aecafe0d057f75b0
        </motion.div>
      </div>
    </Section>
  );
}

import React from 'react';
import Section from './Section';
import { motion } from 'framer-motion';

export default function Internships() {
  return (
    <Section id="experience" title="03. Internships">
      <div className="timeline">
        <motion.div className="timeline-item" whileHover={{ x: 10 }}>
          <div className="timeline-date">Oct - Nov 2025</div>
          <div className="timeline-title">Virtual Internship Program</div>
          <div className="timeline-subtitle">ServiceNow University - AICTE / SmartBridge</div>
          <ul>
            <li>Completed ServiceNow Flows, ATF, Administration, and CSA Exam Preparation modules on the Now Platform.</li>
          </ul>
        </motion.div>

        <motion.div className="timeline-item" whileHover={{ x: 10 }}>
          <div className="timeline-date">Dec 2025 - Jan 2026</div>
          <div className="timeline-title">Applied AI Virtual Intern</div>
          <div className="timeline-subtitle">CSRBOX - IBM SkillsBuild Applied AI - AICTE</div>
          <ul>
            <li>Built a capstone AI Agent using Python, IBM Watsonx & Relay; covered GenAI, prompt engineering, and agentic automation.</li>
          </ul>
        </motion.div>

        <motion.div className="timeline-item" whileHover={{ x: 10 }}>
          <div className="timeline-date">Jul - Aug 2025</div>
          <div className="timeline-title">Software Development Engineer Intern (Online)</div>
          <div className="timeline-subtitle">Bluestock Fintech</div>
          <ul>
            <li>Built and shipped SDE features across 2 production releases; implemented REST APIs, wrote unit tests, and deployed using CI/CD pipeline improving backend reliability.</li>
          </ul>
        </motion.div>
      </div>
    </Section>
  );
}

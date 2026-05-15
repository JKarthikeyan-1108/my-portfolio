import React from 'react';
import Section from './Section';
import { motion } from 'framer-motion';

export default function Internships() {
  return (
    <Section id="experience" title="03. Internships">
      <div className="timeline-line">
        <motion.div className="relative mb-12" whileHover={{ x: 10 }}>
          <div className="timeline-dot"></div>
          <div className="font-mono text-cyan text-sm mb-2">Oct - Nov 2025</div>
          <div className="text-xl font-semibold text-slate-light">Virtual Internship Program</div>
          <div className="text-lg text-slate mb-4">ServiceNow University - AICTE / SmartBridge</div>
          <ul className="list-disc ml-5 text-slate">
            <li className="mb-2">Completed ServiceNow Flows, ATF, Administration, and CSA Exam Preparation modules on the Now Platform.</li>
          </ul>
        </motion.div>

        <motion.div className="relative mb-12" whileHover={{ x: 10 }}>
          <div className="timeline-dot"></div>
          <div className="font-mono text-cyan text-sm mb-2">Dec 2025 - Jan 2026</div>
          <div className="text-xl font-semibold text-slate-light">Applied AI Virtual Intern</div>
          <div className="text-lg text-slate mb-4">CSRBOX - IBM SkillsBuild Applied AI - AICTE</div>
          <ul className="list-disc ml-5 text-slate">
            <li className="mb-2">Built a capstone AI Agent using Python, IBM Watsonx & Relay; covered GenAI, prompt engineering, and agentic automation.</li>
          </ul>
        </motion.div>

        <motion.div className="relative mb-8" whileHover={{ x: 10 }}>
          <div className="timeline-dot"></div>
          <div className="font-mono text-cyan text-sm mb-2">Jul - Aug 2025</div>
          <div className="text-xl font-semibold text-slate-light">Software Development Engineer Intern (Online)</div>
          <div className="text-lg text-slate mb-4">Bluestock Fintech</div>
          <ul className="list-disc ml-5 text-slate">
            <li className="mb-2">Built and shipped SDE features across 2 production releases; implemented REST APIs, wrote unit tests, and deployed using CI/CD pipeline improving backend reliability.</li>
          </ul>
        </motion.div>
      </div>
    </Section>
  );
}

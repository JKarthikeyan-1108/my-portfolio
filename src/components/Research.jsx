import React from 'react';
import Section from './Section';
import { motion } from 'framer-motion';

export default function Research() {
  return (
    <Section id="research" title="05. Research Publication">
      <motion.div className="project-card" whileHover={{ y: -8 }}>
        <h3>Decentralized Cognitive Architectures for Autonomous Software Engineering: A Federated Swarm Orchestration Framework for Enterprise-Scale Development Pipelines</h3>
        <p style={{ color: 'var(--accent)' }}><em>Jeevan C, Karthikeyan J, Lokesh S, Krishna Prasath J, Kishore S — Panimalar Engineering College, Chennai</em></p>
        <p style={{ marginTop: "15px" }}>Proposed FORC, a federated multi-agent framework achieving 85.3% task resolution vs 54.1% single-LLM baseline (57.6% gain) and reducing mean time-to-merge from 4.2 h to 1.8 h on SWE-bench-Enterprise (840 tasks). IEEE Conference Paper (Under Review).</p>
      </motion.div>
    </Section>
  );
}

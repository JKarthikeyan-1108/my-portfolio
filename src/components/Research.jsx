import React from 'react';
import Section from './Section';
import { motion } from 'framer-motion';

export default function Research() {
  return (
    <Section id="research" title="05. Research Publication">
      <motion.div className="bg-navy-light rounded-lg p-8 border border-transparent hover:border-cyan hover:-translate-y-2 transition-all duration-300 shadow-lg" whileHover={{ y: -8 }}>
        <div className="flex items-center mb-6">
          <i className="fas fa-book-open text-4xl text-purple"></i>
        </div>
        <h3 className="text-2xl font-bold text-slate-light mb-4 leading-tight">Decentralized Cognitive Architectures for Autonomous Software Engineering: A Federated Swarm Orchestration Framework for Enterprise-Scale Development Pipelines</h3>
        <p className="text-cyan font-mono text-sm mb-6">Jeevan C, Karthikeyan J, Lokesh S, Krishna Prasath J, Kishore S — Panimalar Engineering College, Chennai</p>
        <p className="text-slate">Proposed FORC, a federated multi-agent framework achieving 85.3% task resolution vs 54.1% single-LLM baseline (57.6% gain) and reducing mean time-to-merge from 4.2 h to 1.8 h on SWE-bench-Enterprise (840 tasks). <span className="text-slate-light font-semibold">IEEE Conference Paper </span>.</p>
      </motion.div>
    </Section>
  );
}

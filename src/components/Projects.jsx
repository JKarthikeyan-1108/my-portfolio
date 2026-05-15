import React from 'react';
import Section from './Section';
import { motion } from 'framer-motion';

export default function Projects() {
  return (
    <Section id="projects" title="04. Projects">
      <div className="grid-2">
        <motion.div className="project-card" whileHover={{ y: -8 }}>
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
              <i className="far fa-folder-open fa-2x" style={{ color: 'var(--accent)' }}></i>
              <a href="https://github.com/JKarthikeyan-1108/JK-MUSIC" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-primary)' }}>
                <i className="fab fa-github fa-lg"></i>
              </a>
            </div>
            <h3>Spotify Clone</h3>
            <p>Full-stack music streaming app with JWT auth, playlist management, and audio playback. ~30% faster load via lazy loading; supports 50+ concurrent sessions. Deployed on Render with GitHub Actions CI/CD pipeline.</p>
          </div>
          <div className="tech-tags">
            <span className="tech-tag">React</span>
            <span className="tech-tag">Node.js</span>
            <span className="tech-tag">MongoDB</span>
          </div>
        </motion.div>

        <motion.div className="project-card" whileHover={{ y: -8 }}>
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
              <i className="far fa-folder-open fa-2x" style={{ color: 'var(--accent)' }}></i>
              <a href="https://github.com/JKarthikeyan-1108/FINTRACK" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-primary)' }}>
                <i className="fab fa-github fa-lg"></i>
              </a>
            </div>
            <h3>FinTrack</h3>
            <p>Finance dashboard with Recharts analytics for income/expense tracking and budgeting. 40% better data visibility; secured with bcrypt + JWT. Containerized with Docker and deployed on Vercel.</p>
          </div>
          <div className="tech-tags">
            <span className="tech-tag">React</span>
            <span className="tech-tag">Node.js</span>
            <span className="tech-tag">MongoDB</span>
          </div>
        </motion.div>

        <motion.div className="project-card" whileHover={{ y: -8 }}>
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
              <i className="far fa-folder-open fa-2x" style={{ color: 'var(--accent)' }}></i>
              <a href="https://github.com/JKarthikeyan-1108/mini-ecommerce" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-primary)' }}>
                <i className="fab fa-github fa-lg"></i>
              </a>
            </div>
            <h3>E-commerce Website</h3>
            <p>Full-stack e-commerce platform with JWT auth, secure REST APIs, and unit-tested endpoints (Postman). MongoDB query optimizations reduced read latency by ~25%.</p>
          </div>
          <div className="tech-tags">
            <span className="tech-tag">React</span>
            <span className="tech-tag">Node.js</span>
            <span className="tech-tag">MongoDB</span>
          </div>
        </motion.div>

        <motion.div className="project-card" whileHover={{ y: -8 }}>
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
              <i className="far fa-folder-open fa-2x" style={{ color: 'var(--accent)' }}></i>
              <a href="https://github.com/JKarthikeyan-1108/expense-tracker" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-primary)' }}>
                <i className="fab fa-github fa-lg"></i>
              </a>
            </div>
            <h3>Expense Tracker</h3>
            <p>Python expense tracking system with categorized analytics and automated monthly reporting across 10+ categories using Matplotlib. Tested with pytest for core calculation modules.</p>
          </div>
          <div className="tech-tags">
            <span className="tech-tag">Python</span>
            <span className="tech-tag">Matplotlib</span>
            <span className="tech-tag">pytest</span>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}

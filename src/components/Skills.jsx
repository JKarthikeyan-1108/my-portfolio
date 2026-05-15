import React from 'react';
import Section from './Section';
import { motion } from 'framer-motion';

const skillsData = [
  {
    category: "Languages",
    items: ["Java", "Python", "JavaScript", "C", "C++", "DSA"]
  },
  {
    category: "Frameworks & Libraries",
    items: ["React", "Node.js", "Express.js", "Recharts", "Matplotlib"]
  },
  {
    category: "Databases",
    items: ["MongoDB", "SQL", "Redis (familiar)"]
  },
  {
    category: "DevOps & Cloud",
    items: ["Docker", "GitHub Actions", "CI/CD", "Git", "Vercel", "Render", "Oracle OCI"]
  },
  {
    category: "Testing & Tools",
    items: ["Postman", "Agile/Scrum", "ServiceNow"]
  }
];

export default function Skills() {
  return (
    <Section id="skills" title="06. Technical Skills">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {skillsData.map((skillGroup, index) => (
          <motion.div 
            className="bg-navy-light p-6 rounded-lg border-l-2 border-cyan shadow-lg" 
            key={index}
            whileHover={{ y: -5 }}
          >
            <h3 className="text-slate-light font-semibold text-lg mb-4">{skillGroup.category}</h3>
            <div className="flex flex-wrap gap-3">
              {skillGroup.items.map((skill, idx) => (
                <div className="font-mono text-sm text-cyan border border-cyan px-3 py-1 rounded hover:bg-cyan-light transition-colors cursor-default" key={idx}>
                  {skill}
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

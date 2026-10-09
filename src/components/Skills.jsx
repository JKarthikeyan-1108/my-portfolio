import React from 'react';
import Section from './Section';
import { motion } from 'framer-motion';

const skillsData = [
  {
    category: "Languages",
    items: ["Java", "Python", "JavaScript"]
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
    items: ["Docker", "GitHub Actions", "CI/CD"]
  },
  {
    category: "Testing & Tools",
    items: ["Postman", "ServiceNow"]
  }
];

export default function Skills() {
  return (
    <Section id="skills" title="06. Technical Skills">
      <motion.div 
        className="grid grid-cols-1 sm:grid-cols-2 gap-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.1 }
          }
        }}
      >
        {skillsData.map((skillGroup, index) => (
          <motion.div 
            className="bg-navy-light p-6 rounded-lg border-l-2 border-cyan shadow-lg hover:shadow-[0_0_15px_rgba(100,255,218,0.2)] transition-shadow duration-300" 
            key={index}
            variants={{
              hidden: { opacity: 0, scale: 0.9 },
              visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } }
            }}
            whileHover={{ y: -5, x: 5 }}
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
      </motion.div>
    </Section>
  );
}

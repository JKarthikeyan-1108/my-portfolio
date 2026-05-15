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
    items: ["Postman", "pytest", "Unit Testing", "Agile/Scrum", "IBM Watsonx", "ServiceNow"]
  }
];

export default function Skills() {
  return (
    <Section id="skills" title="06. Technical Skills">
      <div className="skills-grid">
        {skillsData.map((skillGroup, index) => (
          <motion.div 
            className="skill-category" 
            key={index}
            whileHover={{ y: -5 }}
          >
            <h3>{skillGroup.category}</h3>
            <div className="skills-list">
              {skillGroup.items.map((skill, idx) => (
                <div className="skill" key={idx}>
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

import React from 'react';
import { motion } from 'framer-motion';

export default function Section({ id, title, children }) {
  return (
    <motion.section 
      id={id}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
    >
      <h2>{title}</h2>
      {children}
    </motion.section>
  );
}

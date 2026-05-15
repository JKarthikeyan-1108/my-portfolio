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
      className="max-w-[1000px] mx-auto py-24 px-5"
    >
      <h2 className="text-2xl md:text-3xl font-semibold text-slate-light mb-10 flex items-center whitespace-nowrap after:content-[''] after:block after:h-[1px] after:w-full after:bg-navy-lighter after:ml-5">
        {title}
      </h2>
      {children}
    </motion.section>
  );
}

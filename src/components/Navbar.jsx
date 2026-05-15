import React from 'react';

export default function Navbar() {
  const links = [
    { name: 'About', href: '#about' },
    { name: 'Education', href: '#education' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Research', href: '#research' },
    { name: 'Skills', href: '#skills' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <nav className="glass-nav flex justify-center flex-wrap gap-4 md:gap-8 px-4 py-4">
      {links.map((link, index) => (
        <a 
          key={index} 
          href={link.href}
          className="font-mono text-[13px] text-slate-light hover:text-cyan transition-colors duration-300"
        >
          <span className="text-cyan">0{index + 1}.</span> {link.name}
        </a>
      ))}
    </nav>
  );
}

import React from 'react';

export default function Navbar() {
  return (
    <nav>
      <a href="#about"><span style={{ color: 'var(--accent)' }}>01.</span> About</a>
      <a href="#education"><span style={{ color: 'var(--accent)' }}>02.</span> Education</a>
      <a href="#experience"><span style={{ color: 'var(--accent)' }}>03.</span> Experience</a>
      <a href="#projects"><span style={{ color: 'var(--accent)' }}>04.</span> Projects</a>
      <a href="#research"><span style={{ color: 'var(--accent)' }}>05.</span> Research</a>
      <a href="#skills"><span style={{ color: 'var(--accent)' }}>06.</span> Skills</a>
      <a href="#certifications"><span style={{ color: 'var(--accent)' }}>07.</span> Certifications</a>
      <a href="#contact"><span style={{ color: 'var(--accent)' }}>08.</span> Contact</a>
    </nav>
  );
}

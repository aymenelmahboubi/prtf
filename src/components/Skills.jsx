import React from 'react';

const skills = [
  'JavaScript',
  'React',
  'Node.js',
  'HTML',
  'CSS',
  'TailwindCSS',
  'Git',
  'AWS',
  'SASS'
];

const Skills = () => (
  <section className="w-full flex flex-col items-center py-16 px-4" id="skills">
    <h2 className="text-2xl md:text-3xl font-bold mb-8 text-green-400 font-mono">// Skills</h2>
    <div className="flex flex-wrap gap-4 justify-center">
      {skills.map(skill => (
        <span key={skill} className="bg-[#181a20] text-green-400 px-4 py-2 rounded text-sm font-mono border border-[#353b48] shadow">
          {skill}
        </span>
      ))}
    </div>
  </section>
);

export default Skills; 
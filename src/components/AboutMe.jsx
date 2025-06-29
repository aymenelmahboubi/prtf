import React from 'react';

const techStack = [
  { name: 'React', icon: '' },
  { name: 'Node.js', icon: '' },
  { name: 'JavaScript', icon: '' },
  { name: 'TailwindCSS', icon: '' },
  { name: 'GitHub', icon: '' },
];

const AboutMe = () => (
  <section className="w-full flex flex-col items-center py-16 px-4" id="about">
    <div className="bg-[#23272e] rounded-lg shadow-lg p-8 max-w-2xl w-full border border-[#353b48]">
      <h2 className="text-2xl md:text-3xl font-bold mb-4 text-green-400 font-mono">// About Me</h2>
      <p className="text-gray-300 text-lg mb-6 font-mono">
        I'm a passionate full stack developer who loves building clean, modern web apps. I enjoy working with JavaScript, React, Node.js, and exploring new technologies. My focus is on writing maintainable code and creating delightful user experiences.
      </p>
      <div className="flex flex-wrap gap-4 justify-center">
        {techStack.map(tech => (
          <div key={tech.name} className="flex flex-col items-center bg-[#181a20] px-4 py-2 rounded shadow border border-[#353b48]">
            <span className="text-2xl mb-1">{tech.icon}</span>
            <span className="text-sm text-gray-400 font-mono">{tech.name}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default AboutMe; 
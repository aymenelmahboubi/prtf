import React from 'react';
import pic from '../assets/pic.png';
import pic2 from '../assets/pic2.png';

const projects = [
  {
    title: 'DOMprj',
    description: 'A modern developer blog platform with markdown support and live preview.',
    tech: ['React', 'Node.js', 'MongoDB', 'TailwindCSS'],
    image: pic,
    github: 'https://github.com/aymenelmahboubi/Aymen_Elmahboubi_finalproject_dom',
    live: 'https://aymenelmahboubi.github.io/Aymen_Elmahboubi_finalproject_dom/',
  },
  {
    title: 'DOOB',
    description: 'A real-time cryptocurrency dashboard with charts and price alerts.',
    tech: ['React', 'Chart.js', 'API', 'TailwindCSS'],
    image: pic2,
    github: 'https://github.com/aymenelmahboubi/Aymen_Elmahboubi_finalproject_dom',
    live: 'https://aymenelmahboubi.github.io/Aymen-Yahya-Adam-Doob/',
  },
  {
    title: 'DOMprj',
    description: 'A terminal-inspired task manager app for productivity enthusiasts.',
    tech: ['React', 'Redux', 'Node.js', 'TailwindCSS'],
    image: pic,
    github: 'https://github.com/aymenelmahboubi/Aymen_Elmahboubi_finalproject_dom',
    live: '#',
  },
];

const Projects = () => (
  <section className="w-full flex flex-col items-center py-16 px-4" id="projects">
    <h2 className="text-2xl md:text-3xl font-bold mb-8 text-green-400 font-mono">// Projects</h2>
    <div className="grid md:grid-cols-3 gap-8 w-full max-w-6xl">
      {projects.map((project, idx) => (
        <div key={project.title} className="bg-[#23272e] border border-[#353b48] rounded-lg shadow-lg flex flex-col overflow-hidden terminal-card">
          <div className="bg-[#181a20] px-4 py-2 flex items-center gap-2 border-b border-[#353b48]">
            <span className="w-3 h-3 rounded-full bg-red-500 inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-yellow-400 inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-green-500 inline-block"></span>
            <span className="ml-2 text-xs text-gray-500 font-mono">{project.title.toLowerCase()}.js</span>
          </div>
          <img src={project.image} alt={project.title} className="w-full h-40 object-cover bg-[#23272e]" />
          <div className="p-5 flex flex-col flex-1">
            <h3 className="text-xl font-bold mb-2 text-white font-mono">{project.title}</h3>
            <p className="text-gray-300 mb-4 font-mono">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map(tech => (
                <span key={tech} className="bg-[#181a20] text-green-400 px-2 py-1 rounded text-xs font-mono border border-[#353b48]">{tech}</span>
              ))}
            </div>
            <div className="mt-auto flex gap-4">
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white font-mono underline">GitHub</a>
              <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-white font-mono underline">Live</a>
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Projects; 
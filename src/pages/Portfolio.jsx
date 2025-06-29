import React from 'react';

import Hero from '../components/Hero';
import AboutMe from '../components/AboutMe';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import ParticleBackground from '../constant/ParticleBackround';
// Placeholders for other sections: About, Projects, Skills, Contact, Footer

// const particlesOptions = {
//     particles: {
//         number: {
//             value: 160,
//             density: {
//                 enable: false
//             }
//         },
//         size: {
//             value: 3,
//             random: true,
//             anim: {
//                 speed: 4,
//                 size_min: 0.3
//             }
//         },
//         line_linked: {
//             enable: false
//         },
//         move: {
//             random: true,
//             speed: 1,
//             direction: 'top',
//             out_mode: 'out'
//         }
//     },
//     interactivity: {
//         events: {
//             onhover: {
//                 enable: true,
//                 mode: 'bubble'
//             },
//             onclick: {
//                 enable: true,
//                 mode: 'repulse'
//             }
//         },
//         modes: {
//             bubble: {
//                 distance: 250,
//                 duration: 2,
//                 size: 0,
//                 opacity: 0
//             },
//             repulse: {
//                 distance: 400,
//                 duration: 4
//             }
//         }
//     }
// };

const Portfolio = () => (
  <div className="min-h-screen bg-[#181a20] text-white font-mono relative overflow-hidden">
    <ParticleBackground />
    {/* <Particles
      id="tsparticles"
      options={particlesOptions}
      style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: 0 }}
    /> */}
    <div style={{ position: 'relative', zIndex: 1 }}>
      <Hero />
      <AboutMe />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
      {/* AboutMe, Projects, Skills, Contact, Footer will be added here */}
    </div>
  </div>
);

export default Portfolio; 
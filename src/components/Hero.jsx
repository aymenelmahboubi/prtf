import React, { useState, useEffect } from 'react';

const TYPED_TEXT = 'Hi, I\'m Aymen ELMAHBOUBI.';
const DESCRIPTION = 'Full Stack Developer';

const Hero = () => {
  const [displayed, setDisplayed] = useState('');
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let i = 0;
    const typing = setInterval(() => {
      setDisplayed(TYPED_TEXT.slice(0, i + 1));
      i++;
      if (i === TYPED_TEXT.length) clearInterval(typing);
    }, 80);
    return () => clearInterval(typing);
  }, []);

  useEffect(() => {
    const cursorBlink = setInterval(() => setShowCursor(c => !c), 500);
    return () => clearInterval(cursorBlink);
  }, []);

  return (
    <section className="flex flex-col items-center justify-center h-[80vh] text-center select-none">
      <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">
        <span>{displayed}</span>
        <span className={`text-green-400 ${showCursor ? '' : 'opacity-0'}`}>|</span>
      </h1>
      <p className="text-xl md:text-2xl text-gray-400 mb-8 font-mono">{DESCRIPTION}</p>
      <a href="#contact" className="inline-block bg-green-500 hover:bg-green-400 text-[#181a20] font-semibold px-8 py-3 rounded-full text-lg shadow transition-all duration-200">
        Contact Me
      </a>
    </section>
  );
};

export default Hero; 
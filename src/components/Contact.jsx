import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { FaGithub, FaLinkedin} from "react-icons/fa";

const socials = [
  { name: 'GitHub', url: 'https://github.com/aymenelmahboubi', icon: <FaGithub size={40} /> },
  { name: 'LinkedIn', url: '#', icon: <FaLinkedin size={40} /> },
  
];

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init("ybf8AyCXChqT6KH3l");
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmitStatus("");

    //* get the serviceId, templateId, publickey from your EmailJs  account
    const serviceId = "service_urzfupe";
    const templateId = "template_9wg8ou9";
    const publicKey = "cFTsaT9Nsuomd5eJj";

    //* create Template Params Object
    const templateParams = {
        form_name: name,
        form_email: email,
        to_name: 'hamiide',
        message: message
    }

    //* Send Email Via email js
    emailjs.send(serviceId, templateId, templateParams, publicKey)
        .then((response) => {
            console.log("Email Sent Successfully", response);
            setSubmitStatus("Email sent successfully!");
            setName('');
            setEmail('');
            setMessage('');
            setIsLoading(false);
        }).catch((error) => {
            console.log("Error Sending Email", error);
            setSubmitStatus("Failed to send email. Please try again.");
            setIsLoading(false);
        });
  };

  return (
    <section className="w-full flex flex-col items-center py-16 px-4" id="contact">
      <h2 className="text-2xl md:text-3xl font-bold mb-8 text-green-400 font-mono">// Contact</h2>
      <div className="bg-[#23272e] rounded-lg shadow-lg p-8 max-w-xl w-full border border-[#353b48] mb-8">
        <form className="flex flex-col gap-4" onSubmit={sendEmail}>
          <input 
            type="text" 
            placeholder="Name" 
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="bg-[#181a20] border border-[#353b48] rounded px-4 py-2 text-white font-mono focus:outline-none focus:border-green-400 transition" 
          />
          <input 
            type="email" 
            placeholder="Email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="bg-[#181a20] border border-[#353b48] rounded px-4 py-2 text-white font-mono focus:outline-none focus:border-green-400 transition" 
          />
          <textarea 
            placeholder="Message" 
            rows={4} 
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            className="bg-[#181a20] border border-[#353b48] rounded px-4 py-2 text-white font-mono focus:outline-none focus:border-green-400 transition" 
          />
          {submitStatus && (
            <div className={`text-sm font-mono ${submitStatus.includes('successfully') ? 'text-green-400' : 'text-red-400'}`}>
              {submitStatus}
            </div>
          )}
          <button 
            type="submit" 
            disabled={isLoading}
            className={`font-semibold px-6 py-2 rounded-full text-lg shadow transition-all duration-200 font-mono ${
              isLoading 
                ? 'bg-gray-500 cursor-not-allowed' 
                : 'bg-green-500 hover:bg-green-400 text-[#181a20]'
            }`}
          >
            {isLoading ? 'Sending...' : 'Send'}
          </button>
        </form>
      </div>
      <div className="flex gap-6">
        {socials.map(social => (
          <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center text-gray-400 hover:text-green-400 transition font-mono">
            <span className="text-2xl mb-1">{social.icon}</span>
            <span className="text-xs">{social.name}</span>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Contact; 
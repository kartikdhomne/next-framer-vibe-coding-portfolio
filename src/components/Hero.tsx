
import { useEffect, useState } from "react";
import { ChevronDown, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  const [text, setText] = useState("");
  const [showElements, setShowElements] = useState({
    title: false,
    typewriter: false,
    description: false,
    social: false,
    button: false,
    arrow: false
  });
  
  const fullText = "Frontend Developer";
  
  useEffect(() => {
    // Stagger the animations
    const timeouts = [
      setTimeout(() => setShowElements(prev => ({ ...prev, title: true })), 200),
      setTimeout(() => setShowElements(prev => ({ ...prev, typewriter: true })), 800),
      setTimeout(() => setShowElements(prev => ({ ...prev, description: true })), 1400),
      setTimeout(() => setShowElements(prev => ({ ...prev, social: true })), 2000),
      setTimeout(() => setShowElements(prev => ({ ...prev, button: true })), 2400),
      setTimeout(() => setShowElements(prev => ({ ...prev, arrow: true })), 2800),
    ];

    return () => timeouts.forEach(clearTimeout);
  }, []);
  
  useEffect(() => {
    if (!showElements.typewriter) return;
    
    let i = 0;
    const timer = setInterval(() => {
      if (i < fullText.length) {
        setText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 100);
    
    return () => clearInterval(timer);
  }, [showElements.typewriter]);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative px-4">
      <div className="text-center max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className={`text-5xl md:text-7xl font-bold text-white mb-4 transition-all duration-1000 transform ${showElements.title ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
              Alex
            </span>
          </h1>
          <div className={`text-2xl md:text-3xl text-slate-300 mb-6 h-12 transition-all duration-1000 transform ${showElements.typewriter ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <span className="border-r-2 border-purple-400 pr-1 animate-pulse">
              {text}
            </span>
          </div>
          <p className={`text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed transition-all duration-1000 transform ${showElements.description ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            I create beautiful, responsive, and user-friendly web applications 
            using modern technologies like React, TypeScript, and Tailwind CSS.
          </p>
        </div>
        
        <div className="mb-12">
          <div className={`flex justify-center space-x-6 mb-8 transition-all duration-1000 transform ${showElements.social ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            {[
              { icon: Github, href: "https://github.com" },
              { icon: Linkedin, href: "https://linkedin.com" },
              { icon: Mail, href: "mailto:contact@example.com" }
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                target={social.icon !== Mail ? "_blank" : undefined}
                rel={social.icon !== Mail ? "noopener noreferrer" : undefined}
                className="p-3 bg-slate-800 hover:bg-slate-700 rounded-full transition-all duration-300 hover:scale-110 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <social.icon className="w-6 h-6 text-slate-300 group-hover:text-white" />
              </a>
            ))}
          </div>
          
          <button className={`px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-full hover:from-purple-600 hover:to-pink-600 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-purple-500/25 transform ${showElements.button ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            View My Work
          </button>
        </div>
      </div>
      
      <button
        onClick={scrollToAbout}
        className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce transition-all duration-1000 ${showElements.arrow ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
      >
        <ChevronDown className="w-8 h-8 text-slate-400 hover:text-white transition-colors duration-200" />
      </button>
    </section>
  );
};

export default Hero;

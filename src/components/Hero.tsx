import { ChevronDown, Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  };

  const typewriterVariants = {
    hidden: { width: 0 },
    visible: {
      width: "100%",
      transition: {
        duration: 2,
        ease: "easeInOut"
      }
    }
  };

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative px-4 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <motion.div 
        className="text-center max-w-4xl mx-auto z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="mb-8">
          <motion.h1 
            className="text-5xl md:text-7xl font-bold text-white mb-4"
            variants={itemVariants}
          >
            Hi, I'm{" "}
            <motion.span 
              className="bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Alex
            </motion.span>
          </motion.h1>
          
          <motion.div 
            className="text-2xl md:text-3xl text-slate-300 mb-6 h-12 overflow-hidden"
            variants={itemVariants}
          >
            <motion.div
              className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent font-semibold"
              variants={typewriterVariants}
              style={{ whiteSpace: "nowrap" }}
            >
              Frontend Developer
            </motion.div>
          </motion.div>
          
          <motion.p 
            className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            I create beautiful, responsive, and user-friendly web applications 
            using modern technologies like React, TypeScript, and Tailwind CSS.
          </motion.p>
        </div>
        
        <div className="mb-12">
          <motion.div 
            className="flex justify-center space-x-6 mb-8"
            variants={itemVariants}
          >
            {[
              { icon: Github, href: "https://github.com", color: "hover:bg-slate-700" },
              { icon: Linkedin, href: "https://linkedin.com", color: "hover:bg-blue-600" },
              { icon: Mail, href: "mailto:contact@example.com", color: "hover:bg-red-600" }
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target={social.icon !== Mail ? "_blank" : undefined}
                rel={social.icon !== Mail ? "noopener noreferrer" : undefined}
                className={`p-4 bg-slate-800/50 backdrop-blur-sm rounded-full border border-slate-700 transition-all duration-300 ${social.color}`}
                whileHover={{ 
                  scale: 1.1,
                  y: -5,
                  boxShadow: "0 10px 30px rgba(139, 92, 246, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
              >
                <social.icon className="w-6 h-6 text-slate-300" />
              </motion.a>
            ))}
          </motion.div>
          
          <motion.button 
            onClick={scrollToProjects}
            className="group relative px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-full overflow-hidden"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600"
              initial={{ x: "-100%" }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
            <span className="relative z-10">View My Work</span>
          </motion.button>
        </div>
      </motion.div>
      
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <motion.button
          onClick={scrollToAbout}
          className="p-2 rounded-full hover:bg-slate-800/30 transition-all duration-200"
          whileHover={{ scale: 1.2 }}
        >
          <ChevronDown className="w-8 h-8 text-slate-400 hover:text-white transition-colors duration-200" />
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Hero;

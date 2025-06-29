
import { Code, Palette, Smartphone, Users } from "lucide-react";
import { motion } from "framer-motion";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

const About = () => {
  const [ref, isVisible] = useIntersectionObserver(0.2);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  };

  const cardVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  };

  const skills = [
    { name: "Frontend Development", icon: Code, color: "from-blue-500 to-cyan-500" },
    { name: "UI/UX Design", icon: Palette, color: "from-purple-500 to-pink-500" },
    { name: "Mobile Development", icon: Smartphone, color: "from-green-500 to-teal-500" },
    { name: "Team Leadership", icon: Users, color: "from-orange-500 to-red-500" }
  ];

  return (
    <section id="about" className="py-20 px-4 relative overflow-hidden" ref={ref}>
      {/* Background decorations */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-transparent" />
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div 
          className="text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-white mb-4"
            variants={itemVariants}
          >
            About <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Me</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-slate-400 max-w-3xl mx-auto"
            variants={itemVariants}
          >
            I'm a passionate frontend developer with over 5 years of experience creating beautiful, 
            functional, and user-centered digital experiences.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
          >
            <motion.h3 
              className="text-2xl font-semibold text-white mb-6"
              variants={itemVariants}
            >
              My Journey
            </motion.h3>
            <motion.p 
              className="text-slate-400 mb-4 leading-relaxed"
              variants={itemVariants}
            >
              Started as a curious student who fell in love with code, I've evolved into a seasoned 
              developer who believes in the power of clean, efficient, and beautiful code.
            </motion.p>
            <motion.p 
              className="text-slate-400 mb-6 leading-relaxed"
              variants={itemVariants}
            >
              My expertise spans across modern web technologies, with a special focus on React, 
              TypeScript, and creating seamless user experiences that make a difference.
            </motion.p>
            <motion.div 
              className="flex space-x-4"
              variants={itemVariants}
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-400">50+</div>
                <div className="text-sm text-slate-400">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-pink-400">30+</div>
                <div className="text-sm text-slate-400">Clients</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400">5+</div>
                <div className="text-sm text-slate-400">Years</div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 gap-4"
            variants={containerVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="group p-6 bg-slate-800/30 backdrop-blur-sm rounded-xl border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300"
                variants={cardVariants}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 30px rgba(139, 92, 246, 0.2)"
                }}
              >
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${skill.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <skill.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-white font-semibold text-sm">{skill.name}</h4>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

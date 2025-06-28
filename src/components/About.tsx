
import { Code, Palette, Zap, Users } from "lucide-react";
import { motion } from "framer-motion";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

const About = () => {
  const [ref, isVisible] = useIntersectionObserver(0.2);
  
  const skills = [
    { name: "React", level: 90, color: "from-blue-500 to-cyan-500" },
    { name: "TypeScript", level: 85, color: "from-blue-600 to-blue-400" },
    { name: "Tailwind CSS", level: 88, color: "from-teal-500 to-green-500" },
    { name: "JavaScript", level: 92, color: "from-yellow-500 to-orange-500" },
    { name: "HTML/CSS", level: 95, color: "from-orange-500 to-red-500" },
    { name: "Node.js", level: 75, color: "from-green-600 to-green-400" },
  ];

  const features = [
    {
      icon: Code,
      title: "Clean Code",
      description: "I write maintainable, scalable, and well-documented code following best practices.",
      gradient: "from-purple-500 to-blue-500"
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Creating beautiful and intuitive user interfaces with attention to detail.",
      gradient: "from-pink-500 to-purple-500"
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Optimizing applications for speed and efficiency across all devices.",
      gradient: "from-yellow-500 to-orange-500"
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Working effectively in teams using Git, Agile methodologies, and modern tools.",
      gradient: "from-green-500 to-teal-500"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="about" className="py-20 px-4 relative overflow-hidden" ref={ref}>
      {/* Background decorations */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/50 to-transparent" />
      
      <div className="max-w-7xl mx-auto relative z-10">
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
            Passionate frontend developer with 3+ years of experience creating amazing web experiences
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
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
              className="text-slate-300 mb-6 leading-relaxed"
              variants={itemVariants}
            >
              I started my journey in web development 3 years ago and have been passionate about 
              creating beautiful, functional websites ever since. I love turning complex problems 
              into simple, elegant solutions.
            </motion.p>
            <motion.p 
              className="text-slate-300 mb-8 leading-relaxed"
              variants={itemVariants}
            >
              When I'm not coding, you can find me exploring new technologies, contributing to 
              open-source projects, or sharing knowledge with the developer community.
            </motion.p>
            
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <motion.div 
                  key={skill.name}
                  variants={itemVariants}
                  className="group"
                >
                  <div className="flex justify-between text-sm text-slate-300 mb-3">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-slate-400">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-slate-800 rounded-full h-3 overflow-hidden">
                    <motion.div
                      className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                      initial={{ width: 0 }}
                      animate={isVisible ? { width: `${skill.level}%` } : { width: 0 }}
                      transition={{ 
                        duration: 1.5, 
                        delay: index * 0.1,
                        ease: "easeOut"
                      }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            className="grid sm:grid-cols-2 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="group relative bg-slate-800/30 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50 overflow-hidden"
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.3)"
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10`}
                  transition={{ duration: 0.3 }}
                />
                <motion.div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-4`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <feature.icon className="w-6 h-6 text-white" />
                </motion.div>
                <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-purple-400 group-hover:to-pink-400 transition-all duration-300">
                  {feature.title}
                </h4>
                <p className="text-slate-400 text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

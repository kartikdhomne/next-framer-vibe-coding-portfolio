<<<<<<< HEAD
import { Code, Palette, Zap, Users } from "lucide-react";
=======

import { Code, Palette, Smartphone, Users } from "lucide-react";
>>>>>>> d92b6f6bd544f9857b63dde1ae1aa43c45bc92e4
import { motion } from "framer-motion";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import TechMarquee from "@/components/TechMarquee";

const About = () => {
  const [ref, isVisible] = useIntersectionObserver(0.2);
<<<<<<< HEAD

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
      description:
        "I write maintainable, scalable, and well-documented code following best practices.",
      gradient: "from-purple-500 to-blue-500",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description:
        "Creating beautiful and intuitive user interfaces with attention to detail.",
      gradient: "from-pink-500 to-purple-500",
    },
    {
      icon: Zap,
      title: "Performance",
      description:
        "Optimizing applications for speed and efficiency across all devices.",
      gradient: "from-yellow-500 to-orange-500",
    },
    {
      icon: Users,
      title: "Collaboration",
      description:
        "Working effectively in teams using Git, Agile methodologies, and modern tools.",
      gradient: "from-green-500 to-teal-500",
    },
  ];
=======
>>>>>>> d92b6f6bd544f9857b63dde1ae1aa43c45bc92e4

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
<<<<<<< HEAD
        staggerChildren: 0.1,
      },
    },
=======
        staggerChildren: 0.2
      }
    }
>>>>>>> d92b6f6bd544f9857b63dde1ae1aa43c45bc92e4
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
<<<<<<< HEAD
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
=======
        duration: 0.6
      }
    }
>>>>>>> d92b6f6bd544f9857b63dde1ae1aa43c45bc92e4
  };

  const cardVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
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
    <section
      id="about"
      className="py-20 px-4 relative overflow-hidden"
      ref={ref}
    >
      {/* Background decorations */}
<<<<<<< HEAD
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/50 to-transparent" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
=======
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
>>>>>>> d92b6f6bd544f9857b63dde1ae1aa43c45bc92e4
          className="text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-white mb-4"
            variants={itemVariants}
          >
            About{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Me
            </span>
          </motion.h2>
          <motion.p
            className="text-xl text-slate-400 max-w-3xl mx-auto"
            variants={itemVariants}
          >
<<<<<<< HEAD
            Passionate frontend developer with 3+ years of experience creating
            amazing web experiences
=======
            I'm a passionate frontend developer with over 5 years of experience creating beautiful, 
            functional, and user-centered digital experiences.
>>>>>>> d92b6f6bd544f9857b63dde1ae1aa43c45bc92e4
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
<<<<<<< HEAD
            <motion.p
              className="text-slate-300 mb-6 leading-relaxed"
              variants={itemVariants}
            >
              I started my journey in web development 3 years ago and have been
              passionate about creating beautiful, functional websites ever
              since. I love turning complex problems into simple, elegant
              solutions.
            </motion.p>
            <motion.p
              className="text-slate-300 mb-8 leading-relaxed"
              variants={itemVariants}
            >
              When I'm not coding, you can find me exploring new technologies,
              contributing to open-source projects, or sharing knowledge with
              the developer community.
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
                      animate={
                        isVisible ? { width: `${skill.level}%` } : { width: 0 }
                      }
                      transition={{
                        duration: 1.5,
                        delay: index * 0.1,
                        ease: [0.6, -0.05, 0.01, 0.99],
                      }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="grid sm:grid-cols-2 gap-6"
=======
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
>>>>>>> d92b6f6bd544f9857b63dde1ae1aa43c45bc92e4
            variants={containerVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
          >
            {skills.map((skill, index) => (
              <motion.div
<<<<<<< HEAD
                key={feature.title}
                className="group relative bg-slate-800/30 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50 overflow-hidden"
                variants={itemVariants}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
=======
                key={skill.name}
                className="group p-6 bg-slate-800/30 backdrop-blur-sm rounded-xl border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300"
                variants={cardVariants}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 30px rgba(139, 92, 246, 0.2)"
>>>>>>> d92b6f6bd544f9857b63dde1ae1aa43c45bc92e4
                }}
              >
<<<<<<< HEAD
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
                <p className="text-slate-400 text-sm leading-relaxed">
                  {feature.description}
                </p>
=======
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${skill.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <skill.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-white font-semibold text-sm">{skill.name}</h4>
>>>>>>> d92b6f6bd544f9857b63dde1ae1aa43c45bc92e4
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      <TechMarquee />
    </section>
  );
};

export default About;

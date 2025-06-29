<<<<<<< HEAD
import { Github, Linkedin, Mail, Heart, LucideTwitter } from "lucide-react";
=======

import { Github, Linkedin, Mail, Heart } from "lucide-react";
>>>>>>> d92b6f6bd544f9857b63dde1ae1aa43c45bc92e4
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
<<<<<<< HEAD
    { icon: Github, href: "https://github.com/kartikdhomne", label: "GitHub" },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/kartik-dhomne",
      label: "LinkedIn",
    },
    {
      icon: LucideTwitter,
      name: "X",
      href: "https://x.com/kartik_dhomne",
    },
    { icon: Mail, href: "mailto:kartikdhomne1997@google.com", label: "Email" },
=======
    { icon: Github, href: "https://github.com", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Mail, href: "mailto:contact@example.com", label: "Email" }
>>>>>>> d92b6f6bd544f9857b63dde1ae1aa43c45bc92e4
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
<<<<<<< HEAD
        staggerChildren: 0.1,
      },
    },
=======
        staggerChildren: 0.1
      }
    }
>>>>>>> d92b6f6bd544f9857b63dde1ae1aa43c45bc92e4
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
<<<<<<< HEAD
      transition: { duration: 0.4 },
    },
=======
      transition: { duration: 0.4 }
    }
>>>>>>> d92b6f6bd544f9857b63dde1ae1aa43c45bc92e4
  };

  return (
    <footer className="relative bg-slate-900/50 backdrop-blur-sm border-t border-slate-800">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />
<<<<<<< HEAD

      <motion.div
=======
      
      <motion.div 
>>>>>>> d92b6f6bd544f9857b63dde1ae1aa43c45bc92e4
        className="relative z-10 max-w-7xl mx-auto px-4 py-12"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Left side - Branding */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
<<<<<<< HEAD
              Kartik
=======
              Alex
>>>>>>> d92b6f6bd544f9857b63dde1ae1aa43c45bc92e4
            </h3>
            <p className="text-slate-400 text-sm">
              Frontend Developer crafting beautiful web experiences
            </p>
          </motion.div>

          {/* Center - Social Links */}
<<<<<<< HEAD

          <motion.div
=======
          <motion.div 
>>>>>>> d92b6f6bd544f9857b63dde1ae1aa43c45bc92e4
            className="flex justify-center space-x-6"
            variants={itemVariants}
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target={social.icon !== Mail ? "_blank" : undefined}
                rel={social.icon !== Mail ? "noopener noreferrer" : undefined}
                className="p-3 bg-slate-800/50 backdrop-blur-sm rounded-full border border-slate-700 hover:border-purple-500 transition-all duration-300 group"
<<<<<<< HEAD
                whileHover={{
                  scale: 1.1,
                  y: -3,
                  boxShadow: "0 10px 30px rgba(139, 92, 246, 0.3)",
=======
                whileHover={{ 
                  scale: 1.1,
                  y: -3,
                  boxShadow: "0 10px 30px rgba(139, 92, 246, 0.3)"
>>>>>>> d92b6f6bd544f9857b63dde1ae1aa43c45bc92e4
                }}
                whileTap={{ scale: 0.95 }}
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5 text-slate-400 group-hover:text-purple-400 transition-colors duration-300" />
              </motion.a>
            ))}
          </motion.div>

          {/* Right side - Copyright */}
<<<<<<< HEAD
          <motion.div
=======
          <motion.div 
>>>>>>> d92b6f6bd544f9857b63dde1ae1aa43c45bc92e4
            className="text-center md:text-right"
            variants={itemVariants}
          >
            <div className="flex items-center justify-center md:justify-end space-x-1 text-slate-400 text-sm">
              <span>© {currentYear} Made with</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <Heart className="w-4 h-4 text-red-400 fill-current" />
              </motion.div>
<<<<<<< HEAD
              <span>by Kartik</span>
            </div>
            <p className="text-xs text-slate-500 mt-1">All rights reserved</p>
=======
              <span>by Alex</span>
            </div>
            <p className="text-xs text-slate-500 mt-1">
              All rights reserved
            </p>
>>>>>>> d92b6f6bd544f9857b63dde1ae1aa43c45bc92e4
          </motion.div>
        </div>

        {/* Bottom border with gradient */}
<<<<<<< HEAD
        <motion.div
=======
        <motion.div 
>>>>>>> d92b6f6bd544f9857b63dde1ae1aa43c45bc92e4
          className="mt-8 pt-8 border-t border-slate-800"
          variants={itemVariants}
        >
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div className="flex items-center space-x-4 text-xs text-slate-500">
              <span>Built with React & Tailwind CSS</span>
              <span className="hidden sm:inline">•</span>
              <span className="hidden sm:inline">Powered by Framer Motion</span>
            </div>
            <motion.div
              className="w-32 h-px bg-gradient-to-r from-purple-500 to-pink-500"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              viewport={{ once: true }}
            />
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;

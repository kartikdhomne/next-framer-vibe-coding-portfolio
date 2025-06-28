
import { Mail, MapPin, Phone, Github, Linkedin, Twitter, Send } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

const Contact = () => {
  const [ref, isVisible] = useIntersectionObserver(0.1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for your message! I'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

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
    <section id="contact" className="py-20 px-4 relative overflow-hidden" ref={ref}>
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/2 w-80 h-80 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl" />
      </div>

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
            Get In <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Touch</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-slate-400 max-w-3xl mx-auto"
            variants={itemVariants}
          >
            I'm always interested in new opportunities and exciting projects. Let's create something amazing together!
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
          >
            <motion.h3 
              className="text-2xl font-semibold text-white mb-6"
              variants={itemVariants}
            >
              Let's Talk
            </motion.h3>
            <motion.p 
              className="text-slate-300 mb-8 leading-relaxed"
              variants={itemVariants}
            >
              Whether you have a project in mind, want to collaborate, or just want to say hello, 
              I'd love to hear from you. Drop me a message and I'll get back to you as soon as possible.
            </motion.p>

            <div className="space-y-6 mb-8">
              {[
                { icon: Mail, title: "Email", value: "alex@example.com", color: "from-red-500 to-pink-500" },
                { icon: Phone, title: "Phone", value: "+1 (555) 123-4567", color: "from-green-500 to-teal-500" },
                { icon: MapPin, title: "Location", value: "San Francisco, CA", color: "from-blue-500 to-purple-500" }
              ].map((contact, index) => (
                <motion.div 
                  key={contact.title}
                  className="group flex items-center space-x-4 p-4 rounded-xl bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 hover:border-purple-500/30 transition-all duration-300"
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: "0 10px 30px rgba(139, 92, 246, 0.1)"
                  }}
                >
                  <motion.div 
                    className={`p-3 bg-gradient-to-r ${contact.color} rounded-xl`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <contact.icon className="w-6 h-6 text-white" />
                  </motion.div>
                  <div>
                    <h4 className="text-white font-medium group-hover:text-purple-400 transition-colors">
                      {contact.title}
                    </h4>
                    <p className="text-slate-400">{contact.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div variants={itemVariants}>
              <h4 className="text-white font-medium mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                {[
                  { icon: Github, href: "https://github.com", color: "hover:bg-slate-700" },
                  { icon: Linkedin, href: "https://linkedin.com", color: "hover:bg-blue-600" },
                  { icon: Twitter, href: "https://twitter.com", color: "hover:bg-cyan-600" }
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/50 transition-all duration-300 ${social.color}`}
                    whileHover={{ 
                      scale: 1.1,
                      y: -3,
                      boxShadow: "0 10px 25px rgba(0,0,0,0.2)"
                    }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                  >
                    <social.icon className="w-6 h-6 text-slate-300" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          <motion.div 
            className="bg-slate-800/30 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50 relative overflow-hidden"
            variants={itemVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
          >
            {/* Form background decoration */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-pink-500/5" />
            
            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              {[
                { name: "name", type: "text", placeholder: "Your Name", label: "Name" },
                { name: "email", type: "email", placeholder: "your.email@example.com", label: "Email" }
              ].map((field, index) => (
                <motion.div 
                  key={field.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  <label htmlFor={field.name} className="block text-sm font-medium text-slate-300 mb-2">
                    {field.label}
                  </label>
                  <motion.input
                    type={field.type}
                    id={field.name}
                    name={field.name}
                    value={formData[field.name as keyof typeof formData]}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all duration-300 backdrop-blur-sm"
                    placeholder={field.placeholder}
                    whileFocus={{ scale: 1.02 }}
                  />
                </motion.div>
              ))}
              
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
              >
                <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                  Message
                </label>
                <motion.textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all duration-300 resize-none backdrop-blur-sm"
                  placeholder="Tell me about your project..."
                  whileFocus={{ scale: 1.02 }}
                />
              </motion.div>
              
              <motion.button
                type="submit"
                className="group w-full px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-xl relative overflow-hidden"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
                <span className="relative z-10 flex items-center justify-center space-x-2">
                  <Send className="w-5 h-5" />
                  <span>Send Message</span>
                </span>
              </motion.button>
            </form>
          </motion.div>
        </div>

        <motion.div 
          className="mt-16 pt-8 border-t border-slate-800 text-center"
          variants={itemVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          <p className="text-slate-400">
            © 2024 Alex Portfolio. Built with React, TypeScript, Framer Motion and Tailwind CSS.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;


import { Mail, MapPin, Phone, Github, Linkedin, Twitter } from "lucide-react";
import { useState } from "react";
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

  return (
    <section id="contact" className="py-20 px-4" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get In <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            I'm always interested in new opportunities and exciting projects. Let's create something amazing together!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className={`transition-all duration-1000 transform ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'}`} style={{ transitionDelay: '0.2s' }}>
            <h3 className="text-2xl font-semibold text-white mb-6">Let's Talk</h3>
            <p className="text-slate-300 mb-8 leading-relaxed">
              Whether you have a project in mind, want to collaborate, or just want to say hello, 
              I'd love to hear from you. Drop me a message and I'll get back to you as soon as possible.
            </p>

            <div className="space-y-6">
              {[
                { icon: Mail, title: "Email", value: "alex@example.com" },
                { icon: Phone, title: "Phone", value: "+1 (555) 123-4567" },
                { icon: MapPin, title: "Location", value: "San Francisco, CA" }
              ].map((contact, index) => (
                <div 
                  key={contact.title}
                  className={`flex items-center space-x-4 transition-all duration-1000 transform ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'}`}
                  style={{ transitionDelay: `${0.4 + index * 0.1}s` }}
                >
                  <div className="p-3 bg-slate-800 rounded-full">
                    <contact.icon className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium">{contact.title}</h4>
                    <p className="text-slate-400">{contact.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className={`mt-8 transition-all duration-1000 transform ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'}`} style={{ transitionDelay: '0.7s' }}>
              <h4 className="text-white font-medium mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                {[
                  { icon: Github, href: "https://github.com" },
                  { icon: Linkedin, href: "https://linkedin.com" },
                  { icon: Twitter, href: "https://twitter.com" }
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 bg-slate-800 hover:bg-slate-700 rounded-full transition-all duration-300 hover:scale-110 group ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
                    style={{ transitionDelay: `${0.8 + index * 0.1}s` }}
                  >
                    <social.icon className="w-6 h-6 text-slate-300 group-hover:text-white" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className={`bg-slate-800/50 backdrop-blur-sm p-8 rounded-xl border border-slate-700 transition-all duration-1000 transform ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'}`} style={{ transitionDelay: '0.4s' }}>
            <form onSubmit={handleSubmit} className="space-y-6">
              {[
                { name: "name", type: "text", placeholder: "Your Name", label: "Name" },
                { name: "email", type: "email", placeholder: "your.email@example.com", label: "Email" }
              ].map((field, index) => (
                <div key={field.name} className={`transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`} style={{ transitionDelay: `${0.6 + index * 0.1}s` }}>
                  <label htmlFor={field.name} className="block text-sm font-medium text-slate-300 mb-2">
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    id={field.name}
                    name={field.name}
                    value={formData[field.name as keyof typeof formData]}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                    placeholder={field.placeholder}
                  />
                </div>
              ))}
              
              <div className={`transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`} style={{ transitionDelay: '0.8s' }}>
                <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>
              
              <button
                type="submit"
                className={`w-full px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-purple-500/25 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
                style={{ transitionDelay: '1s' }}
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        <div className={`mt-16 pt-8 border-t border-slate-800 text-center transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`} style={{ transitionDelay: '1.2s' }}>
          <p className="text-slate-400">
            © 2024 Alex Portfolio. Built with React, TypeScript, and Tailwind CSS.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;

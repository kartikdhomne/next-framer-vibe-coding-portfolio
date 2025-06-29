
import { motion } from "framer-motion";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

const TechStack = () => {
  const [ref, isVisible] = useIntersectionObserver(0.2);

  const technologies = [
    { name: "React", color: "from-blue-400 to-blue-600" },
    { name: "TypeScript", color: "from-blue-500 to-blue-700" },
    { name: "JavaScript", color: "from-yellow-400 to-yellow-600" },
    { name: "Next.js", color: "from-gray-700 to-gray-900" },
    { name: "Tailwind CSS", color: "from-cyan-400 to-cyan-600" },
    { name: "Node.js", color: "from-green-400 to-green-600" },
    { name: "Python", color: "from-blue-500 to-yellow-500" },
    { name: "MongoDB", color: "from-green-500 to-green-700" },
    { name: "PostgreSQL", color: "from-blue-600 to-blue-800" },
    { name: "AWS", color: "from-orange-400 to-orange-600" },
    { name: "Docker", color: "from-blue-400 to-blue-600" },
    { name: "Git", color: "from-red-500 to-red-700" },
    { name: "Figma", color: "from-purple-400 to-purple-600" },
    { name: "Vue.js", color: "from-green-400 to-green-600" },
    { name: "GraphQL", color: "from-pink-500 to-pink-700" },
    { name: "Redux", color: "from-purple-500 to-purple-700" }
  ];

  // Duplicate the array for seamless infinite scroll
  const duplicatedTechs = [...technologies, ...technologies];

  return (
    <section className="py-16 px-4 relative overflow-hidden" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Tech <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Stack</span>
          </h2>
          <p className="text-lg text-slate-400">
            Technologies I work with to bring ideas to life
          </p>
        </motion.div>

        <div className="relative">
          {/* Gradient overlays for fade effect */}
          <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-slate-900 to-transparent z-10" />
          <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-slate-900 to-transparent z-10" />
          
          <div className="overflow-hidden">
            <motion.div
              className="flex space-x-6"
              animate={{
                x: [0, -50 * technologies.length],
              }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              {duplicatedTechs.map((tech, index) => (
                <motion.div
                  key={`${tech.name}-${index}`}
                  className="flex-shrink-0 px-6 py-3 bg-slate-800/30 backdrop-blur-sm rounded-full border border-slate-700/50"
                  whileHover={{ scale: 1.1 }}
                >
                  <span className={`bg-gradient-to-r ${tech.color} bg-clip-text text-transparent font-semibold whitespace-nowrap`}>
                    {tech.name}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;

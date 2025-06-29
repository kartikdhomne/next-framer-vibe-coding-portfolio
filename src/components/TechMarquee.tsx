<<<<<<< HEAD
=======

>>>>>>> d92b6f6bd544f9857b63dde1ae1aa43c45bc92e4
import { motion } from "framer-motion";

const TechMarquee = () => {
  const technologies = [
<<<<<<< HEAD
    { name: "React.js", color: "from-blue-400 to-blue-600" },
    { name: "TypeScript", color: "from-blue-500 to-blue-700" },
    { name: "JavaScript", color: "from-yellow-400 to-yellow-600" },
    { name: "Node.js", color: "from-gray-500 to-gray-700" },
    { name: "Tailwind CSS", color: "from-cyan-400 to-cyan-600" },
    { name: "Next.js", color: "from-green-400 to-green-600" },
    { name: "Nunjucks", color: "from-blue-500 to-yellow-500" },
    { name: "Rest API", color: "from-green-500 to-green-700" },
    { name: "Bitbucket", color: "from-blue-600 to-blue-800" },
    { name: "Chakra UI", color: "from-orange-400 to-orange-600" },
    { name: "SASS", color: "from-blue-400 to-blue-600" },
    { name: "Git", color: "from-red-500 to-red-700" },
    { name: "Figma", color: "from-purple-400 to-purple-600" },
    { name: "CSS", color: "from-green-400 to-green-600" },
    { name: "HTML", color: "from-pink-500 to-pink-700" },
    { name: "Redux", color: "from-purple-500 to-purple-700" },
=======
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
>>>>>>> d92b6f6bd544f9857b63dde1ae1aa43c45bc92e4
  ];

  // Duplicate the array for seamless infinite scroll
  const duplicatedTechs = [...technologies, ...technologies, ...technologies];

  return (
<<<<<<< HEAD
    <section className="py-16 px-4 relative overflow-hidden max-w-7xl mx-auto">
      <div className="relative">
        {/* Gradient overlays for fade effect */}
        {/* <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-slate-900 to-transparent z-10" />
        <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-slate-900 to-transparent z-10" /> */}

=======
    <section className="py-16 px-4 relative overflow-hidden">
      <div className="max-w-6xl mx-auto mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
          Tech <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Stack</span>
        </h2>
        <p className="text-lg text-slate-400 text-center">
          Technologies I work with to bring ideas to life
        </p>
      </div>

      <div className="relative">
        {/* Gradient overlays for fade effect */}
        <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-slate-900 to-transparent z-10" />
        <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-slate-900 to-transparent z-10" />
        
>>>>>>> d92b6f6bd544f9857b63dde1ae1aa43c45bc92e4
        <div className="overflow-hidden">
          <motion.div
            className="flex space-x-6"
            animate={{
              x: [0, -1920], // Adjust based on total width
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {duplicatedTechs.map((tech, index) => (
              <div
                key={`${tech.name}-${index}`}
                className="flex-shrink-0 group"
              >
                <div className="px-6 py-3 bg-slate-800/30 backdrop-blur-sm rounded-full border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300">
<<<<<<< HEAD
                  <span
                    className={`bg-gradient-to-r ${tech.color} bg-clip-text text-transparent font-semibold whitespace-nowrap`}
                  >
=======
                  <span className={`bg-gradient-to-r ${tech.color} bg-clip-text text-transparent font-semibold whitespace-nowrap`}>
>>>>>>> d92b6f6bd544f9857b63dde1ae1aa43c45bc92e4
                    {tech.name}
                  </span>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TechMarquee;

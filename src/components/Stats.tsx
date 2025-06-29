
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { useEffect } from "react";

const Stats = () => {
  const [ref, isVisible] = useIntersectionObserver(0.3);

  const stats = [
    {
      label: "Projects Completed",
      value: 127,
      suffix: "+",
      color: "from-purple-400 to-purple-600"
    },
    {
      label: "Clients Served",
      value: 85,
      suffix: "+",
      color: "from-blue-400 to-blue-600"
    },
    {
      label: "Lines of Code",
      value: 250000,
      suffix: "+",
      color: "from-green-400 to-green-600"
    },
    {
      label: "Customer Satisfaction",
      value: 98,
      suffix: "%",
      color: "from-pink-400 to-pink-600"
    }
  ];

  const AnimatedCounter = ({ value, suffix, isVisible }: { value: number, suffix: string, isVisible: boolean }) => {
    const count = useMotionValue(0);
    const rounded = useTransform(count, Math.round);

    useEffect(() => {
      if (isVisible) {
        const animation = animate(count, value, {
          duration: 2,
          ease: "easeOut"
        });
        return animation.stop;
      }
    }, [isVisible, count, value]);

    return (
      <motion.span>
        {rounded as any}{suffix}
      </motion.span>
    );
  };

  return (
    <section className="py-20 px-4 relative overflow-hidden" ref={ref}>
      {/* Background decoration */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-purple-900/10 to-pink-900/10"
        animate={{
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            My <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Achievements</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Numbers that reflect my dedication and passion for creating exceptional digital experiences
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center p-6 bg-slate-800/20 backdrop-blur-sm rounded-xl border border-slate-700/30 hover:border-purple-500/50 transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                ease: [0.6, -0.05, 0.01, 0.99]
              }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 30px rgba(139, 92, 246, 0.2)"
              }}
            >
              <motion.div 
                className={`text-3xl md:text-4xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}
                initial={{ scale: 0.5 }}
                animate={isVisible ? { scale: 1 } : { scale: 0.5 }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.15,
                  type: "spring",
                  stiffness: 100
                }}
              >
                <AnimatedCounter 
                  value={stat.value} 
                  suffix={stat.suffix} 
                  isVisible={isVisible} 
                />
              </motion.div>
              <p className="text-slate-400 text-sm font-medium">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;

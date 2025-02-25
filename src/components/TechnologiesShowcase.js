import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const technologies = [
  {
    category: "Frontend",
    items: [
      { name: "React", icon: "🔵", level: 95 },
      { name: "Next.js", icon: "⚫", level: 90 },
      { name: "TypeScript", icon: "🔷", level: 85 },
      { name: "Tailwind CSS", icon: "🎨", level: 95 },
      { name: "Three.js", icon: "🎮", level: 80 }
    ]
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", icon: "🟢", level: 90 },
      { name: "Python", icon: "🐍", level: 85 },
      { name: "MongoDB", icon: "🍃", level: 90 },
      { name: "PostgreSQL", icon: "🐘", level: 85 },
      { name: "GraphQL", icon: "📊", level: 80 }
    ]
  },
  {
    category: "DevOps & Tools",
    items: [
      { name: "Docker", icon: "🐋", level: 85 },
      { name: "AWS", icon: "☁️", level: 80 },
      { name: "Git", icon: "📝", level: 95 },
      { name: "CI/CD", icon: "🔄", level: 85 },
      { name: "Linux", icon: "🐧", level: 90 }
    ]
  }
];

export default function TechnologiesShowcase() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section className="py-24 bg-gradient-to-b from-gray-900 to-black overflow-hidden">
      <div ref={containerRef} className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-yellow-400 text-lg font-semibold mb-4 block">
            Tech Stack
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Technologies & Skills
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Expertise in modern web technologies and development tools
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {technologies.map((tech, categoryIndex) => (
            <motion.div
              key={tech.category}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.2 }}
              style={{ y: y }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700"
            >
              <h3 className="text-2xl font-bold text-white mb-6">
                {tech.category}
              </h3>
              <div className="space-y-6">
                {tech.items.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="relative"
                  >
                    <div className="flex items-center mb-2">
                      <span className="text-2xl mr-3">{item.icon}</span>
                      <span className="text-white font-medium">{item.name}</span>
                      <span className="ml-auto text-yellow-400 font-bold">
                        {item.level}%
                      </span>
                    </div>
                    <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.level}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        className="h-full bg-gradient-to-r from-yellow-400 to-orange-500"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Floating Tech Icons */}
        <div className="relative mt-16">
          <motion.div
            animate={{
              y: [0, -20, 0],
              rotate: [0, 10, 0]
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              repeatType: "reverse"
            }}
            className="absolute -top-10 left-1/4 text-6xl opacity-20"
          >
            ⚛️
          </motion.div>
          <motion.div
            animate={{
              y: [0, 20, 0],
              rotate: [0, -10, 0]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatType: "reverse"
            }}
            className="absolute top-20 right-1/3 text-6xl opacity-20"
          >
            🚀
          </motion.div>
          {/* Add more floating icons as needed */}
        </div>
      </div>
    </section>
  );
} 
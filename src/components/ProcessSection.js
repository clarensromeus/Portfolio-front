import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const steps = [
  {
    id: 1,
    title: "Discovery",
    description: "Understanding your needs, goals, and project requirements through in-depth consultation.",
    icon: "🔍",
    color: "from-yellow-400 to-yellow-600"
  },
  {
    id: 2,
    title: "Planning",
    description: "Creating detailed project roadmap, wireframes, and technical specifications.",
    icon: "📋",
    color: "from-green-400 to-green-600"
  },
  {
    id: 3,
    title: "Development",
    description: "Building your solution using cutting-edge technologies and best practices.",
    icon: "⚙️",
    color: "from-blue-400 to-blue-600"
  },
  {
    id: 4,
    title: "Testing",
    description: "Rigorous quality assurance to ensure everything works flawlessly.",
    icon: "🔍",
    color: "from-purple-400 to-purple-600"
  },
  {
    id: 5,
    title: "Launch",
    description: "Deploying your project and providing ongoing support and maintenance.",
    icon: "🚀",
    color: "from-pink-400 to-pink-600"
  }
];

export default function ProcessSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section className="py-24 bg-gradient-to-b from-gray-900 to-black overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            How We Work
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            A streamlined process to bring your vision to life
          </p>
        </motion.div>

        <div ref={ref} className="relative">
          {/* Connection Line */}
          <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-800 transform -translate-y-1/2" />

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.2 }}
                className="relative"
              >
                <div className={`
                  relative z-10 bg-gray-800 rounded-2xl p-6 h-full
                  transform hover:-translate-y-2 transition-transform duration-300
                  hover:shadow-xl hover:shadow-${step.color.split('-')[1]}-400/20
                `}>
                  <div className={`
                    w-16 h-16 rounded-full bg-gradient-to-br ${step.color}
                    flex items-center justify-center text-2xl mb-4
                    transform -translate-y-12 shadow-lg
                  `}>
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-400">
                    {step.description}
                  </p>
                </div>

                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-8 h-8 rounded-full bg-yellow-400 flex items-center justify-center font-bold text-gray-900">
                    {step.id}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 
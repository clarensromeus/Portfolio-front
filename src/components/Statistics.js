import { motion } from "framer-motion";
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const stats = [
  {
    id: 1,
    number: 50,
    suffix: "+",
    title: "Projects Completed",
    description: "Successful deliveries across various industries"
  },
  {
    id: 2,
    number: 5,
    suffix: "+",
    title: "Years Experience",
    description: "Deep expertise in web development"
  },
  {
    id: 3,
    number: 100,
    suffix: "%",
    title: "Client Satisfaction",
    description: "Commitment to excellence"
  },
  {
    id: 4,
    number: 24,
    suffix: "/7",
    title: "Support",
    description: "Always here to help"
  }
];

export default function Statistics() {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true
  });

  return (
    <section className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            By the Numbers
          </h2>
          <p className="text-xl text-gray-400">
            Track record of success and growth
          </p>
        </motion.div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-gray-800 rounded-xl p-8 text-center hover:shadow-2xl hover:shadow-yellow-400/20 transition-all duration-300"
            >
              <div className="text-4xl font-bold text-yellow-400 mb-4">
                {inView && (
                  <CountUp
                    end={stat.number}
                    duration={2.5}
                    suffix={stat.suffix}
                  />
                )}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {stat.title}
              </h3>
              <p className="text-gray-400">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 
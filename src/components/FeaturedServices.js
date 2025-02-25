import { motion } from 'framer-motion';
import { useState } from 'react';

const services = [
  {
    id: 1,
    title: "Custom Web Development",
    description: "Bespoke web applications built with cutting-edge technologies",
    price: "Starting at $2,500",
    features: [
      "React/Next.js Frontend",
      "Node.js Backend",
      "Database Integration",
      "API Development",
      "Responsive Design"
    ],
    icon: "🚀",
    category: "development"
  },
  {
    id: 2,
    title: "E-commerce Solutions",
    description: "Complete online store development with payment integration",
    price: "Starting at $3,500",
    features: [
      "Custom Product Management",
      "Secure Payment Gateway",
      "Inventory System",
      "Order Management",
      "Analytics Dashboard"
    ],
    icon: "🛍️",
    category: "e-commerce"
  },
  // Add more services...
];

export default function FeaturedServices() {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <section className="py-24 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Premium Services
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Comprehensive solutions tailored to your business needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -10 }}
              onHoverStart={() => setHoveredId(service.id)}
              onHoverEnd={() => setHoveredId(null)}
              className="bg-gray-800 rounded-2xl overflow-hidden"
            >
              <div className="p-8">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-400 mb-6">
                  {service.description}
                </p>
                <div className="text-yellow-400 font-bold mb-8">
                  {service.price}
                </div>

                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ 
                        opacity: hoveredId === service.id ? 1 : 0.7,
                        x: hoveredId === service.id ? 0 : -10
                      }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center text-gray-300"
                    >
                      <svg className="w-5 h-5 text-yellow-400 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </motion.li>
                  ))}
                </ul>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full py-4 bg-yellow-400 text-gray-900 rounded-xl font-bold hover:bg-yellow-500 transition-colors duration-300"
                >
                  Get Started
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 
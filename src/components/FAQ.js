import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    question: "What services do you offer?",
    answer: "I specialize in full-stack web development, including custom web applications, e-commerce solutions, API development, and UI/UX design. Each project is tailored to meet specific business needs and objectives."
  },
  {
    question: "What is your development process?",
    answer: "My development process follows an agile methodology: 1) Requirements gathering and planning, 2) Design and prototyping, 3) Development with regular updates, 4) Testing and quality assurance, 5) Deployment and maintenance."
  },
  {
    question: "How long does a typical project take?",
    answer: "Project timelines vary based on complexity and requirements. A simple website might take 2-4 weeks, while a complex web application could take 2-4 months. I'll provide a detailed timeline during our initial consultation."
  },
  {
    question: "Do you provide ongoing support?",
    answer: "Yes, I offer various maintenance and support packages to ensure your application runs smoothly after launch. This includes regular updates, security patches, and technical support."
  },
  {
    question: "What technologies do you use?",
    answer: "I work with modern technologies including React, Next.js, Node.js, MongoDB, PostgreSQL, AWS, and more. The specific tech stack is chosen based on project requirements to ensure optimal performance and scalability."
  }
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section className="py-24 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-yellow-400 text-lg font-semibold mb-4 block">
            FAQ
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Common Questions
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Find answers to frequently asked questions about my services and process
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="mb-4"
            >
              <button
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                className="w-full text-left bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:border-yellow-400/50 transition-all duration-300"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-white">
                    {faq.question}
                  </h3>
                  <motion.span
                    animate={{ rotate: activeIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-yellow-400"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </motion.span>
                </div>
                <AnimatePresence>
                  {activeIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="mt-4 text-gray-400 leading-relaxed">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 
import { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckIcon, XIcon } from '@heroicons/react/outline';

const plans = [
  {
    name: "Basic",
    price: {
      monthly: 999,
      yearly: 899
    },
    features: [
      { name: "Up to 5 Pages", included: true },
      { name: "Responsive Design", included: true },
      { name: "Basic SEO", included: true },
      { name: "Content Management System", included: true },
      { name: "Custom Domain", included: true },
      { name: "E-commerce Features", included: false },
      { name: "Advanced Analytics", included: false },
      { name: "Priority Support", included: false }
    ],
    popular: false
  },
  {
    name: "Professional",
    price: {
      monthly: 1999,
      yearly: 1799
    },
    features: [
      { name: "Up to 15 Pages", included: true },
      { name: "Responsive Design", included: true },
      { name: "Advanced SEO", included: true },
      { name: "Content Management System", included: true },
      { name: "Custom Domain", included: true },
      { name: "E-commerce Features", included: true },
      { name: "Advanced Analytics", included: true },
      { name: "Priority Support", included: false }
    ],
    popular: true
  },
  {
    name: "Enterprise",
    price: {
      monthly: 3999,
      yearly: 3599
    },
    features: [
      { name: "Unlimited Pages", included: true },
      { name: "Responsive Design", included: true },
      { name: "Advanced SEO", included: true },
      { name: "Content Management System", included: true },
      { name: "Custom Domain", included: true },
      { name: "E-commerce Features", included: true },
      { name: "Advanced Analytics", included: true },
      { name: "Priority Support", included: true }
    ],
    popular: false
  }
];

export default function PricingTable() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section className="py-24 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Transparent Pricing
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
            Choose the perfect plan for your needs
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-4">
            <span className={`text-lg ${!isYearly ? 'text-white' : 'text-gray-400'}`}>
              Monthly
            </span>
            <button
              onClick={() => setIsYearly(!isYearly)}
              className={`relative w-16 h-8 rounded-full transition-colors duration-300 ${
                isYearly ? 'bg-yellow-400' : 'bg-gray-600'
              }`}
            >
              <div
                className={`absolute w-6 h-6 bg-white rounded-full top-1 transition-transform duration-300 ${
                  isYearly ? 'translate-x-9' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`text-lg ${isYearly ? 'text-white' : 'text-gray-400'}`}>
              Yearly
              <span className="ml-2 text-yellow-400 text-sm">Save 10%</span>
            </span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`relative bg-gray-800 rounded-2xl p-8 ${
                plan.popular ? 'ring-2 ring-yellow-400' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <span className="bg-yellow-400 text-gray-900 text-sm font-bold px-4 py-1 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}

              <h3 className="text-2xl font-bold text-white mb-4">{plan.name}</h3>
              <div className="mb-8">
                <span className="text-4xl font-bold text-white">
                  ${isYearly ? plan.price.yearly : plan.price.monthly}
                </span>
                <span className="text-gray-400">/month</span>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li
                    key={feature.name}
                    className="flex items-center text-gray-300"
                  >
                    {feature.included ? (
                      <CheckIcon className="w-5 h-5 text-yellow-400 mr-3" />
                    ) : (
                      <XIcon className="w-5 h-5 text-gray-500 mr-3" />
                    )}
                    {feature.name}
                  </li>
                ))}
              </ul>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`w-full py-4 rounded-xl font-bold transition-colors duration-300 ${
                  plan.popular
                    ? 'bg-yellow-400 text-gray-900 hover:bg-yellow-500'
                    : 'bg-gray-700 text-white hover:bg-gray-600'
                }`}
              >
                Get Started
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 
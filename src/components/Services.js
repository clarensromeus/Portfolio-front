import { motion } from "framer-motion";
import { useState } from 'react';
import { 
  ShoppingCartIcon,
  // Add any other icons you're using
} from '@heroicons/react/24/outline';

const services = [
  {
    id: 1,
    title: "Custom Web Development",
    description: "Full-stack web applications built with modern technologies",
    price: 2000,
    features: [
      "React/Next.js Frontend",
      "Node.js/Express Backend",
      "Database Integration",
      "Responsive Design",
      "3 Rounds of Revisions"
    ],
    icon: "🌐",
    category: "development"
  },
  {
    id: 2,
    title: "Web Development Course",
    description: "Comprehensive course teaching modern full-stack development",
    price: 290,
    features: [
      "50+ Hours of Content",
      "Project-Based Learning",
      "1-on-1 Mentoring",
      "Certificate",
    ],
    icon: "📚",
    category: "course"
  },
  {
    id: 3,
    title: "Mobile Application development course",
    description: "Learn how to build a full-stack mobile application",
    price: 300,
    features: [
      "40+ Hours of Content",
      "Cross-platform Development",
      "Project-Based Learning",
      "1-on-1 Mentoring",
      "Certificate",
    ],
    icon: "📚",
    category: "course"
  },
  {
    id: 3,
    title: "E-commerce Development",
    description: "Custom e-commerce solutions with modern payment integration",
    price: 2500,
    features: [
      "Custom Product Management",
      "Secure Payment Integration",
      "Order Management System",
      "Customer Analytics",
      "Mobile-First Design"
    ],
    icon: "🛍️",
    category: "development"
  },
  {
    id: 3,
    title: "Mobile Application with Flutter",
    description: "Custom mobile applications built with Flutter",
    price: 2500,
    features: [
      "Best-in-class Flutter practices",
      "Scalable Architecture",
      "Secure Development",
      "Cross-platform Compatibility",
      "Performance Optimization"
    ],
    icon: "📱",
    category: "development"
  },
  {
    id: 4,
    title: "UI/UX Consultation",
    description: "Expert consultation for improving your application's user experience",
    price: 999,
    features: [
      "User Research",
      "Interface Audit",
      "Wireframing",
      "Prototype Development",
      "Implementation Guide"
    ],
    icon: "🎨",
    category: "consultation"
  },
  // Add more services...
];

export default function Services() {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [hoveredService, setHoveredService] = useState(null);

  const addToCart = (service) => {
    setCart([...cart, service]);
  };

  const removeFromCart = (serviceId) => {
    setCart(cart.filter(item => item.id !== serviceId));
  };

  const filteredServices = selectedCategory === 'all' 
    ? services 
    : services.filter(service => service.category === selectedCategory);

  return (
    <section className="py-24 bg-gradient-to-b from-gray-900 to-gray-800" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 75 }}
          whileInView={{ opacity: .7, y: 0 }}
          transition={{ ease: "easeInOut", duration: .7 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-yellow-400 mb-2">
          03
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ ease: "easeInOut", duration: .7 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-white mb-12">
          Services & Courses
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center gap-4 mb-12"
        >
          {['all', 'development', 'course', 'consultation'].map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                selectedCategory === category
                  ? 'bg-yellow-400 text-gray-900'
                  : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ 
                scale: 1.03,
                transition: { duration: 0.2 }
              }}
              onHoverStart={() => setHoveredService(service.id)}
              onHoverEnd={() => setHoveredService(null)}
              className={`bg-gray-800 rounded-xl p-8 transition-all duration-300 ${
                hoveredService === service.id ? 'shadow-2xl shadow-yellow-400/20' : 'shadow-xl'
              }`}
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
              <p className="text-gray-400 mb-6">{service.description}</p>
              <div className="text-2xl font-bold text-yellow-400 mb-6">
                ${service.price}
              </div>
              <ul className="text-gray-400 mb-8">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-center mb-2">
                    <svg className="w-5 h-5 text-yellow-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <button
                onClick={() => addToCart(service)}
                className="w-full bg-yellow-400 text-gray-900 font-bold py-3 px-6 rounded-lg hover:bg-yellow-500 transition-colors duration-200"
              >
                Add to Cart
              </button>
            </motion.div>
          ))}
        </div>

        {/* Shopping Cart */}
        <div className="fixed top-4 right-4 z-50">
          <button
            onClick={() => setIsCartOpen(!isCartOpen)}
            className="bg-yellow-400 p-3 rounded-full hover:bg-yellow-500 transition-colors duration-200 relative"
          >
            <ShoppingCartIcon className="h-6 w-6 text-gray-900" />
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                {cart.length}
              </span>
            )}
          </button>
        </div>

        {/* Cart Sidebar */}
        {isCartOpen && (
          <div className="fixed inset-y-0 right-0 w-96 bg-gray-800 shadow-xl p-6 transform transition-transform duration-300 z-40">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold text-white">Your Cart</h3>
              <button
                onClick={() => setIsCartOpen(false)}
                className="text-gray-400 hover:text-white"
              >
                ✕
              </button>
            </div>
            
            {cart.length === 0 ? (
              <p className="text-gray-400">Your cart is empty</p>
            ) : (
              <>
                {cart.map((item) => (
                  <div key={item.id} className="flex justify-between items-center py-4 border-b border-gray-700">
                    <div>
                      <h4 className="text-white font-medium">{item.title}</h4>
                      <p className="text-gray-400">${item.price}</p>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-400 hover:text-red-500"
                    >
                      Remove
                    </button>
                  </div>
                ))}
                <div className="mt-6">
                  <div className="flex justify-between text-white mb-4">
                    <span>Total:</span>
                    <span>${cart.reduce((total, item) => total + item.price, 0)}</span>
                  </div>
                  <button className="w-full bg-yellow-400 text-gray-900 font-bold py-3 px-6 rounded-lg hover:bg-yellow-500 transition-colors duration-200">
                    Checkout
                  </button>
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </section>
  );
} 
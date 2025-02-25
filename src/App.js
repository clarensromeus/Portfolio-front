import React, { useState } from 'react';
import { InView } from "react-intersection-observer";
import { motion, AnimatePresence } from "framer-motion";
import './App.css';

// Component imports
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Projects from './components/Projects';
import ContactMe from './components/ContactMe';
import Footer from './components/Footer';
import ScrollToTopFn from './components/ScrollToTopFn';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Statistics from './components/Statistics';

function App() {
  const [active, setActive] = useState("aboutme");
  const [cart, setCart] = useState([]);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [showCartPreview, setShowCartPreview] = useState(false);
  const [showAddedNotification, setShowAddedNotification] = useState(false);
  const [lastAddedItem, setLastAddedItem] = useState(null);

  const sections = [
    { sectionArt: AboutMe, id: "aboutme" },
    { sectionArt: Skills, id: "skills" },
    { sectionArt: Projects, id: "projects" },
    { sectionArt: Services, id: "services" },
    { sectionArt: Testimonials, id: "testimonials" },
    { sectionArt: ContactMe, id: "contact" },
    { sectionArt: Statistics, id: "statistics" }
  ];

  const addToCart = (item) => {
    setCart([...cart, item]);
    setLastAddedItem(item);
    setShowAddedNotification(true);
    setTimeout(() => setShowAddedNotification(false), 2000);
  };

  const removeFromCart = (itemId) => {
    setCart(cart.filter(item => item.id !== itemId));
    console.log(active)
  };

  return (
    <div className="App">
      {/* Modern Navbar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed w-full z-50 bg-gray-900/95 backdrop-blur-sm py-4 shadow-xl"
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.a
              href="#home"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-2xl font-bold text-white"
            >
              Portfolio<span className="text-yellow-400">.</span>
            </motion.a>

            {/* Right Section: Cart & Profile */}
            <div className="flex items-center space-x-6">
              {/* Shopping Cart */}
              <div className="relative">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onMouseEnter={() => setShowCartPreview(true)}
                  onMouseLeave={() => setShowCartPreview(false)}
                  className="relative"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  {cart.length > 0 && (
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="absolute -top-2 -right-2 bg-yellow-400 text-gray-900 text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center"
                    >
                      {cart.length}
                    </motion.span>
                  )}
                </motion.button>

                {/* Enhanced Cart Preview Dropdown */}
                <AnimatePresence>
                  {showCartPreview && cart.length > 0 && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute right-0 mt-4 w-96 bg-gray-800/95 backdrop-blur-md rounded-2xl shadow-xl py-4 z-50 border border-gray-700/50"
                    >
                      <div className="px-4 py-2 border-b border-gray-700/50">
                        <h3 className="text-lg font-bold text-white">Your Cart</h3>
                      </div>

                      <div className="max-h-96 overflow-y-auto scrollbar-thin scrollbar-thumb-yellow-400 scrollbar-track-gray-800">
                        {cart.map((item) => (
                          <motion.div
                            key={item.id}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="group relative flex items-start gap-4 p-4 hover:bg-gray-700/30 transition-colors duration-200"
                          >
                            {/* Item Image/Icon */}
                            <div className="flex-shrink-0 w-16 h-16 rounded-lg bg-gray-700/50 flex items-center justify-center text-2xl">
                              {item.icon}
                            </div>

                            {/* Item Details */}
                            <div className="flex-grow">
                              <h4 className="text-white font-medium mb-1 flex items-center gap-2">
                                {item.title}
                                <span className="text-xs px-2 py-1 bg-yellow-400/20 text-yellow-400 rounded-full">
                                  ${item.price}
                                </span>
                              </h4>
                              <p className="text-sm text-gray-400 mb-2">{item.description}</p>
                              
                              {/* Features Preview */}
                              <div className="flex flex-wrap gap-2">
                                {item.features?.slice(0, 2).map((feature, index) => (
                                  <span
                                    key={index}
                                    className="text-xs px-2 py-1 bg-gray-700/50 text-gray-300 rounded-full"
                                  >
                                    {feature}
                                  </span>
                                ))}
                              </div>
                            </div>

                            {/* Remove Button */}
                            <button
                              onClick={() => removeFromCart(item.id)}
                              className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                            >
                              <motion.div
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                className="p-1 rounded-full bg-red-400/10 text-red-400 hover:bg-red-400/20"
                              >
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                              </motion.div>
                            </button>
                          </motion.div>
                        ))}
                      </div>

                      {/* Cart Footer */}
                      <div className="p-4 border-t border-gray-700/50">
                        <div className="flex justify-between items-center mb-4">
                          <span className="text-gray-400">Total:</span>
                          <span className="text-xl font-bold text-white">
                            ${cart.reduce((total, item) => total + item.price, 0)}
                          </span>
                        </div>
                        <motion.button
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 
                            text-gray-900 font-bold py-3 px-6 rounded-xl
                            hover:from-yellow-500 hover:to-yellow-600 
                            transition-all duration-300 shadow-lg shadow-yellow-400/20"
                        >
                          Proceed to Checkout
                        </motion.button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Added to Cart Notification */}
                <AnimatePresence>
                  {showAddedNotification && lastAddedItem && (
                    <motion.div
                      initial={{ opacity: 0, y: 20, x: '-50%' }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className="fixed bottom-8 left-1/2 transform -translate-x-1/2 
                        bg-gray-800/95 backdrop-blur-md rounded-2xl shadow-xl 
                        border border-gray-700/50 p-4 flex items-center gap-4 z-50"
                    >
                      <div className="w-12 h-12 rounded-lg bg-gray-700/50 flex items-center justify-center text-xl">
                        {lastAddedItem.icon}
                      </div>
                      <div>
                        <p className="text-white font-medium">Added to Cart!</p>
                        <p className="text-sm text-gray-400">{lastAddedItem.title}</p>
                      </div>
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="w-6 h-6 rounded-full bg-green-400/20 text-green-400 flex items-center justify-center"
                      >
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* User Profile */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative"
              >
                <button
                  onClick={() => setIsProfileOpen(!isProfileOpen)}
                  className="flex items-center space-x-3"
                >
                  <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-yellow-400">
                    <img
                      src="https://scontent.fpap2-1.fna.fbcdn.net/v/t39.30808-6/332909716_194601149882979_8763357405262721712_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFBXaJ4sEvDxwTN-Eq3CvP-SVN-YFpxjj9JU35gWnGOP5DUT59D7S9QokHt1IIjFXjNyKXrjkQO5jqqx0CLPa5Z&_nc_ohc=ErDVivU8RfkQ7kNvgHkz0zo&_nc_oc=Adj4XGff-fG7YOo1tnhMoR3KncmoLEz8Y-jttvfkR7_Yw1pk0sgQSChroQN_w986OY8&_nc_zt=23&_nc_ht=scontent.fpap2-1.fna&_nc_gid=A1TVoR_Y0FcSdt1t9xso2xL&oh=00_AYAtRHYGBxWQb0hmlRkSOIbzFjUnHLD_304xl5ZDqiAbsQ&oe=67C15553"
                      alt="User Avatar"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className="text-white hidden md:block">R. clarens</span>
                </button>

                {/* Profile Dropdown */}
                <AnimatePresence>
                  {isProfileOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute right-0 mt-2 w-48 bg-gray-800 rounded-xl shadow-lg py-2 z-50"
                    >
                      <a href="#profile" className="block px-4 py-2 text-white hover:bg-gray-700">Profile</a>
                      <a href="#settings" className="block px-4 py-2 text-white hover:bg-gray-700">Settings</a>
                      <a href="#logout" className="block px-4 py-2 text-red-400 hover:bg-gray-700">Logout</a>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Main Content */}
      <Home />
      {sections.map((section, i) => (
        <InView
          key={section.id}
          threshold={0.2}
          onChange={(inView, entry) => {
            if (inView) {
              setActive(entry.target.id.toLowerCase());
            }
          }}
        >
          {({ ref }) => (
            <motion.div
              ref={ref}
              id={section.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="info"
            >
              <section.sectionArt addToCart={addToCart} />
            </motion.div>
          )}
        </InView>
      ))}

      <ScrollToTopFn />
      <Footer />
    </div>
  );
}

export default App;
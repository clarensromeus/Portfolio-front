import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function ScrollToTopFn() {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled up to given distance
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set the scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 p-3 bg-gradient-to-r from-yellow-400 to-yellow-500 
            rounded-full shadow-lg shadow-yellow-500/20 backdrop-blur-sm 
            transition-all duration-300 hover:shadow-yellow-500/30 
            hover:from-yellow-500 hover:to-yellow-600 group"
        >
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-900 transform transition-transform duration-300 group-hover:-translate-y-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </motion.svg>

          {/* Ripple effect */}
          <span className="absolute inset-0 rounded-full overflow-hidden">
            <span className="absolute inset-0 rounded-full bg-white/20 transform scale-0 group-hover:scale-150 transition-transform duration-500" />
          </span>

          {/* Glow effect */}
          <div className="absolute inset-0 rounded-full blur-md bg-yellow-400/50 -z-10" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}

export default ScrollToTopFn;

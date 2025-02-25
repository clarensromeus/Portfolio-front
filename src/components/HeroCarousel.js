import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const slides = [
  {
    id: 1,
    title: "Full-Stack Development",
    subtitle: "Building Modern Web Applications",
    description: "Creating seamless digital experiences with cutting-edge technologies",
    image: "/images/hero-1.jpg",
    color: "from-purple-600 to-blue-500"
  },
  {
    id: 2,
    title: "E-commerce Solutions",
    subtitle: "Powering Online Business",
    description: "Custom e-commerce platforms that drive sales and growth",
    image: "/images/hero-2.jpg",
    color: "from-yellow-400 to-orange-500"
  },
  {
    id: 3,
    title: "Creative Design",
    subtitle: "Stunning User Interfaces",
    description: "Beautiful and intuitive designs that engage users",
    image: "/images/hero-3.jpg",
    color: "from-green-400 to-teal-500"
  }
];

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black opacity-90 z-10" />

      {/* Carousel */}
      <div className="relative h-full">
        <AnimatePresence mode='wait'>
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7 }}
            className="absolute inset-0"
          >
            <div className="relative h-full">
              {/* Background Image */}
              <img
                src={slides[currentSlide].image}
                alt={slides[currentSlide].title}
                className="absolute inset-0 w-full h-full object-cover"
              />
              
              {/* Content */}
              <div className="relative z-20 h-full flex items-center">
                <div className="container mx-auto px-4">
                  <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="max-w-3xl"
                  >
                    <h2 className="text-lg text-yellow-400 font-medium mb-4">
                      {slides[currentSlide].subtitle}
                    </h2>
                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                      {slides[currentSlide].title}
                    </h1>
                    <p className="text-xl text-gray-300 mb-8">
                      {slides[currentSlide].description}
                    </p>
                    <div className="flex gap-4">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`px-8 py-4 rounded-full font-bold bg-gradient-to-r ${slides[currentSlide].color} text-white`}
                      >
                        Get Started
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-8 py-4 rounded-full font-bold border-2 border-white text-white hover:bg-white hover:text-gray-900 transition-colors duration-300"
                      >
                        Learn More
                      </motion.button>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Dots */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 flex gap-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentSlide(index);
                setIsAutoPlaying(false);
              }}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentSlide === index 
                  ? 'bg-yellow-400 w-8' 
                  : 'bg-gray-400 hover:bg-gray-300'
              }`}
            />
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={() => {
            setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
            setIsAutoPlaying(false);
          }}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 z-30 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors duration-300"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
            setIsAutoPlaying(false);
          }}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 z-30 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors duration-300"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </section>
  );
} 
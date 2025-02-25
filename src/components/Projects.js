// import './Projects.css'
import projects from '../assets/projects'

import { motion, useScroll, useTransform } from 'framer-motion';
import { useState, useRef } from 'react';

export default function Projects() {
    const [activeIndex, setActiveIndex] = useState(0);
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0, 1, 1, 0]);

    const handleNext = () => {
        setActiveIndex((prev) => (prev + 1) % projects.length);
    };

    const handlePrev = () => {
        setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length);
    };

    return (
        <section ref={containerRef} className="relative min-h-screen py-24 overflow-hidden bg-gradient-to-b from-gray-900 to-black" id="projects">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-yellow-400/10 via-transparent to-transparent opacity-40" />
                <motion.div 
                    className="absolute inset-0"
                    style={{
                        background: "radial-gradient(circle at 50% 50%, rgba(66, 63, 251, 0.1) 0%, transparent 50%)",
                        rotate: useTransform(scrollYProgress, [0, 1], [0, 360])
                    }}
                />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 75 }}
                    whileInView={{ opacity: 0.7, y: 0 }}
                    transition={{ ease: "easeInOut", duration: 0.7 }}
                    className="text-4xl font-bold text-yellow-400 mb-2"
                >
                    03
                </motion.div>

                <motion.h2
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.7 }}
                    className="text-4xl md:text-5xl font-bold text-white mb-16"
                >
                    Featured Projects
                </motion.h2>

                <div className="relative">
                    <motion.div style={{ y, opacity }} className="relative">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            {/* Project Image */}
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.7 }}
                                className="relative group"
                            >
                                <div className="relative rounded-2xl overflow-hidden">
                                    <img
                                        src={projects[activeIndex].image}
                                        alt={projects[activeIndex].title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                </div>
                                
                                {/* Decorative Elements */}
                                <div className="absolute -inset-4 bg-gradient-to-r from-yellow-400/20 to-purple-500/20 rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
                                <div className="absolute -inset-4 bg-gradient-to-r from-yellow-400/30 to-purple-500/30 rounded-2xl rotate-12 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
                            </motion.div>

                            {/* Project Info */}
                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.7 }}
                                className="space-y-6"
                            >
                                <h3 className="text-3xl font-bold text-white">
                                    {projects[activeIndex].title}
                                </h3>
                                <p className="text-gray-400 leading-relaxed">
                                    {projects[activeIndex].description}
                                </p>
                                {projects[activeIndex].note && (
                                    <p className="text-yellow-400/80 text-sm italic">
                                        {projects[activeIndex].note}
                                    </p>
                                )}
                                <div className="flex gap-4 pt-6">
                                    <motion.a
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        href={projects[activeIndex].website}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-8 py-3 bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 rounded-xl font-medium hover:from-yellow-500 hover:to-yellow-600 transition-all duration-300 shadow-lg shadow-yellow-500/25"
                                    >
                                        View Live
                                    </motion.a>
                                    <motion.a
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        href={projects[activeIndex].github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-8 py-3 border border-yellow-400 text-yellow-400 rounded-xl font-medium hover:bg-yellow-400 hover:text-gray-900 transition-all duration-300"
                                    >
                                        Source Code
                                    </motion.a>
                                </div>
                            </motion.div>
                        </div>

                        {/* Navigation Controls */}
                        <div className="flex justify-center items-center gap-8 mt-12">
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={handlePrev}
                                className="p-3 rounded-full bg-gray-800/50 text-white hover:bg-yellow-400 hover:text-gray-900 transition-all duration-300"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                </svg>
                            </motion.button>

                            {/* Project Navigation Dots */}
                            <div className="flex gap-3">
                                {projects.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setActiveIndex(index)}
                                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                            activeIndex === index 
                                                ? 'bg-yellow-400 w-6' 
                                                : 'bg-gray-600 hover:bg-gray-500'
                                        }`}
                                    />
                                ))}
                            </div>

                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={handleNext}
                                className="p-3 rounded-full bg-gray-800/50 text-white hover:bg-yellow-400 hover:text-gray-900 transition-all duration-300"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </motion.button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
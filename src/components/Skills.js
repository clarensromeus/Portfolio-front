import './Skills.css'
import languages from '../assets/languages'
import libraries from '../assets/libraries'
import tools from '../assets/tools'


import { motion, useScroll, useTransform } from 'framer-motion';
import { useState, useRef } from 'react';
import React from 'react';

export default function Skills() {
    const containerRef = useRef(null);
    const [activeTab, setActiveTab] = useState('languages');

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const categories = {
        languages: { title: 'Languages', data: languages, color: 'from-blue-400 to-blue-600' },
        libraries: { title: 'Libraries & Frameworks', data: libraries, color: 'from-purple-400 to-purple-600' },
        tools: { title: 'Tools & Platforms', data: tools, color: 'from-green-400 to-green-600' }
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    };

    return (
        <section ref={containerRef} className="relative min-h-screen py-24 overflow-hidden bg-gradient-to-b from-gray-900 to-black" id="skills">
            {/* Animated Background */}
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
                    04
                </motion.div>

                <motion.h2
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.7 }}
                    className="text-4xl md:text-5xl font-bold text-white mb-16"
                >
                    Technical Skills
                </motion.h2>

                {/* Category Tabs */}
                <div className="flex justify-center gap-4 mb-12">
                    {Object.entries(categories).map(([key, { title }]) => (
                        <motion.button
                            key={key}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setActiveTab(key)}
                            className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                                activeTab === key
                                    ? 'bg-yellow-400 text-gray-900'
                                    : 'bg-gray-800/50 text-gray-400 hover:bg-gray-800'
                            }`}
                        >
                            {title}
                        </motion.button>
                    ))}
                </div>

                {/* Skills Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="show"
                    className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
                >
                    {categories[activeTab].data.map((skill, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover={{ y: -10 }}
                            className="relative group"
                        >
                            <div className="relative bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-yellow-400/50 transition-all duration-300">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-12 h-12 flex items-center justify-center">
                                        {React.cloneElement(skill.svg, {
                                            className: "w-10 h-10 text-yellow-400"
                                        })}
                                    </div>
                                    <h3 className="text-lg font-semibold text-white">
                                        {skill.name}
                                    </h3>
                                </div>
                                
                                <div className="relative h-2 bg-gray-700 rounded-full overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: `${skill.level || 85}%` }}
                                        transition={{ duration: 1, ease: "easeOut" }}
                                        className={`absolute h-full bg-gradient-to-r ${categories[activeTab].color}`}
                                    />
                                </div>
                                <div className="mt-2 text-sm text-gray-400">
                                    Proficiency: {skill.level || 85}%
                                </div>

                                {/* Decorative Elements */}
                                <div className="absolute -inset-2 bg-gradient-to-r from-yellow-400/20 to-purple-500/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
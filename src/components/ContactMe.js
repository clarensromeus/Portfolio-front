import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from 'react';
import Form from './Form';
import './ContactMe.css';

function ContactMe() {
    const containerRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const socialLinks = [
        { name: 'GitHub', icon: '🐱', url: 'https://github.com/clarensromeus' },
        { name: 'LinkedIn', icon: '💼', url: 'https://linkedin.com/in/clarensromeus' },
        { name: 'Twitter', icon: '🐦', url: 'https://twitter.com/clarensromeus' },
        { name: 'Email', icon: '📧', url: 'mailto:romeusclarens10@gmail.com' }
    ];

    return (
        <section 
            ref={containerRef} 
            className="relative min-h-screen py-24 overflow-hidden bg-gradient-to-b from-gray-900 to-black"
            id="contact"
        >
            {/* Animated Background */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-400/10 via-transparent to-transparent opacity-40" />
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
                    viewport={{ once: true }}
                    className="text-4xl font-bold text-yellow-400 mb-2"
                >
                    05
                </motion.div>

                <motion.h2
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-bold text-white mb-16"
                >
                    Let's Connect
                </motion.h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Information */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50 hover:border-yellow-400/50 transition-all duration-300">
                            <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
                            <p className="text-gray-300 mb-8">
                                I'm always open to new opportunities and interesting projects. 
                                Let's create something amazing together!
                            </p>
                            
                            {/* Social Links */}
                            <div className="grid grid-cols-2 gap-4">
                                {socialLinks.map((link, index) => (
                                    <motion.a
                                        key={index}
                                        href={link.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="flex items-center gap-3 p-4 bg-gray-700/30 rounded-lg hover:bg-yellow-400/20 transition-all duration-300"
                                    >
                                        <span className="text-2xl">{link.icon}</span>
                                        <span className="text-white font-medium">{link.name}</span>
                                    </motion.a>
                                ))}
                            </div>
                        </div>

                        {/* Location Info */}
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50 hover:border-yellow-400/50 transition-all duration-300"
                        >
                            <h3 className="text-xl font-bold text-white mb-4">Location</h3>
                            <p className="text-gray-300">
                                Based in Haiti, Cap-haitien<br />
                                Available for remote work worldwide
                            </p>
                        </motion.div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                        className="relative group"
                    >
                        <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50 hover:border-yellow-400/50 transition-all duration-300">
                            <Form />
                        </div>
                        
                        {/* Decorative Elements */}
                        <div className="absolute -inset-2 bg-gradient-to-r from-yellow-400/20 to-purple-500/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

export default ContactMe;
import './AboutMe.css'
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function AboutMe() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
    const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);

    return (
        <section ref={ref} className="relative min-h-screen py-24 overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black opacity-90" />
                <div className="absolute inset-0 dot-pattern opacity-10" />
            </div>

            <div className="relative z-10 container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 75 }}
                    whileInView={{ opacity: .7, y: 0 }}
                    transition={{ ease: "easeInOut", duration: .7 }}
                    viewport={{ once: true }}
                    className="text-4xl font-bold text-yellow-400 mb-2"
                >

                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Column - Text Content */}
                    <motion.div
                        style={{ y, opacity }}
                        className="space-y-8"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-white">
                            Crafting Digital Excellence with{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
                                Passion & Innovation
                            </span>
                        </h2>
                        
                        <p className="text-xl text-gray-300 leading-relaxed">
                            With over 5 years of experience in full-stack development, I specialize in creating 
                            seamless digital experiences that combine cutting-edge technology with intuitive design.
                        </p>

                        <div className="grid grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <div className="text-3xl font-bold text-yellow-400">100+</div>
                                <div className="text-gray-400">Projects Completed</div>
                            </div>
                            <div className="space-y-2">
                                <div className="text-3xl font-bold text-yellow-400">50+</div>
                                <div className="text-gray-400">Happy Clients</div>
                            </div>
                            <div className="space-y-2">
                                <div className="text-3xl font-bold text-yellow-400">5+</div>
                                <div className="text-gray-400">Years Experience</div>
                            </div>
                            <div className="space-y-2">
                                <div className="text-3xl font-bold text-yellow-400">24/7</div>
                                <div className="text-gray-400">Support</div>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => window.open('/assets/RomeuScarens-CV.pdf', '_blank')}
                                className="px-8 py-4 bg-yellow-400 text-gray-900 rounded-full font-bold hover:bg-yellow-500 transition-colors duration-300"
                            >
                                Download CV
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-4 border-2 border-yellow-400 text-yellow-400 rounded-full font-bold hover:bg-yellow-400 hover:text-gray-900 transition-all duration-300"
                            >
                                My Work
                            </motion.button>
                        </div>
                    </motion.div>

                    {/* Right Column - Skills & Image */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="relative z-10 rounded-2xl overflow-hidden">
                            <img
                                src="/images/profile.jpg"
                                alt="Profile"
                                className="w-full h-auto rounded-2xl"
                            />
                            
                            {/* Floating Skills Cards */}
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 3, repeat: Infinity }}
                                className="absolute -left-12 top-1/4 bg-gray-800/90 backdrop-blur-sm p-4 rounded-xl border border-gray-700"
                            >
                                <div className="text-2xl mb-1">🚀</div>
                                <div className="text-white font-bold">Full-Stack</div>
                                <div className="text-gray-400 text-sm">Development</div>
                            </motion.div>

                            <motion.div
                                animate={{ y: [0, 10, 0] }}
                                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                                className="absolute -right-8 top-1/3 bg-gray-800/90 backdrop-blur-sm p-4 rounded-xl border border-gray-700"
                            >
                                <div className="text-2xl mb-1">⚡</div>
                                <div className="text-white font-bold">Performance</div>
                                <div className="text-gray-400 text-sm">Optimization</div>
                            </motion.div>

                            <motion.div
                                animate={{ y: [0, -15, 0] }}
                                transition={{ duration: 3, repeat: Infinity, delay: 2 }}
                                className="absolute left-1/4 -bottom-8 bg-gray-800/90 backdrop-blur-sm p-4 rounded-xl border border-gray-700"
                            >
                                <div className="text-2xl mb-1">🎨</div>
                                <div className="text-white font-bold">Cloud</div>
                                <div className="text-gray-400 text-sm">Architect</div>
                            </motion.div>
                        </div>

                        {/* Background Decorations */}
                        <div className="absolute -inset-4 -z-10 bg-gradient-to-r from-yellow-400/20 to-orange-500/20 rounded-2xl blur-2xl" />
                        <div className="absolute -inset-4 -z-10 bg-yellow-400/10 rounded-2xl rotate-12" />
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

// export default AboutMe
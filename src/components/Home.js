// external imports of module
import { Typewriter } from "react-simple-typewriter"
import './Home.css'
import SocialLogo from './SocialLogo'
import { socials } from '../assets/socials'

import { v4 as uuidv4 } from 'uuid';
import { motion } from "framer-motion";
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei';

function Home() {
    return (
        <section className="relative h-screen w-full bg-gradient-to-b from-black to-gray-900" id="home">
            <div className="absolute inset-0">
                <Canvas>
                    <OrbitControls enableZoom={false} />
                    <ambientLight intensity={1} />
                    <directionalLight position={[3, 2, 1]} />
                    <Sphere args={[1, 100, 200]} scale={2.4}>
                        <MeshDistortMaterial
                            color="#D9C427"
                            attach="material"
                            distort={0.5}
                            speed={2}
                            roughness={0}
                        />
                    </Sphere>
                </Canvas>
            </div>

            <div className="relative z-10 h-full container mx-auto px-4 flex flex-col lg:flex-row items-center justify-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="lg:w-1/2 text-center lg:text-left"
                >
                    <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6">
                        Welcome To My
                        <span className="text-yellow-400 block mt-2">Digital Universe</span>
                    </h1>
                    <h2 className="text-xl lg:text-2xl text-gray-300 mb-8">
                        I am{" "}
                        <span className="text-yellow-400">
                            <Typewriter
                                words={[
                                    "Romeus clarens",
                                    "a Full-stack Developer",
                                    "a Problem Solver",
                                    "an Innovation Enthusiast"
                                ]}
                                loop={true}
                                cursor={true}
                                cursorStyle="_"
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1000}
                            />
                        </span>
                    </h2>
                    
                    <div className="flex gap-4 justify-center lg:justify-start">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-3 bg-yellow-400 text-gray-900 rounded-full font-bold hover:bg-yellow-500 transition-colors duration-200"
                            onClick={() => document.getElementById('contact').scrollIntoView()}
                        >
                            Hire Me
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-3 border-2 border-yellow-400 text-yellow-400 rounded-full font-bold hover:bg-yellow-400 hover:text-gray-900 transition-all duration-200"
                            onClick={() => document.getElementById('services').scrollIntoView()}
                        >
                            View Services
                        </motion.button>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        className="flex gap-6 mt-12 justify-center lg:justify-start"
                    >
                        {socials.map((social) => (
                            <SocialLogo key={uuidv4()} social={social} />
                        ))}
                    </motion.div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="lg:w-1/2 mt-12 lg:mt-0"
                >
                    <div className="relative w-full max-w-lg mx-auto">
                        <div className="absolute top-0 -left-4 w-72 h-72 bg-yellow-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
                        <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
                        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default Home
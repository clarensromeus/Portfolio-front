import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei';
import { TypeAnimation } from 'react-type-animation';

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black overflow-hidden">
      {/* 3D Background Animation */}
      <div className="absolute inset-0 opacity-50">
        <Canvas>
          <OrbitControls enableZoom={false} />
          <ambientLight intensity={0.5} />
          <directionalLight position={[3, 2, 1]} />
          <Sphere args={[1, 100, 200]} scale={2.5}>
            <MeshDistortMaterial
              color="#D9C427"
              attach="material"
              distort={0.6}
              speed={1.5}
              roughness={0.2}
            />
          </Sphere>
        </Canvas>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 h-screen flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-4xl"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Transforming Ideas into
            <span className="text-yellow-400 block mt-2">Digital Excellence</span>
          </h1>
          
          <div className="text-xl md:text-2xl text-gray-300 mb-8">
            <TypeAnimation
              sequence={[
                'Full-Stack Development',
                2000,
                'Custom Solutions',
                2000,
                'E-commerce Expertise',
                2000,
                'Digital Innovation',
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </div>

          <p className="text-gray-400 text-lg mb-12 max-w-2xl">
            Specializing in creating powerful digital experiences and scalable solutions
            that drive business growth and user engagement.
          </p>

          <div className="flex flex-wrap gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-yellow-400 text-gray-900 rounded-full font-bold hover:bg-yellow-500 transition-colors duration-300"
              onClick={() => document.getElementById('services').scrollIntoView()}
            >
              Explore Services
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border-2 border-yellow-400 text-yellow-400 rounded-full font-bold hover:bg-yellow-400 hover:text-gray-900 transition-all duration-300"
              onClick={() => document.getElementById('contact').scrollIntoView()}
            >
              Get in Touch
            </motion.button>
          </div>
        </motion.div>

        {/* Featured Clients/Technologies */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-24"
        >
          <p className="text-gray-400 mb-6">Trusted by innovative companies</p>
          <div className="flex flex-wrap gap-8 items-center opacity-50">
            {/* Add client/technology logos here */}
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-yellow-400 rounded-full flex justify-center">
          <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 animate-bounce" />
        </div>
      </motion.div>
    </section>
  );
} 
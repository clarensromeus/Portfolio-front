import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PlayIcon, PauseIcon } from '@heroicons/react/solid';

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CEO, TechStart",
    company: "TechStart Inc.",
    videoUrl: "/videos/testimonial1.mp4",
    thumbnail: "/images/testimonial1.jpg",
    quote: "Working with this team transformed our online presence completely. The attention to detail and technical expertise is outstanding."
  },
  // Add more testimonials...
];

export default function VideoTestimonials() {
  const [activeVideo, setActiveVideo] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="py-24 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Client Success Stories
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Hear directly from our clients about their experience
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -10 }}
              className="bg-gray-800 rounded-2xl overflow-hidden"
            >
              <div className="relative aspect-video">
                {activeVideo === testimonial.id ? (
                  <video
                    src={testimonial.videoUrl}
                    className="w-full h-full object-cover"
                    controls={false}
                    autoPlay={isPlaying}
                    loop
                    muted
                  />
                ) : (
                  <img
                    src={testimonial.thumbnail}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                )}
                <button
                  onClick={() => {
                    setActiveVideo(testimonial.id);
                    setIsPlaying(!isPlaying);
                  }}
                  className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 hover:bg-opacity-50 transition-all duration-300"
                >
                  {activeVideo === testimonial.id && isPlaying ? (
                    <PauseIcon className="w-16 h-16 text-yellow-400" />
                  ) : (
                    <PlayIcon className="w-16 h-16 text-yellow-400" />
                  )}
                </button>
              </div>

              <div className="p-6">
                <blockquote className="text-gray-300 mb-4">
                  "{testimonial.quote}"
                </blockquote>
                <div className="flex items-center">
                  <div>
                    <h3 className="text-white font-bold">{testimonial.name}</h3>
                    <p className="text-gray-400 text-sm">
                      {testimonial.role}, {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 
import { motion } from "framer-motion";
import { useState } from 'react';

const testimonials = [
  {
    id: 1,
    name: "Jodelin Desrameaux",
    role: "CEO at Cap-dev",
    image: "https://github.com/user-attachments/assets/2595d229-84ce-4093-8d88-dddd37ae35ac",
    content: "Working with Romeus was incredible. His attention to detail and technical expertise transformed our vision into reality.",
    rating: 5
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Startup Founder",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    content: "The web development course was comprehensive and practical. I went from zero to launching my own web app in just 3 months!",
    rating: 5
  },
  {
    id: 3,
    name: "Chicstore Enterprise",
    role: "Products seller",
    image: "https://github.com/user-attachments/assets/ba60338b-f52d-484a-bc32-e5afabeac6fa",
    content: "Exceptional work on our e-commerce platform. The performance improvements were remarkable.",
    rating: 5
  }
];

export default function Testimonials() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  return (
    <section className="py-24 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Client Testimonials
          </h2>
          <p className="text-xl text-gray-400">
            Don't just take my word for it
          </p>
        </motion.div>

        <div className="relative">
          <div className="flex overflow-hidden">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, x: 100 }}
                animate={{ 
                  opacity: activeTestimonial === index ? 1 : 0,
                  x: activeTestimonial === index ? 0 : 100
                }}
                transition={{ duration: 0.5 }}
                className={`w-full flex-shrink-0 ${
                  activeTestimonial === index ? 'block' : 'hidden'
                }`}
              >
                <div className="bg-gray-800 rounded-2xl p-8 md:p-12 shadow-xl">
                  <div className="flex items-center mb-8">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h3 className="text-xl font-bold text-white">
                        {testimonial.name}
                      </h3>
                      <p className="text-yellow-400">{testimonial.role}</p>
                    </div>
                  </div>
                  <div className="mb-6">
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <svg
                          key={i}
                          className="w-6 h-6 text-yellow-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-gray-300 text-lg italic">
                      "{testimonial.content}"
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="flex justify-center mt-8 gap-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                  activeTestimonial === index ? 'bg-yellow-400' : 'bg-gray-600'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 
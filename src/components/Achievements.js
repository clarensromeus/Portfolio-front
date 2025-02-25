import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const achievements = [
  {
    id: 1,
    title: "Best Web Developer",
    organization: "TechAwards 2023",
    description: "Recognized for outstanding contributions to web development and innovation",
    icon: "🏆",
    year: "2023"
  },
  {
    id: 2,
    title: "Innovation Excellence",
    organization: "DigitalCraft Summit",
    description: "Award for most innovative use of emerging technologies",
    icon: "💡",
    year: "2022"
  },
  {
    id: 3,
    title: "Top Rated Freelancer",
    organization: "Upwork",
    description: "Maintained 100% client satisfaction rate with over 50 projects",
    icon: "⭐",
    year: "2021-2023"
  },
  {
    id: 4,
    title: "Community Leader",
    organization: "Dev Community",
    description: "Led and mentored 1000+ developers through workshops and seminars",
    icon: "👥",
    year: "2022"
  }
];

export default function Achievements() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section className="py-24 bg-gradient-to-b from-gray-900 to-black overflow-hidden">
      <div ref={ref} className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-yellow-400 text-lg font-semibold mb-4 block">
            Recognition
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Awards & Achievements
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Milestones and recognition in the journey of excellence
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700"
            >
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 bg-yellow-400/10 rounded-xl flex items-center justify-center text-3xl">
                  {achievement.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {achievement.title}
                  </h3>
                  <p className="text-yellow-400 font-medium mb-2">
                    {achievement.organization}
                  </p>
                  <p className="text-gray-400 mb-4">
                    {achievement.description}
                  </p>
                  <div className="flex items-center text-sm text-gray-500">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {achievement.year}
                  </div>
                </div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-400/10 to-orange-500/10 rounded-2xl blur opacity-30 group-hover:opacity-100 transition duration-300" />
            </motion.div>
          ))}
        </div>

        {/* Decorative Background Elements */}
        <div className="absolute top-1/2 left-0 w-64 h-64 bg-yellow-400/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl" />
      </div>
    </section>
  );
} 
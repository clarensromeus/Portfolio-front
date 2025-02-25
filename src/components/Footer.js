import './Footer.css'
import { motion } from 'framer-motion';

function Footer() {
    return (
        <footer className="bg-gray-900 pt-24 pb-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* About Section */}
                    <div>
                        <h3 className="text-2xl font-bold text-white mb-6">Your Name</h3>
                        <p className="text-gray-400 mb-6">
                            Creating innovative digital solutions with cutting-edge technology and 
                            exceptional user experiences.
                        </p>
                        <div className="flex space-x-4">
                            {/* Social Links */}
                            <motion.a
                                whileHover={{ y: -3 }}
                                href="https://github.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-yellow-400 transition-colors duration-300"
                            >
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.747-1.026 2.747-1.026.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.138 20.168 22 16.42 22 12c0-5.523-4.477-10-10-10z" clipRule="evenodd" />
                                </svg>
                            </motion.a>
                            <motion.a
                                whileHover={{ y: -3 }}
                                href="https://linkedin.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-yellow-400 transition-colors duration-300"
                            >
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                                </svg>
                            </motion.a>
                            {/* Add more social links */}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-6">Quick Links</h3>
                        <ul className="space-y-4">
                            <li>
                                <a href="#services" className="text-gray-400 hover:text-yellow-400 transition-colors duration-300">
                                    Services
                                </a>
                            </li>
                            <li>
                                <a href="#portfolio" className="text-gray-400 hover:text-yellow-400 transition-colors duration-300">
                                    Portfolio
                                </a>
                            </li>
                            <li>
                                <a href="#about" className="text-gray-400 hover:text-yellow-400 transition-colors duration-300">
                                    About
                                </a>
                            </li>
                            <li>
                                <a href="#contact" className="text-gray-400 hover:text-yellow-400 transition-colors duration-300">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-6">Contact</h3>
                        <ul className="space-y-4">
                            <li className="flex items-center text-gray-400">
                                <svg className="w-5 h-5 mr-3 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                romeusclarens10@gmail.com
                            </li>
                            <li className="flex items-center text-gray-400">
                                <svg className="w-5 h-5 mr-3 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                +509 (3850) 55-80
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-6">Newsletter</h3>
                        <p className="text-gray-400 mb-4">
                            Subscribe to receive updates and exclusive content.
                        </p>
                        <form className="space-y-4">
                            <input
                                type="email"
                                placeholder="Your email"
                                className="w-full bg-gray-800 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                            />
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full bg-yellow-400 text-gray-900 px-4 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition-colors duration-300"
                            >
                                Subscribe
                            </motion.button>
                        </form>
                    </div>
                </div>

                {/* Copyright */}
                <div className="border-t border-gray-800 pt-8">
                    <p className="text-center text-gray-400">
                        © {new Date().getFullYear()} Your Name. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
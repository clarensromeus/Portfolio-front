import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [focusedField, setFocusedField] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    setSubmitStatus('success');
    setIsSubmitting(false);
  };

  const inputClasses = `
    w-full bg-gray-900/50 backdrop-blur-sm text-white 
    px-6 py-4 rounded-xl border-2 
    transition-all duration-300 outline-none 
    ${focusedField ? 'border-yellow-400/50 shadow-[0_0_15px_rgba(250,204,21,0.1)]' : 'border-gray-700/50'}
    placeholder:text-gray-500 placeholder:transition-all
    focus:border-yellow-400/50 focus:shadow-[0_0_20px_rgba(250,204,21,0.15)]
    hover:border-gray-600/50
  `;

  return (
    <div className="w-full relative">
      {/* Decorative gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-yellow-400/5 via-purple-500/5 to-transparent rounded-2xl -z-10" />
      
      <motion.form
        onSubmit={handleSubmit}
        className="space-y-6 backdrop-blur-sm p-8 rounded-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="space-y-4">
          <div className="relative group">
            <label className="absolute left-6 -top-3 bg-gray-900 px-2 text-sm text-gray-400">
              Name
            </label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              onFocus={() => setFocusedField('name')}
              onBlur={() => setFocusedField(null)}
              className={inputClasses}
              placeholder="Enter your name"
            />
            <motion.div
              initial={false}
              animate={{ opacity: focusedField === 'name' ? 1 : 0 }}
              className="absolute inset-0 rounded-xl bg-gradient-to-r from-yellow-400/10 to-purple-500/10 -z-10 blur-md"
            />
          </div>

          <div className="relative group">
            <label className="absolute left-6 -top-3 bg-gray-900 px-2 text-sm text-gray-400">
              Email
            </label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              onFocus={() => setFocusedField('email')}
              onBlur={() => setFocusedField(null)}
              className={inputClasses}
              placeholder="Enter your email"
            />
            <motion.div
              initial={false}
              animate={{ opacity: focusedField === 'email' ? 1 : 0 }}
              className="absolute inset-0 rounded-xl bg-gradient-to-r from-yellow-400/10 to-purple-500/10 -z-10 blur-md"
            />
          </div>

          <div className="relative group">
            <label className="absolute left-6 -top-3 bg-gray-900 px-2 text-sm text-gray-400">
              Subject
            </label>
            <input
              type="text"
              value={formData.subject}
              onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              onFocus={() => setFocusedField('subject')}
              onBlur={() => setFocusedField(null)}
              className={inputClasses}
              placeholder="What's this about?"
            />
            <motion.div
              initial={false}
              animate={{ opacity: focusedField === 'subject' ? 1 : 0 }}
              className="absolute inset-0 rounded-xl bg-gradient-to-r from-yellow-400/10 to-purple-500/10 -z-10 blur-md"
            />
          </div>
        </div>

        <div className="relative group">
          <label className="absolute left-6 -top-3 bg-gray-900 px-2 text-sm text-gray-400">
            Message
          </label>
          <textarea
            required
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            onFocus={() => setFocusedField('message')}
            onBlur={() => setFocusedField(null)}
            className={`${inputClasses} h-40 resize-none`}
            placeholder="Write your message here..."
          />
          <motion.div
            initial={false}
            animate={{ opacity: focusedField === 'message' ? 1 : 0 }}
            className="absolute inset-0 rounded-xl bg-gradient-to-r from-yellow-400/10 to-purple-500/10 -z-10 blur-md"
          />
        </div>

        <motion.button
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.99 }}
          disabled={isSubmitting}
          className={`
            relative w-full py-4 px-6 rounded-xl font-bold text-lg
            transition-all duration-300 overflow-hidden
            ${isSubmitting 
              ? 'bg-gray-600 cursor-not-allowed' 
              : 'bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400 text-gray-900 hover:bg-[length:200%_100%]'
            }
            shadow-[0_0_15px_rgba(250,204,21,0.3)]
          `}
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"
          />
          <span className="relative flex items-center justify-center gap-2">
            {isSubmitting ? (
              <>
                <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
                </svg>
                Sending...
              </>
            ) : (
              'Send Message'
            )}
          </span>
        </motion.button>
      </motion.form>

      <AnimatePresence>
        {submitStatus === 'success' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="mt-8 p-6 bg-green-500/10 backdrop-blur-sm border-2 border-green-500/30 rounded-xl text-green-400 text-center shadow-[0_0_15px_rgba(34,197,94,0.2)]"
          >
            <p className="text-lg font-semibold">Thank you! Your message has been sent successfully.</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
} 
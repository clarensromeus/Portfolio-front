import { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";

function Form() {
    const [errorMessages, setErrorMessages] = useState({});
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [focusedField, setFocusedField] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const encode = (data) => {
        return Object.keys(data)
            .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
            .join("&");
    }

    function handleChange(evt) {
        const { name, value } = evt.target;
        setFormData(currData => ({
            ...currData,
            [name]: value
        }));
        // Clear error when user starts typing
        if (errorMessages[name]) {
            setErrorMessages(curr => ({...curr, [name]: ''}));
        }
    }

    async function handleSubmit(e) {
        e.preventDefault();
        const errors = {};
        const regex = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;

        if (formData.name === '') {
            errors.name = 'Please input your name!';
        }
        if (formData.email === '' || !regex.test(formData.email)) {
            errors.email = 'Please input a valid email!';
        }
        if (formData.message.length <= 9) {
            errors.message = 'Please write a message longer than 10 characters!';
        }

        setErrorMessages(errors);

        if (Object.keys(errors).length === 0) {
            setIsSubmitting(true);
            try {
                await fetch("/", {
                    method: "POST",
                    headers: { "Content-Type": "application/x-www-form-urlencoded" },
                    body: encode({ "form-name": "contact", ...formData })
                });
                alert("Success!");
                setFormData({ name: '', email: '', message: '' });
            } catch (error) {
                alert(error);
            } finally {
                setIsSubmitting(false);
            }
        }
    }

    const inputClasses = `
        w-full bg-gray-900/50 backdrop-blur-sm text-white 
        px-6 py-4 rounded-xl border-2 
        transition-all duration-300 outline-none 
        ${focusedField ? 'border-yellow-400/50 shadow-[0_0_15px_rgba(250,204,21,0.1)]' : 'border-gray-700/50'}
        placeholder:text-gray-400 placeholder:transition-all
        focus:border-yellow-400/50 focus:shadow-[0_0_20px_rgba(250,204,21,0.15)]
        hover:border-gray-600/50
    `;

    return (
        <form name='contact' method='POST' data-netlify='true' className="space-y-6">
            <input type='hidden' name='form-name' value='contact' />
            
            {/* Name Field */}
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="relative"
            >
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('name')}
                    onBlur={() => setFocusedField(null)}
                    className={inputClasses}
                    placeholder="Your Name"
                    required
                />
                <AnimatePresence>
                    {errorMessages.name && (
                        <motion.span
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="text-red-400 text-sm mt-1 ml-1"
                        >
                            {errorMessages.name}
                        </motion.span>
                    )}
                </AnimatePresence>
            </motion.div>

            {/* Email Field */}
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="relative"
            >
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField(null)}
                    className={inputClasses}
                    placeholder="Your Email"
                    required
                />
                <AnimatePresence>
                    {errorMessages.email && (
                        <motion.span
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="text-red-400 text-sm mt-1 ml-1"
                        >
                            {errorMessages.email}
                        </motion.span>
                    )}
                </AnimatePresence>
            </motion.div>

            {/* Message Field */}
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="relative"
            >
                <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField(null)}
                    className={`${inputClasses} h-40 resize-none`}
                    placeholder="What would you like to say?"
                    required
                />
                <AnimatePresence>
                    {errorMessages.message && (
                        <motion.span
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="text-red-400 text-sm mt-1 ml-1"
                        >
                            {errorMessages.message}
                        </motion.span>
                    )}
                </AnimatePresence>
            </motion.div>

            {/* Submit Button */}
            <motion.button
                type="submit"
                onClick={handleSubmit}
                disabled={isSubmitting}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className={`
                    relative w-full py-4 px-6 rounded-xl font-bold text-lg
                    transition-all duration-300 overflow-hidden group
                    ${isSubmitting 
                        ? 'bg-gray-600 cursor-not-allowed' 
                        : 'bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400 text-gray-900 hover:bg-[length:200%_100%]'
                    }
                    shadow-[0_0_15px_rgba(250,204,21,0.3)]
                `}
            >
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
                        <>
                            Send Message
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-rocket-takeoff-fill" viewBox="0 0 16 16">
                                <path d="M12.17 9.53c2.307-2.592 3.278-4.684 3.641-6.218.21-.887.214-1.58.16-2.065a3.578 3.578 0 0 0-.108-.563 2.22 2.22 0 0 0-.078-.23V.453c-.073-.164-.168-.234-.352-.295a2.35 2.35 0 0 0-.16-.045 3.797 3.797 0 0 0-.57-.093c-.49-.044-1.19-.03-2.08.188-1.536.374-3.618 1.343-6.161 3.604l-2.4.238h-.006a2.552 2.552 0 0 0-1.524.734L.15 7.17a.512.512 0 0 0 .433.868l1.896-.271c.28-.04.592.013.955.132.232.076.437.16.655.248l.203.083c.196.816.66 1.58 1.275 2.195.613.614 1.376 1.08 2.191 1.277l.082.202c.089.218.173.424.249.657.118.363.172.676.132.956l-.271 1.9a.512.512 0 0 0 .867.433l2.382-2.386c.41-.41.668-.949.732-1.526l.24-2.408Zm.11-3.699c-.797.8-1.93.961-2.528.362-.598-.6-.436-1.733.361-2.532.798-.799 1.93-.96 2.528-.361.599.599.437 1.732-.36 2.531Z"/>
                                <path d="M5.205 10.787a7.632 7.632 0 0 0 1.804 1.352c-1.118 1.007-4.929 2.028-5.054 1.903-.126-.127.737-4.189 1.839-5.18.346.69.837 1.35 1.411 1.925Z"/>
                            </svg>
                        </>
                    )}
                </span>
            </motion.button>
        </form>
    );
}

export default Form;
import Form from './Form';
import './ContactMe.css'

import { motion } from "framer-motion";

function ContactMe() {
    return (
        <section className="contact" id="contact">
            <motion.div
                initial={{ opacity: 0, y: 75 }}
                whileInView={{ opacity: .7, y: 0 }}
                transition={{ ease: "easeInOut", duration: .7 }}
                viewport={{ once: true }}
                className='number-section'>
                05
            </motion.div>
            <motion.h2
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ ease: "easeInOut", duration: .7 }}
                viewport={{ once: true }}
                className='connect-title title'>
                Contact Me
            </motion.h2>
            <div className='container-contact'>
                <div className='container-form'>
                    <Form />
                </div>
            </div>
        </section>
    )
}

export default ContactMe;
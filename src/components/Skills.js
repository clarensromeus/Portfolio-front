import './Skills.css'
import TechContainer from './TechContainer'
import languages from '../assets/languages'
import libraries from '../assets/libraries'
import tools from '../assets/tools'
import { v4 as uuidv4 } from 'uuid';

import { motion } from "framer-motion";


function Skills() {

    return (
        <section className="skills" id="skills">
            <div className='container-skills'>

                <motion.div
                    initial={{ opacity: 0, y: 75 }}
                    whileInView={{ opacity: .7, y: 0 }}
                    transition={{ ease: "easeInOut", duration: .7 }}
                    viewport={{ once: true }}
                    className='number-section'>02</motion.div>

                <motion.h2
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ ease: "easeInOut", duration: .7 }}
                    viewport={{ once: true }}
                    className='skills-title title'>
                    My Skills
                </motion.h2>

                <div className='tech-container'>
                    <div>
                        <motion.h3
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ ease: "easeInOut", duration: .7 }}
                            viewport={{ once: true }}
                            className='tech-container-title'>
                            Languages / databases
                        </motion.h3>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ ease: "easeInOut", duration: .7 }}
                        viewport={{ once: true }}
                        className='container-languages'>
                        {languages.map((tech) => (
                            <TechContainer
                                key={uuidv4()}
                                name={tech.name}
                                svg={tech.svg} />
                        ))}
                    </motion.div>
                </div>

                <div className='tech-container'>
                    <div>
                        <motion.h3
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ ease: "easeInOut", duration: .7 }}
                            viewport={{ once: true }}
                            className='tech-container-title'>
                            Libraries
                        </motion.h3>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ ease: "easeInOut", duration: .7 }}
                        viewport={{ once: true }}
                        className='container-languages'>
                        {libraries.map((tech) => (
                            <TechContainer
                                key={uuidv4()}
                                name={tech.name}
                                svg={tech.svg} />
                        ))}
                    </motion.div>
                </div>

                <div className='tech-container'>
                    <div>
                        <motion.h3
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ ease: "easeInOut", duration: .7 }}
                            viewport={{ once: true }} className='tech-container-title'>
                            Tools / Frameworks
                        </motion.h3>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ ease: "easeInOut", duration: .7 }}
                        viewport={{ once: true }}
                        className='container-languages'>
                        {tools.map((tech) => (
                            <TechContainer
                                key={uuidv4()}
                                name={tech.name}
                                svg={tech.svg} />
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default Skills
import './Blog.css'
import ProjectCard from './ProjectCard';
import projects from '../assets/projects'
import { v4 as uuidv4 } from 'uuid';

import { motion } from "framer-motion";

function Projects() {
    return (
        <section className="blogs" id="blogs">

            <div className='blogs-container'>

                <motion.div
                    initial={{ opacity: 0, y: 75 }}
                    whileInView={{ opacity: .7, y: 0 }}
                    transition={{ ease: "easeInOut", duration: .7 }}
                    viewport={{ once: true }} className='number-section'>04</motion.div>

                <motion.h2
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ ease: "easeInOut", duration: .7 }}
                    viewport={{ once: true }}
                    className='projects-title title'>
                    My Blogs
                </motion.h2>

                {projects.map((project) => (
                    <ProjectCard
                        key={uuidv4()}
                        project={project} />
                ))}

            </div>
        </section>
    )
}

export default Projects
import './ProjectCard.css'
import { motion } from "framer-motion";

function ProjectCard({ project }) {

    const cardImgStyle = {
        backgroundImage: `url(${project.image})`,
    }

    return (
        <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ ease: "easeInOut", duration: .7 }}
            viewport={{ once: true }}
            className='project-card'>
            <div className='card-img lazyload' style={cardImgStyle}></div>
            <div className='card-info'>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                {project.note &&
                    <p className='note'>{project.note}</p>
                }
                <div className='link-container'>
                    <a className='card-btn' href={project.website} aria-label='Link for project website' target='blank'>Live</a>
                    <a className='card-btn' href={project.github} aria-label='Link for project github' target='blank'>Code</a>
                </div>
            </div>
        </motion.div>
    )
}

export default ProjectCard;
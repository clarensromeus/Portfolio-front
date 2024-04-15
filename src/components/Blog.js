import './Blog.css'
import Blogs from "../assets/blogs"

import { motion } from "framer-motion";


function AboutMe() {

    return (
        <section className='aboutme' id='aboutme'>
            <div
                className='container-aboutme'>

                <motion.div
                    initial={{ opacity: 0, y: 75 }}
                    whileInView={{ opacity: .7, y: 0 }}
                    transition={{ ease: "easeInOut", duration: .7 }}
                    viewport={{ once: true }}
                    className='number-section'>04</motion.div>

                <motion.h2
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ ease: "easeInOut", duration: .7 }}
                    viewport={{ once: true }}
                    className='aboutme-title title'>
                     My Blogs
                </motion.h2>


                <div className='container-about-knowledge'>
                    {Blogs.map((blogs, index)=> {
                        return (
                            <a className="goTo" href={`#${blogs.link}`}>
                             <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ ease: "easeInOut", duration: .7 }}
                                viewport={{ once: true }}
                                className='container-engineer-card'>
                                {blogs.svg}
                                <p>{blogs.title}</p>
                              </motion.div>
                            </a>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default AboutMe
import React from 'react'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <>
      <div className='w-365 h-150 bg-white shadow-xl my-8 mx-8 rounded-xl' id='about'>
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className='max-w-5xl bg-white  my-8 mx-auto rounded-xl p-8'
        >
        <h1 className='font-bold text-4xl text-center mt-16 text-indigo-500'>
          About Me
        </h1>

        <p className='mt-16 px-16 text-lg  leading-10'>
          I am <span className='font-bold'>Balamurugan Ramesh</span>, an Information Technology student with a strong interest in building practical software solutions. As a motivated fresher, I enjoy working on real-world projects that help me understand how technology can solve everyday problems. During my academic journey, I have focused on improving my problem-solving abilities and gaining hands-on experience through project development and continuous learning.
        </p>
      </motion.div>
      </div>
    </>
  )
}

export default About
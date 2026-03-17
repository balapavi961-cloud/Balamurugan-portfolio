import React from 'react'
import { motion } from 'framer-motion'

const Navbar = () => {
  return (
    <>
      <motion.div 
        initial={{ y: -100, opacity: 0, x: "-50%" }}
        animate={{ y: 0, opacity: 1, x: "-50%" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className='fixed top-4 left-1/2 transform'
      >
        <ul className='flex items-center gap-8 px-8 py-3 bg-white shadow-lg rounded-2xl font-semibold cursor-pointer'>
          <h1 className='font-bold text-indigo-700 text-xl'><a href='#home'>BR.</a></h1>
          <motion.li whileHover={{ scale: 1.1 }} className='ml-8'><a href="#home">Home</a></motion.li>
          <motion.li whileHover={{ scale: 1.1 }} className='ml-8'><a href="#about">About</a></motion.li>
          <motion.li whileHover={{ scale: 1.1 }} className='ml-8'><a href="#skills">Skills</a></motion.li>
          <motion.li whileHover={{ scale: 1.1 }} className='ml-8'><a href="#projects">Project</a></motion.li>
          <motion.li whileHover={{ scale: 1.1 }} className='ml-8 bg-indigo-500 px-4 py-2 text-white rounded-2xl'><a href="#contact">Contact</a></motion.li>
        </ul>
      </motion.div>
    </>
  )
}
export default Navbar;
import React from 'react'
import { motion } from 'framer-motion'
import Image from '../assets/Balamurugan R.jpeg'
const Home = () => {
  return (
    <>
        <div className='flex w-365 h-160 bg-white shadow-xl my-17 mx-8 rounded-xl ' id='home'>
          <div className='flex items-center min-h-screen flex-col w-2/4 '>
              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className='m-24 leading-8'
              >
              <motion.h3 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className='text-xl font-inter mb-4 text-indigo-500'
              >
                Softer Developer
              </motion.h3>
              <motion.h1 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className='text-5xl mb-4 font-bold'
              >
                BALAMURUGAN <span className='text-indigo-500 font-serif'>R</span>
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                className='font-inter text-gray-600'
              >
                I am eager to start my professional journey and gain real-world experience in the software industry. I am passionate about learning, improving my abilities, and adapting to new challenges. I look forward to working in a professional environment where I can grow and contribute effectively. My goal is to build a strong career and make a positive impact in the field of technology
              </motion.p>

              <motion.button 
                whileHover={{ scale: 1.05 }} 
                transition={{ type: "spring", stiffness: 300 }}
                className='ring-1 px-8 py-2 mt-8 rounded-lg shadow-xl hover:cursor-pointer'
              >
                Resume
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.05 }} 
                transition={{ type: "spring", stiffness: 300 }}
                className='bg-indigo-500 px-8 py-2 ml-4 text-white rounded-lg shadow-xl hover:cursor-pointer'
              >
                Contact Me
              </motion.button>
              </motion.div>

          </div>
          <div className='w-1/2 flex justify-center'>
          <motion.div 
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className=' flex w-90 h-90 items-center justify-center my-26 rounded'
          >
            <img src={Image} alt="My Photo" className="w-86 h-96 object-cover rounded-full shadow-2xl border-4 border-blue-300" />
          </motion.div>
          </div>
        </div>
    </>
  )
}

export default Home;
import React from 'react'
import { motion } from 'framer-motion'
import { FaHospital } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa";
const Project = () => {
  return (
    <>
        <div className='w-365 h-160 bg-white shadow-xl my-17 mx-8 rounded-xl ' id='projects'>
            <h1 className='text-indigo-500 font-bold text-4xl mt-4 text-center p-6'>My Projects</h1>
            <div className='grid grid-cols-2 gap-24 mt-12 mx-12'>
                <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: false, amount: 0.2 }}
                    transition={{ duration: 0.5 }}
                    whileHover={{ y: -10 }}
                    className="bg-white shadow-lg p-6 rounded-xl"
                >
                    <FaHospital className="text-4xl text-red-500 mb-4" />
                    <h2 className="text-xl font-bold">MedCarePlus</h2>
                    <ul className='list-disc p-4 leading-7'>
                        <li>web-based Hospital Management System to streamline patient registration, appointment
scheduling, doctor management, and medical records handling</li>
                        <li>Built a responsive frontend using React.js and implemented RESTful APIs using Node.js and
Express for secure data communication.</li>
                        <li>Tech Stack: React.js(Front-end), Node.js(Back-end),MySql (DataBase)</li>
                    </ul>
                    <motion.button 
                        whileHover={{ scale: 1.05 }} 
                        whileTap={{ scale: 0.95 }}
                        className='ring-1 px-8 py-2 mt-8 rounded-lg shadow-xl hover:cursor-pointer'
                    >
                        GitHub
                    </motion.button>
                    <motion.button 
                        whileHover={{ scale: 1.05 }} 
                        whileTap={{ scale: 0.95 }}
                        className='bg-indigo-500 px-8 py-2 ml-4 text-white rounded-lg shadow-xl hover:cursor-pointer'
                    >
                        view
                    </motion.button>
                </motion.div>
                <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: false, amount: 0.2 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    whileHover={{ y: -10 }}
                    className="bg-white shadow-lg p-6 rounded-xl"
                >
                    <FaGraduationCap className="text-4xl text-indigo-500" />
                    <h2 className="text-xl font-bold">EdQuest</h2>
                    <ul className='list-disc p-4 leading-7'>
                        <li>User Registration and Login for secure access and Browse and select courses from the course
catalog.</li>
                        <li>Enabled course browsing, content reading, and quiz-taking functionalities.This Help to study and improve skills</li>
                        <li>Tech Stack: Java, OOPs, Collections Framework</li>

                    </ul>
                    <motion.button 
                        whileHover={{ scale: 1.05 }} 
                        whileTap={{ scale: 0.95 }}
                        className='ring-1 px-8 py-2 mt-8 rounded-lg shadow-xl hover:cursor-pointer'
                    >
                        GitHub
                    </motion.button>
                    <motion.button 
                        whileHover={{ scale: 1.05 }} 
                        whileTap={{ scale: 0.95 }}
                        className='bg-indigo-500 px-8 py-2 ml-4 text-white rounded-lg shadow-xl hover:cursor-pointer'
                    >
                        view
                    </motion.button>
                </motion.div>
            </div>
        </div>
    </>
  )
}

export default Project
import React from 'react'
import { motion } from 'framer-motion'

const Skills = () => {
  return (
    <>
        <div className='w-365 h-160 bg-white shadow-xl my-17 mx-8 rounded-xl' id='skills'>
            <h1 className='p-6 text-center font-bold font-space text-4xl text-indigo-500 '>Skills</h1>
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.2 }
                }
              }}
              className="grid grid-cols-3 gap-24 mt-12 mx-12"
            >
                <motion.div 
                  variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: { opacity: 1, y: 0 }
                  }}
                  transition={{ duration: 0.5 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white shadow-lg p-6 rounded-xl"
                >
                    <h2 className="text-xl font-bold mb-4">Programming Languages</h2>
                    <ul className="list-none">
                        <li>⭐ Java</li>
                        <li>⭐ C language</li>
                        <li>⭐ C++</li>
                        <li>⭐ Python</li>
                    </ul>
                </motion.div>
                <motion.div 
                  variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: { opacity: 1, y: 0 }
                  }}
                  transition={{ duration: 0.5 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white shadow-lg p-6 rounded-xl"
                >
                    <h2 className="text-xl font-bold mb-4">Frontend</h2>
                    <ul className="list-none">
                        <li>⭐ HTML</li>
                        <li>⭐ CSS</li>
                        <li>⭐ JavaScript</li>
                        <li>⭐ React</li>
                    </ul>
                </motion.div>

                <motion.div 
                  variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: { opacity: 1, y: 0 }
                  }}
                  transition={{ duration: 0.5 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white shadow-lg p-6 rounded-xl"
                >
                    <h2 className="text-xl font-bold mb-4">Backend</h2>
                    <ul className="list-none">
                        <li>⭐ Node JS</li>
                        <li>⭐ Express JS</li>
                        <li>⭐ MySql</li>
                        
                    </ul>
                </motion.div>

                <motion.div 
                  variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: { opacity: 1, y: 0 }
                  }}
                  transition={{ duration: 0.5 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white shadow-lg p-6 rounded-xl"
                >
                    <h2 className="text-xl font-bold mb-4">Tools</h2>
                    <ul className="list-none">
                        <li>⭐ GitHub</li>
                        <li>⭐ VS Code</li>
                        <li>⭐ IntelliJ</li>
                        
                    </ul>
                </motion.div>

            </motion.div>
        </div>
    </>
  )
}

export default Skills
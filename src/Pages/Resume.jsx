import { motion } from 'framer-motion'

function Resume(){
    return(
        <>
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.5 }}
            >
                <h1>My Resume</h1>
            </motion.div>
            
        </>
    )
}

export default Resume;
import { motion } from 'framer-motion'
import homepageImage from '../assets/images/home.jpg' // Ensure the path and file extension are correct

const Home = () => {
  return (
    <motion.div
      className='relative h-screen bg-cover bg-center'
      style={{ backgroundImage: `url(${homepageImage})` }}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.5 }}
    >
      <div className='absolute inset-0 bg-gradient-to-b from-black/75 to-transparent'></div>
      {/* Other content can go here */}
    </motion.div>
  )
}

export default Home

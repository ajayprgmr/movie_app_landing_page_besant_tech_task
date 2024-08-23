import { Outlet } from 'react-router-dom'
import Navbar from './Navbar' // Adjust the import path if necessary
import { motion } from 'framer-motion'
import homepageImage from '../assets/images/home.jpg'

const Layout = () => {
  return (
    <div>
      <Navbar />
      <div className='main-content'>
        <Outlet />
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
      </div>
    </div>
  )
}

export default Layout

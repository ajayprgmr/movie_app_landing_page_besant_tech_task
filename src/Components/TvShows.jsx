import { motion } from 'framer-motion'
const TvShows = () => {
  return (
    <motion.div
      className='relative h-screen bg-cover bg-center'
      style={{
        backgroundImage:
          "url('https://media.gq.com/photos/5df5a3794e7a380009b83bbd/16:9/w_2560%2Cc_limit/BestShows.jpg')",
      }}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.5 }}
    >
      <div className='absolute inset-0 bg-gradient-to-b from-black/75 to-transparent'></div>
    </motion.div>
  )
}

export default TvShows

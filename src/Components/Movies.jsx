import { motion } from 'framer-motion'
const Movies = () => {
  return (
    <motion.div
      className='h-[94vh] overflow-hidden '
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.2 }}
      transition={{ duration: 0.5 }}
    >
      <img
        src='https://rukminim2.flixcart.com/image/850/1000/jcc9ci80/poster/b/x/b/medium-pl-widescreen-pixel-monitor-multi-movie-large-wall-poster-original-imaetdvaxmj6gczg.jpeg?q=90&crop=false'
        alt='homePage_img'
        className='w-screen'
      />
    </motion.div>
  )
}

export default Movies

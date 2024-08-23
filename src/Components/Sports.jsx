import { motion } from 'framer-motion'
const sports = () => {
  return (
    <motion.div
      className='relative h-screen bg-cover bg-center'
      style={{
        backgroundImage: "url('https://s2.dmcdn.net/v/WuB5i1cngaJ4UQ9_B')",
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

export default sports

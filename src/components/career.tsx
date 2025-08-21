'use client'

import { CareerItem } from './career-item'
import { FileTextIcon } from 'lucide-react'
import { data } from '@/constants'
import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'

export function Career() {
  const { career } = data

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className='relative w-full py-12 px-4 md:px-8 space-y-12 overflow-hidden flex flex-col items-center'
    >
      {/* Glassmorphic Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-cyan-400/20 via-blue-500/20 to-purple-600/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-pink-400/20 via-red-500/20 to-yellow-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-emerald-400/20 via-teal-500/20 to-cyan-600/20 rounded-full blur-3xl animate-pulse delay-2000" />
      </div>

      {/* Header animation with vibrant typing effect */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className='flex gap-x-4 items-center justify-center mb-6 w-full'
      >
        <motion.div
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            rotate: { duration: 3, repeat: Infinity, ease: 'linear' },
            scale: { duration: 2, repeat: Infinity, ease: 'easeInOut' }
          }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-full blur-md opacity-70 animate-pulse" />
          <FileTextIcon className='size-7 relative z-10 stroke-[1.5] text-white drop-shadow-lg' />
        </motion.div>
        <TypeAnimation
          sequence={['Career & Works', 5000, 'Professional Journey', 5000, 'Work Experience', 5000, '']}
          speed={50}
          repeat={Infinity}
          cursor={true}
          wrapper='h2'
          className='text-4xl font-bold tracking-tight bg-gradient-to-r from-cyan-400 via-blue-500 via-purple-600 to-pink-500 bg-clip-text text-transparent drop-shadow-2xl text-center'
        />
      </motion.div>

      {/* Centered Career Timeline Container */}
      <div className='w-full mx-auto relative z-10 career-timeline-compact'>
        <ol className='ml-[11.5px] flex flex-col gap-y-8'>
          {career.map((item, index) => (
            <motion.li
              key={index}
              className='ms-[30px] w-full'
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.6 }}
            >
              <CareerItem {...item} />
            </motion.li>
          ))}
        </ol>
      </div>
    </motion.section>
  )
}

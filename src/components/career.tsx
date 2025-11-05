'use client'

import { CareerItem } from './career-item'
import { FileTextIcon } from 'lucide-react'
import { data } from '@/constants'
import { motion } from 'framer-motion'

export function Career() {
  const { career } = data

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className='relative w-full px-3 sm:px-4 mb-8 sm:mb-12 md:mb-16'
    >
      {/* Career section with About section styling */}
      <div className="w-full max-w-6xl lg:max-w-7xl mx-auto flex flex-col font-mono gap-6 sm:gap-8 md:gap-10 text-white text-pretty p-6 sm:p-8 md:p-10 lg:p-12 rounded-2xl border border-white/20 shadow-2xl backdrop-blur-lg bg-gradient-to-br from-white/20 via-white/10 to-white/5">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className='flex gap-x-3 sm:gap-x-4 items-center justify-center mb-4 sm:mb-6'
        >
          <span className='text-3xl sm:text-4xl md:text-5xl'>💼</span>
          <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-cyan-300'>
            Career & Works
          </h2>
        </motion.div>

        {/* 2-column grid layout */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8'>
          {career.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.3 }}
              className="w-full"
            >
              <CareerItem {...item} id={index} />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

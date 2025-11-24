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

        {/* Timeline roadmap layout */}
        <div className='relative'>
          {/* Vertical timeline line */}
          <div className="absolute left-4 sm:left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-400 via-pink-400 to-cyan-400" />

          {career.map((item, index) => {
            const isEven = index % 2 === 0
            // Extract year from the start date (e.g., "Jan, 2023" -> "2023")
            const year = item.jobs[0]?.start.split(',')[1]?.trim() || item.jobs[0]?.start.split(' ')[1] || ''

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: isEven ? -50 : 50 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: false, amount: 0.3 }}
                className={`relative flex items-center mb-12 sm:mb-16 last:mb-0 ${
                  isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline year label */}
                <div className="absolute left-4 sm:left-6 md:left-1/2 transform -translate-x-1/2 z-10">
                  <div className="px-3 py-1 bg-gradient-to-r from-purple-500/90 to-pink-500/90 backdrop-blur-sm rounded-full shadow-lg">
                    <span className="text-xs sm:text-sm font-bold text-white whitespace-nowrap">{year}</span>
                  </div>
                </div>

                {/* Content container */}
                <div className={`w-full md:w-[calc(50%-2rem)] ml-12 sm:ml-16 md:ml-0 ${
                  isEven ? 'md:pr-12 lg:pr-16' : 'md:pl-12 lg:pl-16'
                }`}>
                  <CareerItem {...item} id={index} />
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </motion.section>
  )
}

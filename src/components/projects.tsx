'use client'

import { ProjectCard } from './project-card'
import { CodeIcon } from 'lucide-react'
import { data } from '@/constants'
import { motion } from 'framer-motion'

export function Projects() {
  const { projects } = data

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className='relative w-full px-1 sm:px-2 mb-8 sm:mb-12 md:mb-16'
    >
      {/* Projects section with About section styling */}
      <div className="w-full mx-auto flex flex-col font-mono gap-6 sm:gap-8 md:gap-10 text-white text-pretty p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 rounded-2xl border border-white/20 shadow-2xl backdrop-blur-lg bg-gradient-to-br from-white/20 via-white/10 to-white/5">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className='flex gap-x-3 sm:gap-x-4 items-center justify-center mb-6 sm:mb-8'
        >
          <span className='text-3xl sm:text-4xl md:text-5xl'>🚀</span>
          <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-cyan-300'>
            Projects & Crafts
          </h2>
        </motion.div>

        {/* Responsive grid layout - 2 columns on larger screens */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10'>
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true, amount: 0.3 }}
              className="w-full"
            >
              <ProjectCard project={project} index={index} />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

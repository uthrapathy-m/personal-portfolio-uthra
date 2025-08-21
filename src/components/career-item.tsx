'use client'

import { motion } from 'framer-motion'
import { Button } from './ui/button'
import { Badge } from './ui/badge'
import { ArrowRightIcon } from 'lucide-react'
import { TypeAnimation } from 'react-type-animation'
import { type CareerProps } from '@/types'

export function CareerItem({ link, company, jobs, badges }: CareerProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      viewport={{ once: true }}
      className="relative ps-8 border-s-2 border-gradient-to-b from-cyan-400 via-blue-500 to-purple-600 pb-8 last:pb-0 group"
    >
      {/* Vibrant Animated Timeline Dot */}
      <motion.div
        initial={{ opacity: 0, scale: 0.6 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="absolute size-4 rounded-full mt-[8px] -start-[10px] border-2 border-white/30 group-hover:ring-8 group-hover:ring-cyan-400/20 transition-all duration-300"
      >
        {/* Glowing gradient background */}
        <div className="absolute inset-0 bg-gradient-to-tr from-cyan-400 via-blue-500 to-purple-600 rounded-full animate-pulse" />
        <div className="absolute inset-0 bg-gradient-to-tr from-pink-400 via-red-500 to-yellow-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse" />
        {/* Glow effect */}
        <div className="absolute inset-0 bg-gradient-to-tr from-cyan-400 via-blue-500 to-purple-600 rounded-full blur-sm opacity-70 group-hover:opacity-100 group-hover:blur-md transition-all duration-300" />
      </motion.div>

      {/* Career Card with Full Width */}
      <motion.div 
        whileHover={{ 
          scale: 1.005,
          y: -1,
          transition: { duration: 0.2 }
        }}
        className="w-full flex flex-col font-mono gap-2 sm:gap-2.5 text-white text-pretty p-4 md:p-6 lg:p-8 rounded-2xl border border-white/20 shadow-2xl backdrop-blur-lg bg-gradient-to-br from-white/20 via-white/10 to-white/5 transition-all duration-300 hover:border-white/30 hover:shadow-3xl career-card-full-width"
      >
        {/* Company Name & Badge */}
        <div className="flex gap-x-3 mb-2 items-center flex-wrap">
          <motion.h3
            className="text-xl md:text-2xl font-bold text-white"
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            {company}
          </motion.h3>
          <motion.div
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.96 }}
            transition={{ type: 'spring', stiffness: 400, damping: 20 }}
          >
            <Badge
              variant="secondary"
              className="relative overflow-hidden rounded-full shadow-lg backdrop-blur-xl bg-white/20 text-white font-semibold px-3 py-1 text-xs border border-white/30 hover:bg-white/30 transition-all duration-300"
            >
              <span className="relative z-10">{badges}</span>
            </Badge>
          </motion.div>
        </div>

        {/* Job Roles - Consistent Layout Across All Devices */}
        {jobs.map((job, index) => (
          <div key={index} className="mb-6 border-b border-white/10 last:border-b-0 pb-4 last:pb-0">
            {/* Title and Date Grid - Same on all devices */}
            <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-4 items-center">
              <div className="col-span-2">
                <h4 className="font-semibold text-sm sm:text-lg md:text-xl text-white leading-tight pr-2">
                  {job.title}
                </h4>
              </div>
              <div className="col-span-1 flex justify-end">
                <time className="inline-flex items-center px-1.5 sm:px-3 py-1 sm:py-1.5 text-xs font-mono text-white/90 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 font-semibold text-center leading-tight">
                  <span className="hidden sm:inline">{job.start} — {job.end}</span>
                  <span className="sm:hidden text-xs">{job.start} — {job.end}</span>
                </time>
              </div>
            </div>
            
            {/* Description Grid - Consistent across devices */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-4 sm:gap-x-8 gap-y-2 sm:gap-y-3">
              {job.description.map((item, i) => (
                <div key={i} className="flex items-start gap-2 sm:gap-3 text-xs sm:text-sm md:text-base leading-relaxed opacity-90 text-white hover:opacity-100 transition-opacity duration-200">
                  <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-cyan-400 mt-1.5 sm:mt-2 flex-shrink-0"></div>
                  <span className="flex-1">{item}</span>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* External Link Button - Compact */}
        {link && (
          <motion.div
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 300 }}
            className="inline-block mt-1"
          >
            <Button
              variant="default"
              size={null}
              className="group relative overflow-hidden shadow-xl px-4 py-1.5 rounded-full backdrop-blur-lg bg-gradient-to-br from-white/20 via-white/10 to-white/5 hover:from-white/30 hover:via-white/20 hover:to-white/15 text-white font-semibold flex items-center gap-2 transition-all duration-300 border border-white/20 hover:border-white/40 text-sm"
              asChild
            >
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center relative z-10"
              >
                <span>View more</span>
                <motion.span
                  className="ms-1"
                  initial={{ x: 0 }}
                  whileHover={{ x: 4 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <ArrowRightIcon className="size-3" />
                </motion.span>
              </a>
            </Button>
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  )
}

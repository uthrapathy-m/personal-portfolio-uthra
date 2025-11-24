'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { Button } from './ui/button'
import { Badge } from './ui/badge'
import { ArrowRightIcon, BriefcaseIcon, CalendarIcon, CheckCircle2Icon } from 'lucide-react'
import { type CareerProps } from '@/types'
import Link from 'next/link'
import { useState } from 'react'

// Function to get unique emoji for each company
const getCompanyEmoji = (id: number, badges: string | string[]) => {
  const isEducation = typeof badges === 'string' ? badges.includes('Education') : badges.some(b => b.includes('Education'))

  if (isEducation) {
    return '🎓' // Graduation cap for education
  }

  // Different emojis for different companies
  const companyEmojis = ['🏢', '🚀', '💻', '⚡']
  return companyEmojis[id % companyEmojis.length]
}

export function CareerItem({ link, company, jobs, badges, id }: CareerProps & { id: number }) {
  const companyEmoji = getCompanyEmoji(id, badges)
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      viewport={{ once: true }}
      className="relative h-full group"
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      {/* Card with consistent styling */}
      <motion.div
        className="h-full bg-white/10 backdrop-blur-lg rounded-xl shadow-lg border border-white/20 px-5 sm:px-6 py-5 sm:py-6 hover:bg-white/15 transition-all duration-300 hover:shadow-xl hover:border-purple-400/30 overflow-hidden"
        animate={{
          height: isExpanded ? 'auto' : 'auto'
        }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      >
        {/* Company Name & Badge */}
        <div className="flex flex-col gap-3 mb-5">
          <div className="flex items-center gap-2">
            <span className="text-2xl sm:text-3xl flex-shrink-0">{companyEmoji}</span>
            <motion.h3
              className="text-xl sm:text-2xl font-bold text-purple-300"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              {company}
            </motion.h3>
          </div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            transition={{ type: 'spring', stiffness: 400, damping: 20 }}
            className="w-fit"
          >
            <Badge
              variant="secondary"
              className="rounded-full shadow-md bg-purple-500/20 text-purple-300 font-semibold px-3 py-1.5 text-xs border border-purple-400/40 backdrop-blur"
            >
              {badges}
            </Badge>
          </motion.div>
        </div>

        {/* Job Roles */}
        {jobs.map((job, index) => (
          <div key={index} className="mb-4 last:mb-0 pl-1">
            <h4 className="text-base sm:text-lg font-semibold text-pink-200 flex items-center gap-2 mb-2">
              <CheckCircle2Icon className="size-4 text-purple-400 flex-shrink-0" />
              {job.title}
            </h4>
            <div className="flex items-center gap-2 mb-2">
              <CalendarIcon className="size-3.5 text-purple-300/70 flex-shrink-0" />
              <time className="text-xs font-mono leading-none text-purple-200/80">
                {job.start} — {job.end}
              </time>
            </div>

            {/* Description - show first item by default, all on hover */}
            <motion.div
              initial={false}
              animate={{
                height: isExpanded ? 'auto' : '2rem'
              }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="overflow-hidden"
            >
              <ul className="mt-2 text-xs sm:text-sm font-mono text-white/80 space-y-1.5 pl-4 list-disc marker:text-purple-400">
                {isExpanded ? (
                  job.description.map((item, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2, delay: i * 0.05 }}
                    >
                      {item}
                    </motion.li>
                  ))
                ) : (
                  <li>{job.description[0]}</li>
                )}
              </ul>
            </motion.div>
          </div>
        ))}

        {/* View More Button - Links to Detail Page - Show on hover */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.3 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="inline-block mt-5"
            >
              <Button
                variant="ghost"
                size={null}
                className="group shadow-lg px-5 py-2.5 rounded-full bg-yellow-500 text-black hover:bg-yellow-600 font-semibold flex items-center gap-2 transition-all duration-300 text-sm border border-yellow-400/40 hover:shadow-yellow-500/50 hover:scale-105"
                asChild
              >
                <Link
                  href={`/career/${id}`}
                  className="flex items-center"
                >
                  <span>View more</span>
                  <ArrowRightIcon className="size-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  )
}

'use client'

import { motion } from 'framer-motion'
import { Badge } from './ui/badge'
import { Button } from './ui/button'
import { GitHubIcon } from './icons/github'
import { LinkIcon, ExternalLinkIcon, StarIcon } from 'lucide-react'
import type { ProjectProps } from '@/types'
import { useState } from 'react'

export function ProjectCard({
  project,
  index,
  featured = false
}: {
  project: ProjectProps
  index: number
  featured?: boolean
}) {
  const { title, description, tags, link } = project
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className={`h-full bg-white/10 backdrop-blur-lg rounded-xl shadow-lg border border-white/20 hover:bg-white/15 transition-all duration-300 hover:shadow-2xl hover:border-purple-400/50 flex flex-col group relative overflow-hidden ${
        featured ? 'p-6 sm:p-8' : 'p-5 sm:p-6'
      }`}
      whileHover={{ y: -5, scale: 1.02 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {/* Gradient overlay on hover */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-pink-500/10 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
      />

      {/* Featured badge */}
      {featured && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-3 bg-gradient-to-r from-yellow-400 to-orange-400 text-black px-3 py-1.5 rounded-full text-xs font-bold flex items-center gap-1.5 shadow-lg w-fit relative z-10"
        >
          <StarIcon className="size-3.5 fill-current" />
          <span>Featured</span>
        </motion.div>
      )}

      {/* Project Title */}
      <motion.h3
        className={`font-bold text-purple-300 mb-3 line-clamp-2 relative z-10 ${
          featured ? 'text-2xl sm:text-3xl' : 'text-lg sm:text-xl'
        }`}
        animate={{ color: isHovered ? '#e9d5ff' : '#d8b4fe' }}
      >
        {title}
      </motion.h3>

      {/* Project Description */}
      <p className={`text-white/80 leading-relaxed mb-4 flex-1 relative z-10 ${
        featured ? 'text-base sm:text-lg line-clamp-4' : 'text-sm line-clamp-3'
      }`}>
        {description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-5 relative z-10">
        {tags.map((tag, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Badge
              variant="secondary"
              className="rounded-full bg-purple-500/20 text-purple-300 font-semibold px-3 py-1.5 text-xs border border-purple-400/40 backdrop-blur flex items-center gap-1.5 hover:bg-purple-500/30 transition-colors"
            >
              <tag.icon className='size-3.5' />
              <span>{tag.name}</span>
            </Badge>
          </motion.div>
        ))}
      </div>

      {/* Action Buttons */}
      <div className="flex gap-3 mt-auto relative z-10">
        {link.preview && (
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex-1"
          >
            <Button
              variant="ghost"
              size={null}
              className="w-full bg-yellow-500 text-black hover:bg-yellow-600 font-semibold px-4 py-2.5 rounded-lg text-sm transition-all duration-300"
              asChild
            >
              <a
                href={link.preview}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2"
              >
                <ExternalLinkIcon className="size-4" />
                <span>Preview</span>
              </a>
            </Button>
          </motion.div>
        )}
        {link.github && (
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex-1"
          >
            <Button
              variant="ghost"
              size={null}
              className="w-full bg-white/20 text-white hover:bg-white/30 font-semibold px-4 py-2.5 rounded-lg text-sm transition-all duration-300"
              asChild
            >
              <a
                href={link.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2"
              >
                <GitHubIcon className="size-4" />
                <span>GitHub</span>
              </a>
            </Button>
          </motion.div>
        )}
      </div>
    </motion.div>
  )
}

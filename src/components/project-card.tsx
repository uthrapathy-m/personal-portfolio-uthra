'use client'

import { motion } from 'framer-motion'
import { Badge } from './ui/badge'
import { Button } from './ui/button'
import { GitHubIcon } from './icons/github'
import { LinkIcon, ExternalLinkIcon } from 'lucide-react'
import type { ProjectProps } from '@/types'

export function ProjectCard({ project, index }: { project: ProjectProps; index: number }) {
  const { title, description, tags, link } = project

  return (
    <div className="h-full bg-white/10 backdrop-blur-lg rounded-xl shadow-lg border border-white/20 p-6 sm:p-8 md:p-10 lg:p-12 hover:bg-white/15 transition-all duration-300 hover:shadow-xl hover:border-purple-400/30 flex flex-col">
      {/* Project Title */}
      <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-purple-300 mb-4 line-clamp-2">
        {title}
      </h3>

      {/* Project Description */}
      <p className="text-sm sm:text-base md:text-lg text-white/80 line-clamp-4 leading-relaxed mb-6 flex-1">
        {description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2.5 mb-6">
        {tags.map((tag, idx) => (
          <Badge
            key={idx}
            variant="secondary"
            className="rounded-full bg-purple-500/20 text-purple-300 font-semibold px-4 py-2 text-sm md:text-base border border-purple-400/40 backdrop-blur flex items-center gap-2"
          >
            <tag.icon className='size-4 md:size-5' />
            <span>{tag.name}</span>
          </Badge>
        ))}
      </div>

      {/* Action Buttons */}
      <div className="flex gap-4 mt-auto">
        {link.preview && (
          <Button
            variant="ghost"
            size={null}
            className="flex-1 bg-yellow-500 text-black hover:bg-yellow-600 font-semibold px-6 py-4 rounded-lg text-base md:text-lg transition-all duration-300 hover:scale-105"
            asChild
          >
            <a
              href={link.preview}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2"
            >
              <ExternalLinkIcon className="size-5" />
              <span>Preview</span>
            </a>
          </Button>
        )}
        {link.github && (
          <Button
            variant="ghost"
            size={null}
            className="flex-1 bg-white/20 text-white hover:bg-white/30 font-semibold px-6 py-4 rounded-lg text-base md:text-lg transition-all duration-300 hover:scale-105"
            asChild
          >
            <a
              href={link.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2"
            >
              <GitHubIcon className="size-5" />
              <span>GitHub</span>
            </a>
          </Button>
        )}
      </div>
    </div>
  )
}

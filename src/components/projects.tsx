'use client'

import { ProjectCard } from './project-card'
import { data } from '@/constants'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useMemo } from 'react'
import { Badge } from './ui/badge'
import { Button } from './ui/button'
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react'
import type { TagsProps } from '@/types'

const PROJECTS_PER_PAGE = 6 // Show 6 projects per page (excluding featured)

export function Projects() {
  const { projects } = data
  const [selectedTag, setSelectedTag] = useState<string | null>(null)
  const [currentPage, setCurrentPage] = useState(1)

  // Extract all unique tags from projects
  const allTags = useMemo(() => {
    const tagMap = new Map<string, TagsProps>()
    projects.forEach(project => {
      project.tags.forEach(tag => {
        if (!tagMap.has(tag.name)) {
          tagMap.set(tag.name, tag)
        }
      })
    })
    return Array.from(tagMap.values())
  }, [projects])

  // Filter projects based on selected tag
  const filteredProjects = useMemo(() => {
    if (!selectedTag) return projects
    return projects.filter(project =>
      project.tags.some(tag => tag.name === selectedTag)
    )
  }, [projects, selectedTag])

  // Featured projects (first 2, only shown when no tag selected)
  const featuredProjects = !selectedTag ? projects.slice(0, 2) : []

  // Regular projects (rest, with pagination)
  const allRegularProjects = selectedTag ? filteredProjects : projects.slice(2)

  // Calculate pagination
  const totalPages = Math.ceil(allRegularProjects.length / PROJECTS_PER_PAGE)
  const startIndex = (currentPage - 1) * PROJECTS_PER_PAGE
  const endIndex = startIndex + PROJECTS_PER_PAGE
  const regularProjects = allRegularProjects.slice(startIndex, endIndex)

  // Reset to page 1 when filter changes
  const handleTagChange = (tag: string | null) => {
    setSelectedTag(tag)
    setCurrentPage(1)
  }

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1)
    }
  }

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  const goToPage = (page: number) => {
    setCurrentPage(page)
  }

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className='relative w-full px-3 sm:px-4 mb-8 sm:mb-12 md:mb-16'
    >
      {/* Projects section with About section styling */}
      <div className="w-full max-w-7xl mx-auto flex flex-col font-mono gap-6 sm:gap-8 md:gap-10 text-white text-pretty p-6 sm:p-8 md:p-10 lg:p-12 rounded-2xl border border-white/20 shadow-2xl backdrop-blur-lg bg-gradient-to-br from-white/20 via-white/10 to-white/5">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className='flex flex-col gap-6'
        >
          <div className='flex gap-x-3 sm:gap-x-4 items-center justify-center'>
            <span className='text-3xl sm:text-4xl md:text-5xl'>🚀</span>
            <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-cyan-300'>
              Projects & Crafts
            </h2>
          </div>

          {/* Filter Tags */}
          <div className='flex flex-wrap gap-2 sm:gap-3 justify-center items-center'>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleTagChange(null)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${
                selectedTag === null
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg'
                  : 'bg-white/10 text-white/70 hover:bg-white/20'
              }`}
            >
              All Projects
            </motion.button>
            {allTags.map((tag, idx) => (
              <motion.button
                key={idx}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleTagChange(tag.name)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 flex items-center gap-2 ${
                  selectedTag === tag.name
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg'
                    : 'bg-white/10 text-white/70 hover:bg-white/20'
                }`}
              >
                <tag.icon className='size-3 sm:size-4' />
                <span>{tag.name}</span>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Featured Projects Section */}
        {!selectedTag && featuredProjects.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className='flex items-center gap-2 mb-4'>
              <span className='text-xl sm:text-2xl'>⭐</span>
              <h3 className='text-lg sm:text-xl font-bold text-purple-300'>Featured Projects</h3>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8'>
              {featuredProjects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  className="w-full"
                >
                  <ProjectCard project={project} index={index} featured />
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* All Projects Grid */}
        {regularProjects.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {!selectedTag && (
              <div className='flex items-center gap-2 mb-4'>
                <span className='text-xl sm:text-2xl'>💼</span>
                <h3 className='text-lg sm:text-xl font-bold text-purple-300'>All Projects</h3>
              </div>
            )}
            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6'>
              {regularProjects.map((project, index) => (
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
          </motion.div>
        )}

        {/* No results message */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className='text-center py-12 text-white/60'
          >
            <p className='text-lg'>No projects found with this technology.</p>
          </motion.div>
        )}

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className='flex flex-col sm:flex-row items-center justify-center gap-4 mt-8'
          >
            {/* Previous Button */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="ghost"
                size={null}
                onClick={goToPreviousPage}
                disabled={currentPage === 1}
                className={`px-4 py-2 rounded-lg font-semibold text-sm flex items-center gap-2 transition-all duration-300 ${
                  currentPage === 1
                    ? 'bg-white/5 text-white/30 cursor-not-allowed'
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                <ChevronLeftIcon className='size-4' />
                <span>Previous</span>
              </Button>
            </motion.div>

            {/* Page Numbers */}
            <div className='flex items-center gap-2'>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <motion.button
                  key={page}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => goToPage(page)}
                  className={`w-10 h-10 rounded-full font-semibold text-sm transition-all duration-300 ${
                    currentPage === page
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg'
                      : 'bg-white/10 text-white/70 hover:bg-white/20'
                  }`}
                >
                  {page}
                </motion.button>
              ))}
            </div>

            {/* Next Button */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="ghost"
                size={null}
                onClick={goToNextPage}
                disabled={currentPage === totalPages}
                className={`px-4 py-2 rounded-lg font-semibold text-sm flex items-center gap-2 transition-all duration-300 ${
                  currentPage === totalPages
                    ? 'bg-white/5 text-white/30 cursor-not-allowed'
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                <span>Next</span>
                <ChevronRightIcon className='size-4' />
              </Button>
            </motion.div>

            {/* Page Info */}
            <div className='text-sm text-white/60 ml-4'>
              Page {currentPage} of {totalPages}
            </div>
          </motion.div>
        )}
      </div>
    </motion.section>
  )
}

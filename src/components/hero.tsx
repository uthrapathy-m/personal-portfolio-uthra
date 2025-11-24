'use client'

import { useEffect, useState } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { Tooltip, TooltipContent, TooltipTrigger } from './ui/tooltip'
import { Button } from './ui/button'
import { data } from '../constants'
import clsx from 'clsx'
import { motion } from 'framer-motion'

// Animated Title Component
const AnimatedTitle = () => {
  const [currentRole, setCurrentRole] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [showTypewriter, setShowTypewriter] = useState(false)

  const roles = ['DevOps Engineer', 'AWS Cloud Engineer', 'SMM Specialist']

  useEffect(() => {
    // Start typewriter effect after the main animation completes (2s delay)
    const timer = setTimeout(() => {
      setShowTypewriter(true)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (!showTypewriter) return

    let timeout: NodeJS.Timeout

    const typeSpeed = isDeleting ? 50 : 100
    const currentText = roles[currentRole]

    if (!isDeleting && displayText === currentText) {
      // Pause before deleting
      timeout = setTimeout(() => setIsDeleting(true), 2000)
    } else if (isDeleting && displayText === '') {
      // Move to next role
      setIsDeleting(false)
      setCurrentRole((prev) => (prev + 1) % roles.length)
    } else {
      // Type or delete character
      timeout = setTimeout(() => {
        setDisplayText(prev => 
          isDeleting 
            ? prev.slice(0, -1)
            : (currentText ?? '').slice(0, prev.length + 1)
        )
      }, typeSpeed)
    }

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, currentRole, showTypewriter, roles])

  return (
    <div className="animated-title">
      <div className="text-top">
        <div className="text-white font-bold flex items-center justify-center">
          <span>uthrapathy&nbsp;</span><span className="text-yellow-400">m.</span>
        </div>
      </div>
      <div className="text-bottom">
        <div className="text-white font-mono flex items-center line-height-1.2 white-space-nowrap">
          {showTypewriter ? (
            <>
              <span>{displayText}</span>
              <span className="typewriter-cursor">|</span>
            </>
          ) : (
            <span className="opacity-0">DevOps Engineer</span>
          )}
        </div>
      </div>
    </div>
  )
}

// Typing text effect
type TypingTextProps = {
  text: string
  speed?: number
  className?: string
}

const TypingText = ({ text, speed = 80, className = '' }: TypingTextProps) => {
  const [displayedText, setDisplayedText] = useState('')
  const [cycle, setCycle] = useState(0)

  useEffect(() => {
    let currentIndex = 0
    const interval = setInterval(() => {
      setDisplayedText(text.slice(0, currentIndex + 1))
      currentIndex++
      if (currentIndex === text.length) {
        clearInterval(interval)
        setTimeout(() => {
          setDisplayedText('')
          setCycle((prev) => prev + 1)
        }, 3000)
      }
    }, speed)

    return () => clearInterval(interval)
  }, [text, speed, cycle])

  return (
    <motion.h1
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className={clsx(
        'text-center text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-snug break-words',
        className
      )}
    >
      {displayedText}
      <motion.span 
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
        className="text-white/80"
      >
        |
      </motion.span>
    </motion.h1>
  )
}

// Hero section
export function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="relative w-full pt-4 pb-8 sm:pt-8 sm:pb-12 md:pt-12 md:pb-16 overflow-hidden"
    >
      <div className="relative w-full max-w-6xl lg:max-w-7xl mx-auto flex flex-col items-center gap-6 sm:gap-8 md:gap-10 pb-4 sm:pb-6 md:pb-8">
        {/* Avatar centered for all devices */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
          className="flex justify-center items-center w-full"
        >
          <motion.div 
            className="relative group"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
            whileHover={{ 
              scale: 1.05,
              transition: { duration: 0.15 }
            }}
          >
            <motion.div 
              className="absolute inset-0 rounded-full p-1 bg-gradient-to-tr from-primary via-secondary to-accent"
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: 1,
                rotate: [0, 360],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                opacity: { duration: 0.5, delay: 0.5 },
                rotate: { duration: 8, repeat: Infinity, ease: 'linear', delay: 0.7 },
                scale: { duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.7 }
              }}
              style={{ filter: 'blur(2px)' }} 
            />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: 0.4 }}
              whileHover={{ 
                y: -5,
                transition: { duration: 0.15, ease: 'easeOut' }
              }}
            >
              <Avatar className="size-32 sm:size-36 md:size-44 lg:size-48 shadow-xl border-4 border-white dark:border-neutral-900 relative z-10 transition-transform duration-150">
                <AvatarImage
                  alt={data.avatar.name}
                  src="/assets/avatar.png"
                  className="object-cover"
                />
                <AvatarFallback className="font-mono font-bold">
                  {data.avatar.initials}
                </AvatarFallback>
              </Avatar>
            </motion.div>
          </motion.div>
        </motion.div>
        {/* Heading + Status */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="flex flex-col items-center gap-6 w-full"
        >
          <AnimatedTitle />
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.3 }}
            className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6 md:mb-8"
          >
            <Button
              variant='default'
              size={null}
              className='relative font-mono font-bold text-xs sm:text-sm px-4 py-2 sm:px-6 sm:py-3 rounded-full hover:scale-105 sm:hover:scale-110 transition-all ease-in-out duration-300 shadow-2xl bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 text-white border-0 hover:shadow-pink-500/50 hover:shadow-2xl overflow-hidden group'
              asChild
            >
              <a
                href="https://linkedin.com/in/harshhaa-vardhan-reddy"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 sm:gap-3 relative z-10"
              >
                {/* Glowing background effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-pink-400 to-purple-500 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 -z-10" />
                <div className="absolute inset-0 bg-gradient-to-r from-orange-300 via-pink-300 to-purple-400 opacity-0 group-hover:opacity-75 blur-2xl transition-opacity duration-700 -z-20" />

                <motion.span
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                  className="size-2.5 sm:size-3 bg-yellow-300 rounded-full shadow-lg shadow-yellow-300/70 animate-pulse group-hover:shadow-yellow-300/100 group-hover:shadow-xl transition-shadow duration-300"
                />
                <span className="font-semibold relative z-10 whitespace-nowrap">😉 HOW YOU DOINGHH..? 😉</span>
              </a>
            </Button>
          </motion.div>
        </motion.div>
        {/* Brief/About section full width below avatar and heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="w-full px-3 sm:px-4 mb-4 sm:mb-6 md:mb-8"
        >
          <div
            className="w-full flex flex-col font-mono gap-4 sm:gap-5 md:gap-6 text-white text-pretty p-4 sm:p-5 md:p-6 lg:p-8 rounded-2xl border border-white/20 shadow-2xl backdrop-blur-lg bg-gradient-to-br from-white/20 via-white/10 to-white/5"
          >
            <h2 className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl text-cyan-300 text-center sm:text-left leading-tight">
              {data.about.title}
            </h2>
            <div className="flex flex-col gap-4 sm:gap-5 text-sm sm:text-base md:text-lg leading-loose sm:leading-loose md:leading-loose opacity-90 text-white">
              {data.about.description.split('\n\n').map((paragraph, index) => {
                // Add italics to key metrics and phrases
                const formattedParagraph = paragraph
                  .replace(/3\+ years/g, '<em class="text-cyan-300 not-italic font-semibold">3+ years</em>')
                  .replace(/85%/g, '<em class="text-cyan-300 not-italic font-semibold">85%</em>')
                  .replace(/99\.9% uptime/g, '<em class="text-cyan-300 not-italic font-semibold">99.9% uptime</em>')
                  .replace(/40%/g, '<em class="text-cyan-300 not-italic font-semibold">40%</em>')
                  .replace(/Kubernetes/g, '<em class="text-purple-300 not-italic">Kubernetes</em>')
                  .replace(/Docker/g, '<em class="text-purple-300 not-italic">Docker</em>')
                  .replace(/Terraform/g, '<em class="text-purple-300 not-italic">Terraform</em>')
                  .replace(/Ansible/g, '<em class="text-purple-300 not-italic">Ansible</em>')
                  .replace(/Jenkins/g, '<em class="text-purple-300 not-italic">Jenkins</em>')
                  .replace(/AWS/g, '<em class="text-purple-300 not-italic">AWS</em>')
                  .replace(/Azure/g, '<em class="text-purple-300 not-italic">Azure</em>')
                  .replace(/GitOps/g, '<em class="text-pink-300 not-italic">GitOps</em>')

                return (
                  <motion.p
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                    className="text-justify"
                    dangerouslySetInnerHTML={{ __html: formattedParagraph }}
                  />
                )
              })}
            </div>
          </div>
        </motion.div>
        {/* Connect Section with Card-Style Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          className="w-full px-3 sm:px-4 mb-6 sm:mb-8"
        >
          <div className="w-full flex flex-col font-mono gap-6 text-white p-6 sm:p-8 rounded-2xl border border-white/20 shadow-2xl backdrop-blur-lg bg-gradient-to-br from-white/20 via-white/10 to-white/5">
            {/* Section Header */}
            <div className="flex items-center justify-center gap-3">
              <span className="text-2xl sm:text-3xl">🤝</span>
              <h3 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-cyan-300 to-purple-300 bg-clip-text text-transparent">
                Let's Connect
              </h3>
            </div>

            {/* Social Links Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
              {data.links.map((link, index) => {
                // Define unique gradient and icon colors for each link
                const linkStyles = {
                  'GitHub': { gradient: 'from-gray-600 to-gray-800', iconBg: 'bg-gray-700', hoverShadow: 'hover:shadow-gray-500/50' },
                  'LinkedIn': { gradient: 'from-blue-500 to-blue-700', iconBg: 'bg-blue-600', hoverShadow: 'hover:shadow-blue-500/50' },
                  'Telegram': { gradient: 'from-sky-400 to-sky-600', iconBg: 'bg-sky-500', hoverShadow: 'hover:shadow-sky-500/50' },
                  'Resume': { gradient: 'from-orange-500 to-orange-700', iconBg: 'bg-orange-600', hoverShadow: 'hover:shadow-orange-500/50' },
                  'Email': { gradient: 'from-red-500 to-red-700', iconBg: 'bg-red-600', hoverShadow: 'hover:shadow-red-500/50' },
                  'Portfolio': { gradient: 'from-purple-500 to-pink-600', iconBg: 'bg-purple-600', hoverShadow: 'hover:shadow-purple-500/50' }
                }[link.title] || { gradient: 'from-purple-500 to-pink-500', iconBg: 'bg-purple-600', hoverShadow: 'hover:shadow-purple-500/50' }

                return (
                  <motion.a
                    key={link.title}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.title}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                    whileHover={{ y: -5, scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    className={`group relative flex flex-col items-center gap-3 p-4 sm:p-5 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-all duration-300 hover:border-white/40 shadow-lg ${linkStyles.hoverShadow}`}
                  >
                    {/* Gradient overlay on hover */}
                    <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${linkStyles.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />

                    {/* Icon Container */}
                    <div className={`relative w-12 h-12 sm:w-14 sm:h-14 rounded-full ${linkStyles.iconBg} flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}>
                      <link.icon className="size-6 sm:size-7 text-white" />

                      {/* Glow effect on hover */}
                      <div className={`absolute inset-0 rounded-full ${linkStyles.iconBg} blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300`} />
                    </div>

                    {/* Link Title */}
                    <span className="text-sm sm:text-base font-semibold text-white group-hover:text-cyan-300 transition-colors duration-300 text-center">
                      {link.title}
                    </span>

                    {/* Hover indicator */}
                    <motion.div
                      className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-8 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                    />
                  </motion.a>
                )
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default TypingText

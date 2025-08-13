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
  const { avatar, about, links } = data

  const cleanParagraph = about.description
    .split('\n')
    .filter(Boolean)
    .map((line) => line.replace(/^[-•]\s*/, ''))
    .join(' ')

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="relative w-full pt-8 pb-16 sm:pt-20 sm:pb-24 md:pt-16 md:pb-32 overflow-hidden min-h-screen"
    >
      <div className="relative w-full max-w-6xl lg:max-w-7xl mx-auto flex flex-col items-center gap-10">
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
              <Avatar className="size-40 md:size-48 shadow-xl border-4 border-white dark:border-neutral-900 relative z-10 transition-transform duration-150">
                <AvatarImage 
                  alt={avatar.name} 
                  src="/assets/avatar.png"
                  className="object-cover"
                />
                <AvatarFallback className="font-mono font-bold">
                  {avatar.initials}
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
            className="flex items-center gap-3"
          >
            <Button
              variant='default'
              size={null}
              className='font-mono font-bold text-sm px-6 py-3 rounded-full hover:scale-110 transition-all ease-in-out duration-300 shadow-2xl bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 text-white border-0 hover:shadow-pink-500/50 hover:shadow-2xl'
              asChild
            >
              <a
                href="https://linkedin.com/in/harshhaa-vardhan-reddy"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3"
              >
                <motion.span 
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                  className="size-3 bg-yellow-300 rounded-full shadow-lg shadow-yellow-300/70 animate-pulse"
                />
                <span className="font-semibold">😉 HOW YOU DOINGHH..? 😉</span>
              </a>
            </Button>
          </motion.div>
        </motion.div>
        {/* Brief/About section full width below avatar and heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="w-full"
        >
          <div
            className="w-full flex flex-col font-mono gap-2.5 sm:gap-3 text-white text-pretty p-6 md:p-8 rounded-2xl border border-white/20 shadow-2xl backdrop-blur-lg bg-gradient-to-br from-white/20 via-white/10 to-white/5"
          >
            <p className="font-semibold text-lg md:text-xl text-white">{about.title}</p>
            <h3 className="text-base md:text-lg leading-relaxed opacity-90 text-white">{cleanParagraph}</h3>
          </div>
        </motion.div>
        {/* Social Links: pill-shaped, accent color */}
        <nav className="w-full flex flex-wrap gap-3 mt-4 justify-center">
          {links.map((link, index) => (
            <a
              key={link.title}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.title}
              className="flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-semibold shadow-md hover:scale-105 transition-all duration-300 border-0"
            >
              <link.icon className="size-5 stroke-[1.5] text-white" />
              <span>{link.title}</span>
            </a>
          ))}
        </nav>
      </div>
    </motion.section>
  )
}

export default TypingText

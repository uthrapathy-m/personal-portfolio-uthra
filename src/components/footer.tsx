'use client'

import { Link } from 'next-view-transitions'
import { navLinks } from '@/constants'
import { ArrowUp } from 'lucide-react'
import { motion } from 'framer-motion'

export function Footer() {
  const year = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <motion.footer 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full px-4 py-8 md:py-12 mt-0 md:mt-8" // Added mobile-specific margin
    >
      <div className="container mx-auto max-w-7xl bg-white/20 dark:bg-white/10 backdrop-blur-xl border border-white/20 shadow-lg rounded-2xl p-6 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 transition-all duration-300 hover:shadow-xl hover:bg-white/30 dark:hover:bg-white/15">
        {/* Left Section */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="text-center md:text-left text-sm font-medium"
        >
          <p className="text-white">
            © {year}
            <span className="mx-2 text-white/50">•</span>
            <a
              href="https://link.notharshhaa.site"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white font-semibold hover:opacity-80 transition-all duration-300"
            >
              H A R S H H A A
            </a>
            <span className="mx-2 text-white/50">—</span>
            <span className="text-white/80">All rights reserved.</span>
          </p>
        </motion.div>

        {/* Center Section: Navigation Links */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-sm"
        >
          {navLinks.map((link, index) => (
            <div key={link.label} className="flex items-center">
              <Link
                href={link.url}
                aria-label={link.label}
                className="text-white hover:text-white/80 transition-all duration-300 hover:scale-105"
              >
                {link.title}
              </Link>
              {index < navLinks.length - 1 && (
                <span className="mx-2 text-white/30">•</span>
              )}
            </div>
          ))}
        </motion.div>

        {/* Right Section: Scroll to Top */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="hidden md:flex items-center gap-2 px-4 py-2 rounded-lg bg-white/20 text-white hover:bg-white/30 transition-all duration-300"
        >
          <ArrowUp className="w-4 h-4" />
          <span className="text-sm font-medium">Back to top</span>
        </motion.button>
      </div>
    </motion.footer>
  )
}

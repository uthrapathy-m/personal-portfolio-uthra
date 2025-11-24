'use client'

import { usePathname } from 'next/navigation'
import { Link } from 'next-view-transitions'
import { navLinks } from '@/constants'
import { motion } from 'framer-motion'
import clsx from 'clsx'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export function Header() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full px-3 sm:px-4 pt-4 pb-4 sticky top-0 z-50"
    >
      <div className="container mx-auto max-w-7xl bg-gradient-to-r from-white/15 via-white/20 to-white/15 backdrop-blur-2xl border border-white/30 shadow-2xl rounded-2xl px-4 sm:px-6 py-3 sm:py-4 transition-all duration-300 hover:shadow-[0_0_30px_rgba(168,85,247,0.4)] hover:border-purple-400/50">
        <nav className="flex items-center justify-between">
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1 lg:gap-2 mx-auto">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.label}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                {link.external ? (
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                    className="relative px-4 py-2 text-sm font-semibold text-white rounded-lg transition-all duration-300 hover:bg-white/10 group"
                  >
                    <span className="relative z-10">{link.title}</span>
                    <motion.div
                      className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      whileHover={{ scale: 1.05 }}
                    />
                  </a>
                ) : (
                  <Link
                    href={link.url}
                    aria-label={link.label}
                    className={clsx(
                      'relative px-4 py-2 text-sm font-semibold rounded-lg transition-all duration-300 group',
                      {
                        'text-white bg-gradient-to-r from-purple-500 to-pink-500 shadow-lg shadow-purple-500/50': pathname === link.url,
                        'text-white hover:bg-white/10': pathname !== link.url
                      }
                    )}
                  >
                    <span className="relative z-10">{link.title}</span>
                    {pathname !== link.url && (
                      <motion.div
                        className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        whileHover={{ scale: 1.05 }}
                      />
                    )}
                  </Link>
                )}
              </motion.div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors duration-300 text-white"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        <motion.div
          initial={false}
          animate={{
            height: mobileMenuOpen ? 'auto' : 0,
            opacity: mobileMenuOpen ? 1 : 0
          }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="md:hidden overflow-hidden"
        >
          <div className="flex flex-col gap-2 pt-4 mt-4 border-t border-white/20">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.label}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: mobileMenuOpen ? 1 : 0, x: mobileMenuOpen ? 0 : -20 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                {link.external ? (
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-4 py-3 text-sm font-semibold text-white rounded-lg transition-all duration-300 hover:bg-white/10"
                  >
                    {link.title}
                  </a>
                ) : (
                  <Link
                    href={link.url}
                    aria-label={link.label}
                    onClick={() => setMobileMenuOpen(false)}
                    className={clsx(
                      'block px-4 py-3 text-sm font-semibold rounded-lg transition-all duration-300',
                      {
                        'text-white bg-gradient-to-r from-purple-500 to-pink-500 shadow-lg': pathname === link.url,
                        'text-white hover:bg-white/10': pathname !== link.url
                      }
                    )}
                  >
                    {link.title}
                  </Link>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.header>
  )
}

'use client'

import { usePathname } from 'next/navigation'
import { Link } from 'next-view-transitions'
import { Button } from './ui/button'
import { ModeToggle } from './mode-toggle'
import clsx from 'clsx'
import Image from 'next/image'
import { navLinks } from '@/constants'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useEffect, useState } from 'react'

export function Header() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const { scrollY } = useScroll()

  // Transform blur based on scroll
  const blurValue = useTransform(scrollY, [0, 50, 100], [10, 20, 30])
  const opacity = useTransform(scrollY, [0, 50, 100], [0.2, 0.4, 0.6])

  useEffect(() => {
    const updateScrolled = () => {
      setScrolled(window.scrollY > 20)
    }
    
    window.addEventListener('scroll', updateScrolled)
    return () => window.removeEventListener('scroll', updateScrolled)
  }, [])

  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={clsx(
        "fixed top-2 left-2 right-2 z-50 px-3 md:px-6",
        { "scrolled": scrolled }
      )}
      style={{
        backdropFilter: `blur(${scrolled ? '24px' : '12px'})`,
      }}
    >
      <motion.div 
        className={clsx(
          "mx-auto w-full max-w-7xl rounded-xl shadow-lg border border-white/20 px-2 py-2 md:px-6 md:py-3 transition-all duration-500 ease-out", // Reduced mobile padding
          {
            "bg-white/30 dark:bg-white/20 backdrop-blur-2xl shadow-2xl hover:bg-white/40 dark:hover:bg-white/25": scrolled,
            "bg-white/20 dark:bg-white/10 backdrop-blur-xl hover:bg-white/30 dark:hover:bg-white/15": !scrolled
          }
        )}
        style={{
          backdropFilter: scrolled ? 'blur(24px) saturate(180%)' : 'blur(12px) saturate(150%)',
          WebkitBackdropFilter: scrolled ? 'blur(24px) saturate(180%)' : 'blur(12px) saturate(150%)',
        }}
      >
        <div className="flex items-center justify-between flex-wrap"> {/* Added flex-wrap */}
          {/* Left: Empty space */}
          <div className="flex items-center min-w-0"> {/* Added min-w-0 */}
            {/* Empty - no logo or name */}
          </div>

          {/* Right: Nav + Theme Toggle */}
          <div className="flex items-center gap-1 md:gap-8 flex-wrap justify-end"> {/* Added flex-wrap and justify-end */}
            {/* Navigation - Same styling for both desktop and mobile */}
            <nav className="flex items-center gap-1 md:gap-2 flex-wrap"> {/* Added flex-wrap */}
              {navLinks.map((link) => (
                <div key={link.label} className="relative flex-shrink-0"> {/* Added flex-shrink-0 */}
                  {link.external ? (
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={link.label}
                      className="px-1.5 py-1 md:px-4 md:py-2 text-xs md:text-sm font-medium transition-all duration-300 ease-in-out hover:text-white text-white relative group" // Reduced mobile padding
                    >
                      {link.title}
                      <span className="absolute bottom-0 md:bottom-1.5 left-1.5 right-1.5 md:left-4 md:right-4 h-0.5 bg-white transform origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100" />
                    </a>
                  ) : (
                    <Link
                      href={link.url}
                      aria-label={link.label}
                      className={clsx(
                        'px-1.5 py-1 md:px-4 md:py-2 text-xs md:text-sm font-medium transition-all duration-300 ease-in-out relative group text-white', // Reduced mobile padding
                        {
                          'text-white font-bold': pathname === link.url,
                          'hover:text-white': pathname !== link.url
                        }
                      )}
                    >
                      {link.title}
                      <span 
                        className={clsx(
                          'absolute bottom-0 md:bottom-1.5 left-1.5 right-1.5 md:left-4 md:right-4 h-0.5 bg-white transform origin-left transition-transform duration-300 ease-out',
                          {
                            'scale-x-100': pathname === link.url,
                            'scale-x-0 group-hover:scale-x-100': pathname !== link.url
                          }
                        )}
                      />
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            {/* Theme Toggle */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="ml-1 md:ml-2 flex-shrink-0" // Reduced mobile margin and added flex-shrink-0
            >
              <ModeToggle />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </motion.header>
  )
}

'use client'

import { usePathname } from 'next/navigation'
import { Link } from 'next-view-transitions'
import { Button } from './ui/button'
import { ModeToggle } from './mode-toggle'
import clsx from 'clsx'
import Image from 'next/image'
import { navLinks } from '@/constants'
import { motion } from 'framer-motion'

export function Header() {
  const pathname = usePathname()

  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-4 left-0 right-0 z-50 px-6 md:px-8"
    >
      <div className="mx-auto w-full max-w-7xl rounded-2xl bg-white/20 dark:bg-white/10 backdrop-blur-xl shadow-lg border border-white/20 px-6 py-3 transition-all duration-300 hover:shadow-xl hover:bg-white/30 dark:hover:bg-white/15">
        <div className="flex items-center justify-end">
          {/* Right: Nav + Theme Toggle */}
          <div className="flex items-center gap-8 flex-wrap">
            <nav className="hidden md:flex items-center gap-2">
              {navLinks.map((link) => (
                <div key={link.label} className="relative">
                  {link.external ? (
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={link.label}
                      className="px-4 py-2 text-sm font-medium transition-all duration-300 ease-in-out hover:text-white text-white relative group"
                    >
                      {link.title}
                      <span className="absolute bottom-1.5 left-4 right-4 h-0.5 bg-white transform origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100" />
                    </a>
                  ) : (
                    <Link
                      href={link.url}
                      aria-label={link.label}
                      className={clsx(
                        'px-4 py-2 text-sm font-medium transition-all duration-300 ease-in-out relative group text-white',
                        {
                          'text-white font-bold': pathname === link.url,
                          'hover:text-white': pathname !== link.url
                        }
                      )}
                    >
                      {link.title}
                      <span 
                        className={clsx(
                          'absolute bottom-1.5 left-4 right-4 h-0.5 bg-white transform origin-left transition-transform duration-300 ease-out',
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
            >
              <ModeToggle />
            </motion.div>
          </div>
        </div>

        {/* Mobile nav */}
        <motion.nav 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-4 flex md:hidden justify-end flex-wrap gap-4"
        >
          {navLinks.map((link) => (
            <div key={link.label} className="relative">
              {link.external ? (
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="px-3 py-1.5 text-sm font-medium transition-all duration-300 ease-in-out hover:text-white text-white relative group"
                >
                  {link.title}
                  <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-white transform origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100" />
                </a>
              ) : (
                <Link
                  href={link.url}
                  aria-label={link.label}
                  className={clsx(
                    'px-3 py-1.5 text-sm font-medium transition-all duration-300 ease-in-out relative group text-white',
                    {
                      'text-white font-bold': pathname === link.url,
                      'hover:text-white': pathname !== link.url
                    }
                  )}
                >
                  {link.title}
                  <span 
                    className={clsx(
                      'absolute bottom-0 left-3 right-3 h-0.5 bg-white transform origin-left transition-transform duration-300 ease-out',
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
        </motion.nav>
      </div>
    </motion.header>
  )
}

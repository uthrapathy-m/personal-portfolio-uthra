'use client'

import { usePathname } from 'next/navigation'
import { Link } from 'next-view-transitions'
import { navLinks } from '@/constants'
import { motion } from 'framer-motion'
import clsx from 'clsx'

export function Header() {
  const pathname = usePathname()

  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full px-3 sm:px-4 pt-4 pb-4"
    >
      <div className="container mx-auto max-w-7xl bg-white/20 dark:bg-white/10 backdrop-blur-xl border border-white/20 shadow-lg rounded-2xl px-6 py-4 transition-all duration-300 hover:shadow-xl hover:bg-white/30 dark:hover:bg-white/15">
        <nav className="flex items-center justify-center gap-6 md:gap-8 flex-wrap">
          {navLinks.map((link) => (
            <div
              key={link.label}
              className={clsx(
                "relative",
                {
                  "hidden md:block": link.label === 'blog' // Hide Blog on mobile
                }
              )}
            >
              {link.external ? (
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="text-sm md:text-base font-medium text-white hover:text-white/80 transition-all duration-300 relative group whitespace-nowrap"
                >
                  {link.title}
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-white transform origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100" />
                </a>
              ) : (
                <Link
                  href={link.url}
                  aria-label={link.label}
                  className={clsx(
                    'text-sm md:text-base font-medium transition-all duration-300 relative group whitespace-nowrap',
                    {
                      'text-white font-bold': pathname === link.url,
                      'text-white hover:text-white/80': pathname !== link.url
                    }
                  )}
                >
                  {link.title}
                  <span
                    className={clsx(
                      'absolute -bottom-1 left-0 right-0 h-0.5 bg-white transform origin-left transition-transform duration-300 ease-out',
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
      </div>
    </motion.header>
  )
}

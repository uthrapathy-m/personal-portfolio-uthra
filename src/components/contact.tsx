'use client'

import { useEffect, useRef } from 'react'
import { ContactForm } from '@/components/contact-form'
import { MailIcon, MapPinIcon, PhoneIcon, GithubIcon, LinkedinIcon } from 'lucide-react'
import { motion, useInView, useAnimation } from 'framer-motion'
import Typed from 'typed.js'

export function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const controls = useAnimation()
  const typedRef = useRef<HTMLSpanElement | null>(null)

  useEffect(() => {
    if (isInView) {
      controls.start({ opacity: 1, y: 0 })
    }
  }, [isInView, controls])

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: ['Get In Touch 📬', 'Let\'s Connect 🚀', 'Drop Me a Message 💬'],
      typeSpeed: 60,
      backSpeed: 40,
      backDelay: 2000,
      loop: true,
    })

    return () => {
      typed.destroy()
    }
  }, [])

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={controls}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="relative w-full max-w-7xl mx-auto py-12 px-4"
    >
      {/* Split Layout: Info Left, Form Right */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">

        {/* Left Side - Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex flex-col justify-center space-y-8"
        >
          {/* Header */}
          <div className="space-y-4">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, duration: 0.5, type: "spring" }}
              className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-white/10"
            >
              <MailIcon className="size-10 text-cyan-300 animate-pulse stroke-[1.5]" />
            </motion.div>

            <motion.h2
              className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-300 via-purple-300 to-pink-300 bg-clip-text text-transparent leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <span ref={typedRef} />
            </motion.h2>

            <motion.p
              className="text-white/80 text-lg leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              Have a project in mind or want to collaborate? I'd love to hear from you.
              Drop me a message and let's build something amazing together! 🚀
            </motion.p>
          </div>

          {/* Contact Details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="space-y-6"
          >
            {/* Email */}
            <div className="flex items-start gap-4 group">
              <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-cyan-500/10 group-hover:border-cyan-500/30 transition-all duration-300">
                <MailIcon className="size-5 text-cyan-300" />
              </div>
              <div className="flex-1">
                <h3 className="text-white/90 font-semibold mb-1">Email</h3>
                <a href="mailto:mail.uthrapathy@gmail.com" className="text-white/60 hover:text-cyan-300 transition-colors">
                  mail.uthrapathy@gmail.com
                </a>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-start gap-4 group">
              <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-purple-500/10 group-hover:border-purple-500/30 transition-all duration-300">
                <MapPinIcon className="size-5 text-purple-300" />
              </div>
              <div className="flex-1">
                <h3 className="text-white/90 font-semibold mb-1">Location</h3>
                <p className="text-white/60">Chennai, India 🇮🇳</p>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 pt-4">
              <a
                href="https://github.com/uthrapathy-m"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-white/20 hover:scale-110 transition-all duration-300"
              >
                <GithubIcon className="size-5 text-white/80" />
              </a>
              <a
                href="https://linkedin.com/in/uthrapathy"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-blue-500/10 hover:border-blue-500/30 hover:scale-110 transition-all duration-300"
              >
                <LinkedinIcon className="size-5 text-blue-300" />
              </a>
            </div>
          </motion.div>

          {/* Decorative Element */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="hidden lg:block pt-8"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-3xl"></div>
              <div className="relative text-white/40 text-sm italic">
                "Communication is the key to successful collaboration"
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Side - Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-3xl blur-2xl -z-10" />
          <ContactForm />
        </motion.div>
      </div>
    </motion.section>
  )
}

import type { Config } from 'tailwindcss'

const config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}'
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },
    extend: {
      screens: {
        'xs': '475px'
      },
      colors: {
        primary: {
          DEFAULT: '#1A2A80',
          foreground: '#B2B0E8',
        },
        secondary: {
          DEFAULT: '#3B38A0',
          foreground: '#B2B0E8',
        },
        accent: {
          DEFAULT: '#7A85C1',
          foreground: '#1A2A80',
        },
        background: '#090040',
        border: '#7A85C1',
        input: '#7A85C1',
        ring: '#3B38A0',
        foreground: '#1A2A80',
        card: {
          DEFAULT: '#B2B0E8',
          foreground: '#1A2A80',
        },
        popover: {
          DEFAULT: '#B2B0E8',
          foreground: '#1A2A80',
        },
        muted: {
          DEFAULT: '#7A85C1',
          foreground: '#B2B0E8',
        },
        destructive: {
          DEFAULT: '#1A2A80',
          foreground: '#B2B0E8',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)'],
        mono: ['var(--font-geist-mono)']
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' }
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' }
        },
        blink: {
          '0%, 100%': { visibility: 'visible' },
          '50%': { visibility: 'hidden' }
        },
        // 🔥 Custom Animations
      'pulse-slow': {
        '0%, 100%': { opacity: '1', transform: 'scale(1)' },
        '50%': { opacity: '0.7', transform: 'scale(1.05)' }
      },
      glow: {
        '0%, 100%': { boxShadow: '0 0 0px rgba(0,0,0,0)' },
        '50%': { boxShadow: '0 0 10px var(--tw-shadow-color)' }
      }
    },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        // 🔥 Custom animation utilities
        'pulse-slow': 'pulse-slow 2s infinite ease-in-out',
        glow: 'glow 1.5s infinite ease-in-out',
        blink: 'blink 1.2s steps(2, start) infinite'
      }
    }
  },
  plugins: [require('tailwindcss-animate')]
} satisfies Config

export default config

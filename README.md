# Personal Portfolio

A modern, responsive personal portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- **Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices
- **Dark Mode Support** - Toggle between light and dark themes
- **Career Timeline** - Showcase your professional journey and experiences
- **Project Showcase** - Display your projects with detailed information
- **Contact Form** - Direct messaging capability with email notifications
- **Performance Optimized** - Built with Next.js for fast load times

## Tech Stack

- **Framework** - [Next.js](https://nextjs.org/)
- **Language** - [TypeScript](https://www.typescriptlang.org/)
- **Styling** - [Tailwind CSS](https://tailwindcss.com/)
- **UI Components** - [shadcn/ui](https://ui.shadcn.com/)
- **Email** - [Resend](https://resend.com/)
- **Deployment** - [Vercel](https://vercel.com/)

## Getting Started

### Prerequisites

- Node.js 18+ and npm/pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/uthrapathy-m/personal-portfolio-uthra.git
cd personal-portfolio-uthra

# Install dependencies
npm install
# or
pnpm install
```

### Development

```bash
npm run dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### Build

```bash
npm run build
npm run start
# or
pnpm build
pnpm start
```

## Project Structure

```
src/
├── app/              # Next.js app directory
│   ├── api/         # API routes
│   ├── career/      # Career pages
│   ├── projects/    # Projects pages
│   ├── contact/     # Contact page
│   └── layout.tsx   # Root layout
├── components/       # React components
│   ├── ui/          # UI components
│   └── icons/       # Icon components
├── data/            # Static data and constants
├── lib/             # Utility functions
└── types/           # TypeScript type definitions
```

## Pages

- **Home** - Introduction and main landing page
- **Career** - Professional experience and timeline
- **Projects** - Portfolio of completed projects
- **Contact** - Contact form for inquiries

## Environment Variables

Create a `.env.local` file in the root directory:

```
NEXT_PUBLIC_RESEND_API_KEY=your_resend_api_key
```

## License

This project is licensed under the MIT License - see the LICENSE file for details.

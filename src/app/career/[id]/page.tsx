'use client'

import { motion } from 'framer-motion'
import { useParams, useRouter } from 'next/navigation'
import { data } from '@/constants'
import {
  BriefcaseIcon,
  CalendarIcon,
  ArrowLeftIcon,
  CheckCircle2Icon,
  TrophyIcon,
  CodeIcon,
  UsersIcon,
  TargetIcon,
  TrendingUpIcon,
  AwardIcon
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

// Function to get unique emoji for each company
const getCompanyEmoji = (id: number, badges: string | string[]) => {
  const isEducation = typeof badges === 'string' ? badges.includes('Education') : badges.some(b => b.includes('Education'))

  if (isEducation) {
    return '🎓' // Graduation cap for education
  }

  // Different emojis for different companies
  const companyEmojis = ['🏢', '🚀', '💻', '⚡']
  return companyEmojis[id % companyEmojis.length]
}

export default function CareerDetailPage() {
  const params = useParams()
  const router = useRouter()
  const id = params.id as string

  // Find the career item by index (id)
  const careerIndex = parseInt(id)
  const careerItem = data.career[careerIndex]
  const companyEmoji = careerItem ? getCompanyEmoji(careerIndex, careerItem.badges) : '💼'

  if (!careerItem) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen p-4">
        <h1 className="text-2xl font-bold text-white mb-4">Career not found</h1>
        <Button onClick={() => router.push('/')}>
          <ArrowLeftIcon className="size-4 mr-2" />
          Back to Home
        </Button>
      </div>
    )
  }

  // Enhanced content based on career type
  const getEnhancedContent = () => {
    if (careerItem.badges.includes('Education')) {
      return {
        overview: "Pursued a comprehensive Computer Science education with specialization in Software Engineering, Cloud Computing, and Distributed Systems. Actively participated in technical clubs, coding competitions, and collaborative projects.",
        achievements: [
          "Graduated with First Class Honors",
          "Completed capstone project on cloud-native application deployment",
          "Member of coding club and participated in multiple hackathons",
          "Published research paper on microservices architecture"
        ],
        skills: ["Java", "Python", "Data Structures", "Algorithms", "Cloud Computing", "System Design", "Database Management", "Software Engineering"],
        impact: "Built strong foundation in computer science fundamentals and practical software development, preparing for professional DevOps engineering career."
      }
    }

    // For work experiences
    return {
      overview: `Professional experience at ${careerItem.company}, focusing on DevOps engineering, cloud infrastructure automation, and continuous integration/deployment pipelines. Responsible for managing scalable infrastructure and improving development workflows.`,
      achievements: [
        "Successfully migrated legacy infrastructure to cloud-native architecture",
        "Reduced deployment time by 60% through automation",
        "Implemented comprehensive monitoring and alerting systems",
        "Mentored junior team members on DevOps best practices",
        "Achieved 99.9% uptime for production services"
      ],
      skills: [
        "AWS/Azure Cloud Platforms",
        "Docker & Kubernetes",
        "Terraform & Ansible",
        "Jenkins & GitHub Actions",
        "Prometheus & Grafana",
        "Python & Bash Scripting",
        "CI/CD Pipelines",
        "Infrastructure as Code"
      ],
      impact: "Transformed development and deployment processes, enabling faster feature delivery and improved system reliability. Contributed to significant cost savings through infrastructure optimization."
    }
  }

  const enhancedContent = getEnhancedContent()

  return (
    <div className="w-full min-h-screen pb-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-5xl mx-auto px-4 py-8"
      >
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className="mb-6"
        >
          <Button
            variant="ghost"
            onClick={() => router.push('/')}
            className="text-white hover:text-purple-300 flex items-center gap-2 hover:bg-white/10"
          >
            <ArrowLeftIcon className="size-4" />
            Back to Home
          </Button>
        </motion.div>

        {/* Career Detail Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/20 p-6 sm:p-8 md:p-12 space-y-8"
        >
          {/* Company Header */}
          <div className="flex flex-col gap-4 pb-6 border-b border-white/20">
            <div className="flex items-center gap-3">
              <span className="text-5xl md:text-6xl flex-shrink-0">{companyEmoji}</span>
              <h1 className="text-3xl md:text-5xl font-bold text-purple-300">
                {careerItem.company}
              </h1>
            </div>
            <Badge
              variant="secondary"
              className="w-fit rounded-full shadow-md bg-purple-500/20 text-purple-300 font-semibold px-4 py-2 text-sm border border-purple-400/40 backdrop-blur"
            >
              {careerItem.badges}
            </Badge>
          </div>

          {/* Overview Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-4"
          >
            <div className="flex items-center gap-3">
              <TargetIcon className="size-6 text-cyan-400" />
              <h2 className="text-2xl font-bold text-cyan-300">Overview</h2>
            </div>
            <p className="text-white/90 text-base md:text-lg leading-relaxed ml-9">
              {enhancedContent.overview}
            </p>
          </motion.div>

          {/* Job Roles - Detailed View */}
          {careerItem.jobs.map((job, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              className="space-y-6"
            >
              {/* Job Title */}
              <div className="flex items-start gap-3">
                <CheckCircle2Icon className="size-6 text-purple-400 flex-shrink-0 mt-1" />
                <div className="flex-1">
                  <h2 className="text-2xl md:text-3xl font-bold text-pink-200 mb-2">
                    {job.title}
                  </h2>
                  <div className="flex items-center gap-2 text-purple-200/80">
                    <CalendarIcon className="size-4" />
                    <time className="text-base font-mono">
                      {job.start} — {job.end}
                    </time>
                  </div>
                </div>
              </div>

              {/* Key Responsibilities */}
              <div className="ml-9 space-y-4">
                <h3 className="text-xl font-semibold text-white flex items-center gap-2">
                  <CodeIcon className="size-5 text-yellow-400" />
                  Key Responsibilities & Achievements
                </h3>
                <ul className="space-y-3">
                  {job.description.map((item, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.5 + i * 0.05 }}
                      className="flex items-start gap-3 text-white/90 text-base leading-relaxed bg-white/5 p-4 rounded-lg border border-white/10"
                    >
                      <span className="text-purple-400 mt-1.5 flex-shrink-0">▪</span>
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}

          {/* Major Achievements */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="space-y-4 pt-6 border-t border-white/20"
          >
            <div className="flex items-center gap-3">
              <TrophyIcon className="size-6 text-yellow-400" />
              <h2 className="text-2xl font-bold text-yellow-300">Major Achievements</h2>
            </div>
            <div className="ml-9 grid gap-4 sm:grid-cols-2">
              {enhancedContent.achievements.map((achievement, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.7 + i * 0.05 }}
                  className="flex items-start gap-3 bg-gradient-to-br from-yellow-500/10 to-orange-500/10 p-4 rounded-lg border border-yellow-400/20"
                >
                  <AwardIcon className="size-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                  <span className="text-white/90 text-sm">{achievement}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Technical Skills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="space-y-4 pt-6 border-t border-white/20"
          >
            <div className="flex items-center gap-3">
              <UsersIcon className="size-6 text-green-400" />
              <h2 className="text-2xl font-bold text-green-300">Technical Skills & Tools</h2>
            </div>
            <div className="ml-9 flex flex-wrap gap-3">
              {enhancedContent.skills.map((skill, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.2, delay: 0.9 + i * 0.03 }}
                  className="px-4 py-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-green-200 rounded-full text-sm font-semibold border border-green-400/30 hover:scale-105 transition-transform"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Impact Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.0 }}
            className="space-y-4 pt-6 border-t border-white/20"
          >
            <div className="flex items-center gap-3">
              <TrendingUpIcon className="size-6 text-pink-400" />
              <h2 className="text-2xl font-bold text-pink-300">Impact & Contribution</h2>
            </div>
            <p className="text-white/90 text-base md:text-lg leading-relaxed ml-9 bg-gradient-to-r from-pink-500/10 to-purple-500/10 p-6 rounded-lg border border-pink-400/20">
              {enhancedContent.impact}
            </p>
          </motion.div>

          {/* External Link (if available) */}
          {careerItem.link && careerItem.link !== '#' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.1 }}
              className="pt-6 border-t border-white/20 flex justify-center"
            >
              <Button
                variant="ghost"
                className="w-full sm:w-auto bg-yellow-500 text-black hover:bg-yellow-600 font-semibold px-8 py-4 rounded-full text-base shadow-lg hover:shadow-yellow-500/50"
                asChild
              >
                <a
                  href={careerItem.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2"
                >
                  <span>View Company Website</span>
                  <BriefcaseIcon className="size-5" />
                </a>
              </Button>
            </motion.div>
          )}
        </motion.div>
      </motion.div>
    </div>
  )
}

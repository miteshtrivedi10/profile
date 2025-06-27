'use client'

import Link from 'next/link'
import Nav from '@/components/nav'
import { FaLinkedin, FaGithub, FaEnvelope, FaCertificate, FaBookReader } from 'react-icons/fa'
import { useState, useEffect, useRef } from 'react'

export default function Home() {
  const [showEmail, setShowEmail] = useState(false)
  const buttonRef = useRef<HTMLButtonElement>(null)
  
  // Email parts split to avoid easy scraping
  const emailParts = {
    user: 'miteshtrivedi10',
    domain: 'gmail',
    tld: 'com'
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (buttonRef.current && !buttonRef.current.contains(event.target as Node)) {
        setShowEmail(false)
      }
    }

    document.addEventListener('click', handleClickOutside)
    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [])

  const handleEmailClick = (e: React.MouseEvent) => {
    e.stopPropagation()
    setShowEmail(true)
    const email = `${emailParts.user}@${emailParts.domain}.${emailParts.tld}`
    navigator.clipboard.writeText(email)
  }

  return (
    <main className="min-h-screen flex flex-col bg-background">
      <Nav />
      <div className="flex-1 px-4 py-8 sm:px-6 lg:px-8 mt-[6rem] sm:mt-[7rem]">
        <div className="mx-auto max-w-7xl h-full">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 lg:gap-12">
            {/* Left Column - Text Content */}
            <div className="flex-1 space-y-6">
              <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold tracking-tight">
                Hi, I'm Mitesh Trivedi
              </h1>
              <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400">
                15+ years of experience in backend architecture, cloud-native solutions, and scalable system design with a focus on optimizing performance
                and resource utilization. Experienced in integrating advanced technologies such as Generative AI, distributed systems, and data pipelines to enhance
                user engagement and operational efficiency. Skilled in leading cross-functional teams and driving development processes to deliver impactful,
                innovative solutions.
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <Link
                  href="/blog"
                  className="group relative inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-primary-500 to-primary-600 px-6 py-2.5 text-sm font-semibold text-white shadow-md hover:shadow-lg hover:translate-y-[-1px] transition-all duration-200 overflow-hidden"
                >
                  <div className="relative z-10 flex items-center gap-2">
                    <FaBookReader className="h-4 w-4" />
                    <span>Read my blog</span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-primary-700 transform transition-transform duration-200 group-hover:scale-[1.05] -z-0" />
                </Link>
                <a
                  href="https://linkedin.com/in/miteshtrivedi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-[#0A66C2]/10 px-4 py-2 text-sm font-semibold text-[#0A66C2] hover:bg-[#0A66C2]/20 dark:bg-[#0A66C2]/20 dark:text-[#0A66C2] dark:hover:bg-[#0A66C2]/30 transition-colors"
                >
                  <FaLinkedin className="h-4 w-4" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href="https://github.com/miteshtrivedi10"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-gray-100 px-4 py-2 text-sm font-semibold text-gray-900 hover:bg-gray-200 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 transition-colors"
                >
                  <FaGithub className="h-4 w-4" />
                  <span>GitHub</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/miteshtrivedi/details/certifications/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-yellow-100 px-4 py-2 text-sm font-semibold text-yellow-800 hover:bg-yellow-200 dark:bg-yellow-900/30 dark:text-yellow-500 dark:hover:bg-yellow-900/50 transition-colors"
                >
                  <FaCertificate className="h-4 w-4" />
                  <span>Credentials</span>
                </a>
                <button
                  ref={buttonRef}
                  onClick={handleEmailClick}
                  className="inline-flex items-center gap-2 rounded-lg bg-primary-100 px-4 py-2 text-sm font-semibold text-primary-900 hover:bg-primary-200 dark:bg-primary-900/30 dark:text-primary-500 dark:hover:bg-primary-900/50 transition-colors relative"
                >
                  <FaEnvelope className="h-4 w-4" />
                  <span>
                    Email
                    {showEmail && (
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 bg-gray-800 text-white px-3 py-1 rounded shadow-lg whitespace-nowrap">
                        {`${emailParts.user}@${emailParts.domain}.${emailParts.tld}`}
                        <span className="text-xs text-green-400 ml-2">(Copied!)</span>
                        <div className="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-gray-800"></div>
                      </div>
                    )}
                  </span>
                </button>
              </div>
            </div>

            {/* Right Column - Photo */}
            <div className="flex flex-col items-center">
              <div className="relative w-48 sm:w-56 lg:w-64 aspect-square overflow-hidden rounded-2xl bg-gray-100 dark:bg-gray-800">
                <img
                  src="/profile.jpg"
                  alt="Mitesh Trivedi"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
} 
'use client'

import Link from 'next/link'
import Nav from '@/components/nav'
import { FaLinkedin, FaGithub, FaEnvelope, FaCertificate } from 'react-icons/fa'
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
      <div className="flex-1 px-4 py-8 sm:px-6 lg:px-8 mt-[2.5rem] sm:mt-[2.75rem]">
        <div className="mx-auto max-w-7xl h-full">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 lg:gap-12">
            {/* Left Column - Text Content */}
            <div className="flex-1 space-y-6">
              <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold tracking-tight">
                Hi, I'm Mitesh Trivedi
              </h1>
              <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400">
                Offering 15 years of experience in backend architecture, cloud-native solutions, and scalable system design with a focus on optimizing performance
                and resource utilization. Experienced in integrating advanced technologies such as Generative AI, distributed systems, and data pipelines to enhance
                user engagement and operational efficiency. Skilled in leading cross-functional teams and driving development processes to deliver impactful,
                innovative solutions.
              </p>
              <div>
                <Link
                  href="/blog"
                  className="inline-block rounded-lg bg-gray-100 px-4 py-2 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-200 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700"
                >
                  Read my blog
                </Link>
              </div>
            </div>

            {/* Right Column - Photo and Contact Links */}
            <div className="flex flex-col items-center gap-6 lg:gap-8">
              <div className="relative w-48 sm:w-56 lg:w-64 aspect-square overflow-hidden rounded-2xl bg-gray-100 dark:bg-gray-800">
                <img
                  src="/profile.jpg"
                  alt="Mitesh Trivedi"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>

              {/* Contact Links */}
              <div className="grid grid-cols-2 gap-3 w-48 sm:w-56 lg:w-64">
                <a
                  href="https://linkedin.com/in/miteshtrivedi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-lg px-3 py-2 text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800 transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <FaLinkedin className="h-5 w-5 text-[#0A66C2]" />
                  <span className="text-sm font-medium">LinkedIn</span>
                </a>
                <a
                  href="https://github.com/miteshtrivedi10"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-lg px-3 py-2 text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800 transition-colors"
                  aria-label="GitHub Profile"
                >
                  <FaGithub className="h-5 w-5" />
                  <span className="text-sm font-medium">GitHub</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/miteshtrivedi/details/certifications/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-lg px-3 py-2 text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800 transition-colors"
                  aria-label="Credentials"
                >
                  <FaCertificate className="h-5 w-5 text-[#FFD700]" />
                  <span className="text-sm font-medium">Credentials</span>
                </a>
                <button
                  ref={buttonRef}
                  onClick={handleEmailClick}
                  className="flex items-center justify-center gap-2 rounded-lg px-3 py-2 text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800 transition-colors group relative"
                  aria-label="Email Address"
                >
                  <FaEnvelope className="h-5 w-5 text-primary-600" />
                  <span className="text-sm font-medium">
                    {showEmail ? (
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 bg-gray-800 text-white px-3 py-1 rounded shadow-lg whitespace-nowrap">
                        {`${emailParts.user}@${emailParts.domain}.${emailParts.tld}`}
                        <span className="text-xs text-green-400 ml-2">(Copied!)</span>
                        <div className="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-gray-800"></div>
                      </div>
                    ) : null}
                    Email
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
} 
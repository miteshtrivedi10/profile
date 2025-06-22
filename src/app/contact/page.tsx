'use client'

import Nav from '@/components/nav'
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa'
import { useState } from 'react'

export default function Contact() {
  const [showEmail, setShowEmail] = useState(false)
  
  // Email parts split to avoid easy scraping
  const emailParts = {
    user: 'miteshtrivedi10',
    domain: 'gmail',
    tld: 'com'
  }

  const handleEmailClick = () => {
    setShowEmail(true)
    const email = `${emailParts.user}@${emailParts.domain}.${emailParts.tld}`
    navigator.clipboard.writeText(email)
  }

  return (
    <main>
      <Nav />
      <div className="min-h-screen pt-16">
        <div className="py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl">
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Contact</h1>
              <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">
                Let's discuss how my 15 years of experience in backend architecture, cloud solutions, and system design 
                can help bring your projects to the next level. Whether it's optimizing performance, implementing advanced 
                technologies, or leading development teams, I'm here to help.
              </p>

              <div className="mt-12 flex flex-col gap-8">
                <a
                  href="https://linkedin.com/in/miteshtrivedi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
                >
                  <FaLinkedin className="h-8 w-8" />
                  <span className="text-lg">Connect on LinkedIn</span>
                </a>
                <a
                  href="https://github.com/miteshtrivedi10"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
                >
                  <FaGithub className="h-8 w-8" />
                  <span className="text-lg">Follow on GitHub</span>
                </a>
                <button
                  onClick={handleEmailClick}
                  className="flex items-center gap-3 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
                >
                  <FaEnvelope className="h-8 w-8" />
                  <span className="text-lg">
                    {showEmail ? (
                      <span className="flex items-center gap-2">
                        {`${emailParts.user}@${emailParts.domain}.${emailParts.tld}`}
                        <span className="text-sm text-primary-600">(Copied!)</span>
                      </span>
                    ) : (
                      "Click to reveal email address"
                    )}
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
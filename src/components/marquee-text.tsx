'use client'

import { useEffect, useState } from 'react'

export default function MarqueeText() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <div className="fixed top-0 left-0 right-0 z-50 w-full overflow-hidden bg-gradient-to-r from-gray-900/95 via-gray-800 to-gray-900/95 dark:from-gray-800/95 dark:via-gray-700 dark:to-gray-800/95 backdrop-blur-sm shadow-lg">
      <div className="relative overflow-hidden">
        <div className={`marquee-text ${isClient ? 'animate' : ''}`}>
          <span className="text-sm sm:text-base font-medium tracking-wide text-gray-200">
            Handcrafted using <span className="font-bold text-primary-400 dark:text-primary-500">CURSOR-AI</span>
          </span>
        </div>
      </div>
    </div>
  )
} 
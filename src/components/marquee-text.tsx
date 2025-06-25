'use client'

import { useEffect, useRef, useState } from 'react'

export default function MarqueeText() {
  const [isClient, setIsClient] = useState(false)
  const initialDuration = 30 // Fixed initial duration in seconds

  useEffect(() => {
    setIsClient(true)
    
    const updateDuration = () => {
      const newDuration = window.innerWidth / 40;
      document.documentElement.style.setProperty('--scroll-duration', `${newDuration}s`);
    };

    // Run immediately and set up listener
    updateDuration();
    window.addEventListener('resize', updateDuration);
    
    return () => window.removeEventListener('resize', updateDuration);
  }, []);

  // Pre-render the content with visibility: visible to prevent flash
  const content = (
    <span className="text-sm sm:text-base text-gray-300 dark:text-gray-400">
      Handcrafted using <span className="font-semibold text-white">CURSOR-AI</span>
    </span>
  );

  return (
    <div className="fixed top-0 left-0 right-0 z-50 w-full overflow-hidden bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800 shadow-md">
      <div className="relative flex overflow-x-hidden">
        <div
          className={`py-2 sm:py-3 flex gap-[100vw] ${isClient ? 'marquee-container' : 'marquee-container-preload'}`}
          style={{ 
            '--scroll-duration': `${initialDuration}s`,
            backfaceVisibility: 'hidden',
            opacity: 1,
            visibility: 'visible',
            transform: isClient ? undefined : 'translateX(0)'
          } as React.CSSProperties}
        >
          <div className="marquee-content flex shrink-0">
            {content}
          </div>
          <div className="marquee-content flex shrink-0">
            {content}
          </div>
        </div>
      </div>
    </div>
  )
} 
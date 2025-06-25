'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import { useState, useEffect } from 'react'
import { FiSun, FiMoon } from 'react-icons/fi'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Blog', href: '/blog' },
]

export default function Nav() {
  const pathname = usePathname()
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <header className="fixed inset-x-0 top-0 z-40 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-6 mt-[2.5rem] sm:mt-[2.75rem] sm:px-6 lg:px-8" aria-label="Global">
        <div className="flex gap-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`text-sm font-semibold ${
                pathname === item.href
                  ? 'text-primary-600 dark:text-primary-500'
                  : 'text-gray-900 hover:text-gray-900 dark:text-gray-100 dark:hover:text-gray-100'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div>
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="rounded-md p-1 text-gray-900 hover:bg-gray-100 dark:text-gray-100 dark:hover:bg-gray-800"
          >
            {mounted && (theme === 'dark' ? <FiSun className="h-5 w-5" /> : <FiMoon className="h-5 w-5" />)}
          </button>
        </div>
      </nav>
    </header>
  )
} 
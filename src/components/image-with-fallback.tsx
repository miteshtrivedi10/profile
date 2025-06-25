'use client'

import Image from 'next/image'
import { useState } from 'react'

interface ImageWithFallbackProps {
  src: string
  alt: string
  width?: number
  height?: number
  fill?: boolean
  className?: string
  priority?: boolean
}

export default function ImageWithFallback({
  src,
  alt,
  width,
  height,
  fill,
  className,
  priority,
}: ImageWithFallbackProps) {
  const [error, setError] = useState(false)

  if (error) {
    return (
      <div
        className={`flex items-center justify-center bg-gray-100 dark:bg-gray-800 ${className}`}
        style={fill ? { position: 'absolute', inset: 0 } : { width, height }}
      >
        <span className="text-sm text-gray-500 dark:text-gray-400">{alt}</span>
      </div>
    )
  }

  // Use regular img tag for static export
  if (process.env.NEXT_PUBLIC_STATIC_EXPORT) {
    return (
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={className}
        style={fill ? { objectFit: 'cover', width: '100%', height: '100%', position: 'absolute' } : undefined}
        onError={() => setError(true)}
      />
    )
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={width || 400}
      height={height || 400}
      className={className}
      priority={priority}
      onError={() => setError(true)}
      loading={priority ? 'eager' : 'lazy'}
    />
  )
} 
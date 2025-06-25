import Image from 'next/image'
import Nav from '@/components/nav'
import { notFound } from 'next/navigation'

interface BlogPost {
  title: string
  description: string
  date: string
  category: string
  content?: string
  image: string
  externalUrl?: string
}

type BlogPosts = {
  [key: string]: BlogPost
}

// This would typically come from a CMS or database
const posts: BlogPosts = {
  'model-context-protocol': {
    title: 'Model Context Protocol: Real World Use Case',
    description: 'Exploring the Model Context Protocol pattern with a practical example from the trading industry.',
    date: '2025-06-21',
    category: 'MCP Architecture',
    content: `
      This article is coming soon! We're working on bringing you an in-depth exploration of the Model Context Protocol pattern with real-world examples from the trading industry.

      ## What to expect

      - Detailed explanation of the Model Context Protocol pattern
      - Real-world implementation in trading systems
      - Best practices and design considerations
    `,
    image: '/mcp-architecture.svg'
  },
  'trading-platform': {
    title: 'Implementing Unique Sequential Trade IDs in a High-Performance Trading Platform',
    description: 'An in-depth exploration of generating unique, sequential trade IDs in a distributed trading system while maintaining performance and consistency.',
    date: '2024-02-15',
    category: 'System Architecture',
    externalUrl: 'https://medium.com/@miteshtrivedi10/unique-sequential-trade-ids-trading-platform-4bb55161a38d',
    image: '/trading-platform.svg'
  },
  'merchant-platform': {
    title: 'Software Design & Architecture of Merchant Platform (F&B Category)',
    description: 'A detailed look at the software architecture and design principles behind a merchant platform in the Food & Beverage category.',
    date: '2024-01-01',
    category: 'System Design',
    externalUrl: 'https://medium.com/@miteshtrivedi10/software-design-architecture-of-merchant-platform-f-b-category-99b666ce5be3',
    image: '/merchant-platform.svg'
  }
}

export function generateStaticParams() {
  return Object.keys(posts).map((slug) => ({ slug }))
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = posts[params.slug]

  if (!post) {
    notFound()
  }

  // If it's an external post, redirect to the external URL
  if (post.externalUrl) {
    // In a static export, we'll show a simple page that redirects to the external URL
    return (
      <main>
        <Nav />
        <div className="min-h-screen pt-16">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12">
            <h1 className="text-2xl font-bold mb-4">{post.title}</h1>
            <p className="mb-4">{post.description}</p>
            <p>Redirecting to Medium article...</p>
            <a href={post.externalUrl} 
               className="text-blue-500 hover:text-blue-600"
               target="_blank" 
               rel="noopener noreferrer">
              Click here if you're not redirected automatically
            </a>
            {/* Add client-side redirect */}
            <script
              dangerouslySetInnerHTML={{
                __html: `window.location.href = "${post.externalUrl}";`,
              }}
            />
          </div>
        </div>
      </main>
    )
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-white dark:bg-gray-900">
      <Nav />
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12 w-full">
        <article>
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white antialiased">
              {post.title}
            </h1>
            <p className="mt-4 text-base text-gray-600 dark:text-gray-400">
              {new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </p>
          </div>
          
          <div className="prose prose-lg prose-gray dark:prose-invert">
            {post.content?.split('\n\n').map((paragraph: string, index: number) => (
              <p key={index} className="mb-4">
                {paragraph.trim()}
              </p>
            ))}
          </div>
        </article>
      </div>
    </main>
  )
} 
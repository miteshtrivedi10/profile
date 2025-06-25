import Link from 'next/link'
import Nav from '@/components/nav'
import ImageWithFallback from '@/components/image-with-fallback'

interface Post {
  id: string | number;
  title: string;
  description: string;
  date: string;
  category?: string[];
  image?: string;
  externalUrl?: string;
}

const posts = [
  {
    id: 'model-context-protocol',
    title: 'Model Context Protocol: Real World Use Case',
    description: 'A deep dive into the Model Context Protocol (MCP) - an open standard for connecting AI systems with data sources and tools. Learn how MCP standardizes AI integrations, enables secure tool access, and supports building composable agent architectures.',
    date: '2025-06-21',
    category: ['MCP Architecture', 'Generative AI Use-Cases', 'AI Systems', 'AI Integrations'],
    image: '/mcp-architecture.svg',
    externalUrl: 'https://medium.com/@miteshtrivedi10/model-context-protocol-real-world-use-case-3d894703f332'
  },
  {
    id: 2,
    title: 'Implementing Unique Sequential Trade IDs in a High-Performance Trading Platform',
    description: 'An in-depth exploration of generating unique, sequential trade IDs in a distributed trading system while maintaining performance and consistency. Learn about the challenges and solutions in implementing this critical feature.',
    date: '2024-02-15',
    category: ['System Architecture', 'Trading-System', 'Distributed System Design', 'Problem Solving'],
    image: '/trading-platform.svg',
    externalUrl: 'https://medium.com/@miteshtrivedi10/unique-sequential-trade-ids-trading-platform-4bb55161a38d'
  },
  {
    id: 1,
    title: 'Software Design & Architecture of Merchant Platform (F&B Category)',
    description: 'A detailed look at the software architecture and design principles behind a merchant platform in the Food & Beverage category, focusing on scalability and maintainability.',
    date: '2024-01-01',
    category: ['System Design', 'Scalable Architecture', 'Cloud Native', 'Distributed System Design', 'High Throughput'],
    image: '/merchant-platform.svg',
    externalUrl: 'https://medium.com/@miteshtrivedi10/software-design-architecture-of-merchant-platform-f-b-category-99b666ce5be3'
  }
]

export default function Blog() {
  return (
    <main>
      <Nav />
      <div className="min-h-screen pt-16">
        <div className="py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Blog</h1>
            <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">
              Insights and experiences from 15 years in backend architecture, cloud-native solutions, and scalable system design. 
              Sharing knowledge about advanced technologies including Generative AI, distributed systems, and optimizing performance at scale.
            </p>
            <div className="mt-16 space-y-20 lg:mt-20 lg:space-y-20">
              {posts.map((post) => (
                <article key={post.id} className="relative isolate flex flex-col gap-8 lg:flex-row">
                  <div className="relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-square lg:w-64 lg:shrink-0">
                    <ImageWithFallback
                      src={post.image}
                      alt={post.title}
                      fill
                      className="absolute inset-0 h-full w-full rounded-2xl bg-gray-100 object-cover"
                    />
                    <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                  </div>
                  <div>
                    <div className="flex items-center gap-x-4 text-xs">
                      <time dateTime={post.date} className="text-gray-500">
                        {new Date(post.date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        })}
                      </time>
                      <div className="flex flex-wrap gap-2">
                        {post.category?.map((cat, index) => (
                          <span 
                            key={index}
                            className="relative z-10 rounded-full bg-gray-100 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700"
                          >
                            {cat}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="group relative max-w-xl">
                      <h3 className="mt-3 text-lg font-semibold leading-6">
                        {post.externalUrl ? (
                          <a 
                            href={post.externalUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-900 dark:text-white hover:text-primary-600 dark:hover:text-primary-400"
                          >
                            {post.title}
                            <span className="ml-2 text-sm text-gray-500">↗</span>
                          </a>
                        ) : (
                          <span className="text-gray-900 dark:text-white">
                            {post.title}
                          </span>
                        )}
                      </h3>
                      <p className="mt-5 text-sm leading-6 text-gray-600 dark:text-gray-400">
                        {post.description}
                      </p>
                      {post.externalUrl && (
                        <div className="mt-4">
                          <span className="text-sm text-gray-500">
                            Read on Medium →
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
} 
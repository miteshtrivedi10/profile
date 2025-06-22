import Link from 'next/link'
import Nav from '@/components/nav'
import ImageWithFallback from '@/components/image-with-fallback'

const posts = [
  {
    id: 2,
    title: 'Implementing Unique Sequential Trade IDs in a High-Performance Trading Platform',
    description: 'An in-depth exploration of generating unique, sequential trade IDs in a distributed trading system while maintaining performance and consistency. Learn about the challenges and solutions in implementing this critical feature.',
    date: '2024-02-15',
    category: 'System Architecture',
    author: 'Mitesh Trivedi',
    image: '/trading-platform.svg',
    externalUrl: 'https://medium.com/@miteshtrivedi10/unique-sequential-trade-ids-trading-platform-4bb55161a38d'
  },
  {
    id: 1,
    title: 'Software Design & Architecture of Merchant Platform (F&B Category)',
    description: 'A detailed look at the software architecture and design principles behind a merchant platform in the Food & Beverage category, focusing on scalability and maintainability.',
    date: '2024-01-01',
    category: 'System Design',
    author: 'Mitesh Trivedi',
    slug: 'software-design-architecture-merchant-platform',
    image: '/merchant-platform.svg',
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
                      <span className="relative z-10 rounded-full bg-gray-100 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700">
                        {post.category}
                      </span>
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
                          <Link 
                            href={`/blog/${post.slug}`}
                            className="text-gray-900 dark:text-white hover:text-primary-600 dark:hover:text-primary-400"
                          >
                            <span className="absolute inset-0" />
                            {post.title}
                          </Link>
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
                    <div className="mt-6 flex border-t border-gray-900/5 pt-6">
                      <div className="relative flex items-center gap-x-4">
                        <div className="text-sm leading-6">
                          <p className="font-semibold text-gray-900 dark:text-gray-100">
                            <span className="absolute inset-0" />
                            {post.author}
                          </p>
                        </div>
                      </div>
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
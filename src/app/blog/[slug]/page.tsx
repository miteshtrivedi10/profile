import Image from 'next/image'
import Nav from '@/components/nav'

// This would typically come from a CMS or database
const post = {
  title: 'Software Design & Architecture of Merchant Platform (F&B Category)',
  description: 'A detailed look at the software architecture and design principles behind a merchant platform in the Food & Beverage category, focusing on scalability and maintainability.',
  date: '2024-01-01',
  category: 'System Design',
  author: 'Mitesh Trivedi',
  content: `
    A merchant platform in the Food & Beverage category requires careful consideration of various architectural aspects to ensure scalability, reliability, and maintainability. Here's a detailed look at the key components and design decisions:

    ## System Requirements

    1. **Scalability**: The system must handle millions of orders and search requests
    2. **Performance**: Search operations should complete within 500ms
    3. **Data Integrity**: No loss of transactional data
    4. **Real-time Updates**: Live order tracking and notifications

    ## Architecture Components

    ### Frontend Layer
    - Web and mobile applications
    - Real-time order tracking interface
    - Restaurant menu management dashboard

    ### API Layer
    - RESTful services for CRUD operations
    - WebSocket connections for real-time updates
    - GraphQL endpoints for flexible data querying

    ### Service Layer
    - Order Processing Service
    - Payment Gateway Integration
    - Notification Service
    - Search and Recommendation Engine

    ### Data Layer
    - PostgreSQL for transactional data
    - Elasticsearch for menu and search functionality
    - Redis for caching and real-time data
    - Kafka for event streaming

    ## Key Design Decisions

    1. **Microservices Architecture**: Enables independent scaling and deployment
    2. **Event-Driven Design**: Facilitates real-time updates and system decoupling
    3. **CQRS Pattern**: Separates read and write operations for better performance
    4. **Domain-Driven Design**: Organizes business logic into bounded contexts
  `,
  image: '/blog-cover.jpg',
}

export function generateStaticParams() {
  // Define the static paths for your blog posts
  return [
    { slug: 'trading-platform' },
    { slug: 'merchant-platform' }
  ]
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  return (
    <main>
      <Nav />
      <div className="min-h-screen pt-16">
        <article className="py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <div className="relative isolate">
                <div className="relative aspect-[2/1] w-full">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="absolute inset-0 h-full w-full rounded-2xl bg-gray-100 object-cover"
                    priority
                  />
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                </div>
                <div className="mt-8">
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
                  <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                    {post.title}
                  </h1>
                  <div className="mt-4 flex items-center gap-x-4">
                    <div className="text-sm leading-6">
                      <p className="font-semibold text-gray-900 dark:text-gray-100">
                        {post.author}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-16 prose prose-lg prose-gray mx-auto dark:prose-invert">
                {post.content.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="mb-4">
                    {paragraph.trim()}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </article>
      </div>
    </main>
  )
} 
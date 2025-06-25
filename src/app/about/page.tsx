import Nav from '@/components/nav'
import { ReactElement } from 'react'

export default function About(): ReactElement {
  return (
    <main>
      <Nav />
      <div className="min-h-screen pt-16">
        <div className="py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl mb-12">About Me</h1>
            
            {/* Main 1x2 layout */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Left column: Write-up */}
              <div className="space-y-6 text-lg text-gray-600 dark:text-gray-400">
                <p>
                  With 15 years of experience in backend architecture, cloud-native solutions, and scalable system design, 
                  I've dedicated my career to building robust and efficient software systems that drive business success.
                </p>

                <p>
                  My expertise spans across optimizing performance and resource utilization in complex systems, 
                  integrating cutting-edge technologies such as Generative AI, and designing distributed systems 
                  that handle massive scale. I'm particularly passionate about creating data pipelines that enhance 
                  user engagement and operational efficiency.
                </p>

                <p>
                  Throughout my career, I've had the privilege of leading cross-functional teams and driving 
                  development processes that deliver impactful, innovative solutions. I believe in combining 
                  technical excellence with practical business outcomes, ensuring that every solution not only 
                  works well but also adds tangible value.
                </p>

                <p>
                  I'm always excited to tackle new challenges and collaborate on projects that push the boundaries 
                  of what's possible in software architecture and system design. Whether it's optimizing existing 
                  systems or building new solutions from the ground up, I bring a wealth of experience and a 
                  commitment to excellence to every project.
                </p>
              </div>

              {/* Right column: Core Competencies and Technical Skills */}
              <div className="space-y-12">
                {/* Core Competencies */}
                <div>
                  <h2 className="text-2xl font-bold tracking-tight mb-6">Core Competencies</h2>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
                      <h3 className="font-semibold">Backend Architecture</h3>
                      <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                        Designing scalable and maintainable backend systems
                      </p>
                    </div>
                    <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
                      <h3 className="font-semibold">Cloud Solutions</h3>
                      <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                        Building and optimizing cloud-native applications
                      </p>
                    </div>
                    <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
                      <h3 className="font-semibold">Advanced Technologies</h3>
                      <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                        Integrating Generative AI and distributed systems
                      </p>
                    </div>
                    <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
                      <h3 className="font-semibold">Team Leadership</h3>
                      <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                        Leading cross-functional teams and development processes
                      </p>
                    </div>
                  </div>
                </div>

                {/* Technical Skills */}
                <div>
                  <h2 className="text-xl font-bold tracking-tight mb-6">Technical Skills</h2>
                  <div className="grid grid-cols-1 gap-4">
                    {/* Languages & Frameworks */}
                    <div className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-4">
                      <h3 className="text-base font-semibold text-primary-600 dark:text-primary-500 mb-3">Languages & Frameworks</h3>
                      <div className="flex flex-wrap gap-2">
                        <span className="rounded-full bg-primary-50 px-3 py-1 text-xs font-medium text-primary-700 dark:bg-primary-900/10 dark:text-primary-400">Java</span>
                        <span className="rounded-full bg-primary-50 px-3 py-1 text-xs font-medium text-primary-700 dark:bg-primary-900/10 dark:text-primary-400">Python</span>
                        <span className="rounded-full bg-primary-50 px-3 py-1 text-xs font-medium text-primary-700 dark:bg-primary-900/10 dark:text-primary-400">Spring Boot</span>
                        <span className="rounded-full bg-primary-50 px-3 py-1 text-xs font-medium text-primary-700 dark:bg-primary-900/10 dark:text-primary-400">Spring Reactive</span>
                        <span className="rounded-full bg-primary-50 px-3 py-1 text-xs font-medium text-primary-700 dark:bg-primary-900/10 dark:text-primary-400">FastAPI</span>
                        <span className="rounded-full bg-primary-50 px-3 py-1 text-xs font-medium text-primary-700 dark:bg-primary-900/10 dark:text-primary-400">GraphQL</span>
                      </div>
                    </div>

                    {/* Architecture & Design */}
                    <div className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-4">
                      <h3 className="text-base font-semibold text-primary-600 dark:text-primary-500 mb-3">Architecture & Design</h3>
                      <div className="flex flex-wrap gap-2">
                        <span className="rounded-full bg-primary-50 px-3 py-1 text-xs font-medium text-primary-700 dark:bg-primary-900/10 dark:text-primary-400">Microservices</span>
                        <span className="rounded-full bg-primary-50 px-3 py-1 text-xs font-medium text-primary-700 dark:bg-primary-900/10 dark:text-primary-400">WebSockets</span>
                        <span className="rounded-full bg-primary-50 px-3 py-1 text-xs font-medium text-primary-700 dark:bg-primary-900/10 dark:text-primary-400">Distributed Caching</span>
                        <span className="rounded-full bg-primary-50 px-3 py-1 text-xs font-medium text-primary-700 dark:bg-primary-900/10 dark:text-primary-400">Event-Driven</span>
                        <span className="rounded-full bg-primary-50 px-3 py-1 text-xs font-medium text-primary-700 dark:bg-primary-900/10 dark:text-primary-400">Generative AI</span>
                      </div>
                    </div>

                    {/* Databases & Caching */}
                    <div className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-4">
                      <h3 className="text-base font-semibold text-primary-600 dark:text-primary-500 mb-3">Databases & Caching</h3>
                      <div className="flex flex-wrap gap-2">
                        <span className="rounded-full bg-primary-50 px-3 py-1 text-xs font-medium text-primary-700 dark:bg-primary-900/10 dark:text-primary-400">Azure Cosmos-DB</span>
                        <span className="rounded-full bg-primary-50 px-3 py-1 text-xs font-medium text-primary-700 dark:bg-primary-900/10 dark:text-primary-400">DynamoDB</span>
                        <span className="rounded-full bg-primary-50 px-3 py-1 text-xs font-medium text-primary-700 dark:bg-primary-900/10 dark:text-primary-400">Cassandra</span>
                        <span className="rounded-full bg-primary-50 px-3 py-1 text-xs font-medium text-primary-700 dark:bg-primary-900/10 dark:text-primary-400">Azure-SQL</span>
                        <span className="rounded-full bg-primary-50 px-3 py-1 text-xs font-medium text-primary-700 dark:bg-primary-900/10 dark:text-primary-400">Redis</span>
                      </div>
                    </div>

                    {/* Data Processing & Monitoring */}
                    <div className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-4">
                      <h3 className="text-base font-semibold text-primary-600 dark:text-primary-500 mb-3">Data Processing & Monitoring</h3>
                      <div className="flex flex-wrap gap-2">
                        <span className="rounded-full bg-primary-50 px-3 py-1 text-xs font-medium text-primary-700 dark:bg-primary-900/10 dark:text-primary-400">Apache Kafka</span>
                        <span className="rounded-full bg-primary-50 px-3 py-1 text-xs font-medium text-primary-700 dark:bg-primary-900/10 dark:text-primary-400">Apache Spark</span>
                        <span className="rounded-full bg-primary-50 px-3 py-1 text-xs font-medium text-primary-700 dark:bg-primary-900/10 dark:text-primary-400">ELK Stack</span>
                        <span className="rounded-full bg-primary-50 px-3 py-1 text-xs font-medium text-primary-700 dark:bg-primary-900/10 dark:text-primary-400">Prometheus</span>
                        <span className="rounded-full bg-primary-50 px-3 py-1 text-xs font-medium text-primary-700 dark:bg-primary-900/10 dark:text-primary-400">Grafana</span>
                      </div>
                    </div>

                    {/* Cloud & DevOps */}
                    <div className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-4">
                      <h3 className="text-base font-semibold text-primary-600 dark:text-primary-500 mb-3">Cloud & DevOps</h3>
                      <div className="flex flex-wrap gap-2">
                        <span className="rounded-full bg-primary-50 px-3 py-1 text-xs font-medium text-primary-700 dark:bg-primary-900/10 dark:text-primary-400">AWS</span>
                        <span className="rounded-full bg-primary-50 px-3 py-1 text-xs font-medium text-primary-700 dark:bg-primary-900/10 dark:text-primary-400">Azure</span>
                        <span className="rounded-full bg-primary-50 px-3 py-1 text-xs font-medium text-primary-700 dark:bg-primary-900/10 dark:text-primary-400">OpenShift</span>
                        <span className="rounded-full bg-primary-50 px-3 py-1 text-xs font-medium text-primary-700 dark:bg-primary-900/10 dark:text-primary-400">GitHub Actions</span>
                        <span className="rounded-full bg-primary-50 px-3 py-1 text-xs font-medium text-primary-700 dark:bg-primary-900/10 dark:text-primary-400">Docker</span>
                      </div>
                    </div>

                    {/* AI & ML */}
                    <div className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-4">
                      <h3 className="text-base font-semibold text-primary-600 dark:text-primary-500 mb-3">AI & ML</h3>
                      <div className="flex flex-wrap gap-2">
                        <span className="rounded-full bg-primary-50 px-3 py-1 text-xs font-medium text-primary-700 dark:bg-primary-900/10 dark:text-primary-400">Vector Embedding (ChromaDB)</span>
                        <span className="rounded-full bg-primary-50 px-3 py-1 text-xs font-medium text-primary-700 dark:bg-primary-900/10 dark:text-primary-400">ChatGPT API Integration</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
} 
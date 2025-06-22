import Nav from '@/components/nav'
import ImageWithFallback from '@/components/image-with-fallback'

export default function About() {
  return (
    <main>
      <Nav />
      <div className="min-h-screen pt-16">
        <div className="py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl">
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">About Me</h1>
              
              <div className="mt-8 flex justify-center">
                <div className="relative h-32 w-32 overflow-hidden rounded-full">
                  <ImageWithFallback
                    src="/profile.jpg"
                    alt="Mitesh Trivedi"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>

              <div className="mt-12 space-y-8 text-lg text-gray-600 dark:text-gray-400">
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

              <div className="mt-12">
                <h2 className="text-2xl font-bold tracking-tight">Core Competencies</h2>
                <ul className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <li className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
                    <h3 className="font-semibold">Backend Architecture</h3>
                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                      Designing scalable and maintainable backend systems
                    </p>
                  </li>
                  <li className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
                    <h3 className="font-semibold">Cloud Solutions</h3>
                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                      Building and optimizing cloud-native applications
                    </p>
                  </li>
                  <li className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
                    <h3 className="font-semibold">Advanced Technologies</h3>
                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                      Integrating Generative AI and distributed systems
                    </p>
                  </li>
                  <li className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
                    <h3 className="font-semibold">Team Leadership</h3>
                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                      Leading cross-functional teams and development processes
                    </p>
                  </li>
                </ul>
              </div>

              <div className="mt-16">
                <h2 className="text-2xl font-bold tracking-tight">Technical Skills</h2>
                <div className="mt-8 space-y-8">
                  {/* Languages & Frameworks */}
                  <div>
                    <h3 className="text-lg font-semibold text-primary-600 dark:text-primary-500">Languages & Frameworks</h3>
                    <div className="mt-4 flex flex-wrap gap-2">
                      <span className="rounded-full bg-primary-50 px-4 py-1.5 text-sm font-medium text-primary-700 dark:bg-primary-900/10 dark:text-primary-400">Java</span>
                      <span className="rounded-full bg-primary-50 px-4 py-1.5 text-sm font-medium text-primary-700 dark:bg-primary-900/10 dark:text-primary-400">Python</span>
                      <span className="rounded-full bg-primary-50 px-4 py-1.5 text-sm font-medium text-primary-700 dark:bg-primary-900/10 dark:text-primary-400">Spring Boot</span>
                      <span className="rounded-full bg-primary-50 px-4 py-1.5 text-sm font-medium text-primary-700 dark:bg-primary-900/10 dark:text-primary-400">Spring Reactive</span>
                      <span className="rounded-full bg-primary-50 px-4 py-1.5 text-sm font-medium text-primary-700 dark:bg-primary-900/10 dark:text-primary-400">FastAPI</span>
                      <span className="rounded-full bg-primary-50 px-4 py-1.5 text-sm font-medium text-primary-700 dark:bg-primary-900/10 dark:text-primary-400">GraphQL</span>
                    </div>
                  </div>

                  {/* Architecture & Design */}
                  <div>
                    <h3 className="text-lg font-semibold text-primary-600 dark:text-primary-500">Architecture & Design</h3>
                    <div className="mt-4 flex flex-wrap gap-2">
                      <span className="rounded-full bg-primary-50 px-4 py-1.5 text-sm font-medium text-primary-700 dark:bg-primary-900/10 dark:text-primary-400">Microservices</span>
                      <span className="rounded-full bg-primary-50 px-4 py-1.5 text-sm font-medium text-primary-700 dark:bg-primary-900/10 dark:text-primary-400">WebSockets</span>
                      <span className="rounded-full bg-primary-50 px-4 py-1.5 text-sm font-medium text-primary-700 dark:bg-primary-900/10 dark:text-primary-400">Distributed Caching</span>
                      <span className="rounded-full bg-primary-50 px-4 py-1.5 text-sm font-medium text-primary-700 dark:bg-primary-900/10 dark:text-primary-400">Event-Driven Architecture</span>
                      <span className="rounded-full bg-primary-50 px-4 py-1.5 text-sm font-medium text-primary-700 dark:bg-primary-900/10 dark:text-primary-400">Generative AI</span>
                    </div>
                  </div>

                  {/* Databases & Caching */}
                  <div>
                    <h3 className="text-lg font-semibold text-primary-600 dark:text-primary-500">Databases & Caching</h3>
                    <div className="mt-4 flex flex-wrap gap-2">
                      <span className="rounded-full bg-primary-50 px-4 py-1.5 text-sm font-medium text-primary-700 dark:bg-primary-900/10 dark:text-primary-400">Azure Cosmos-DB</span>
                      <span className="rounded-full bg-primary-50 px-4 py-1.5 text-sm font-medium text-primary-700 dark:bg-primary-900/10 dark:text-primary-400">AWS DynamoDB</span>
                      <span className="rounded-full bg-primary-50 px-4 py-1.5 text-sm font-medium text-primary-700 dark:bg-primary-900/10 dark:text-primary-400">Cassandra</span>
                      <span className="rounded-full bg-primary-50 px-4 py-1.5 text-sm font-medium text-primary-700 dark:bg-primary-900/10 dark:text-primary-400">Azure-SQL</span>
                      <span className="rounded-full bg-primary-50 px-4 py-1.5 text-sm font-medium text-primary-700 dark:bg-primary-900/10 dark:text-primary-400">MySQL</span>
                      <span className="rounded-full bg-primary-50 px-4 py-1.5 text-sm font-medium text-primary-700 dark:bg-primary-900/10 dark:text-primary-400">Redis</span>
                      <span className="rounded-full bg-primary-50 px-4 py-1.5 text-sm font-medium text-primary-700 dark:bg-primary-900/10 dark:text-primary-400">Hazel-cast</span>
                    </div>
                  </div>

                  {/* Data Processing & Monitoring */}
                  <div>
                    <h3 className="text-lg font-semibold text-primary-600 dark:text-primary-500">Data Processing & Monitoring</h3>
                    <div className="mt-4 flex flex-wrap gap-2">
                      <span className="rounded-full bg-primary-50 px-4 py-1.5 text-sm font-medium text-primary-700 dark:bg-primary-900/10 dark:text-primary-400">Apache Kafka</span>
                      <span className="rounded-full bg-primary-50 px-4 py-1.5 text-sm font-medium text-primary-700 dark:bg-primary-900/10 dark:text-primary-400">Apache Spark</span>
                      <span className="rounded-full bg-primary-50 px-4 py-1.5 text-sm font-medium text-primary-700 dark:bg-primary-900/10 dark:text-primary-400">ELK Stack</span>
                      <span className="rounded-full bg-primary-50 px-4 py-1.5 text-sm font-medium text-primary-700 dark:bg-primary-900/10 dark:text-primary-400">Prometheus</span>
                      <span className="rounded-full bg-primary-50 px-4 py-1.5 text-sm font-medium text-primary-700 dark:bg-primary-900/10 dark:text-primary-400">Grafana</span>
                      <span className="rounded-full bg-primary-50 px-4 py-1.5 text-sm font-medium text-primary-700 dark:bg-primary-900/10 dark:text-primary-400">Splunk</span>
                    </div>
                  </div>

                  {/* Cloud & DevOps */}
                  <div>
                    <h3 className="text-lg font-semibold text-primary-600 dark:text-primary-500">Cloud & DevOps</h3>
                    <div className="mt-4 flex flex-wrap gap-2">
                      <span className="rounded-full bg-primary-50 px-4 py-1.5 text-sm font-medium text-primary-700 dark:bg-primary-900/10 dark:text-primary-400">AWS</span>
                      <span className="rounded-full bg-primary-50 px-4 py-1.5 text-sm font-medium text-primary-700 dark:bg-primary-900/10 dark:text-primary-400">Azure</span>
                      <span className="rounded-full bg-primary-50 px-4 py-1.5 text-sm font-medium text-primary-700 dark:bg-primary-900/10 dark:text-primary-400">OpenShift</span>
                      <span className="rounded-full bg-primary-50 px-4 py-1.5 text-sm font-medium text-primary-700 dark:bg-primary-900/10 dark:text-primary-400">GitHub Actions</span>
                      <span className="rounded-full bg-primary-50 px-4 py-1.5 text-sm font-medium text-primary-700 dark:bg-primary-900/10 dark:text-primary-400">Jenkins</span>
                      <span className="rounded-full bg-primary-50 px-4 py-1.5 text-sm font-medium text-primary-700 dark:bg-primary-900/10 dark:text-primary-400">Docker</span>
                      <span className="rounded-full bg-primary-50 px-4 py-1.5 text-sm font-medium text-primary-700 dark:bg-primary-900/10 dark:text-primary-400">Cloud Formation</span>
                    </div>
                  </div>

                  {/* AI & ML */}
                  <div>
                    <h3 className="text-lg font-semibold text-primary-600 dark:text-primary-500">AI & ML</h3>
                    <div className="mt-4 flex flex-wrap gap-2">
                      <span className="rounded-full bg-primary-50 px-4 py-1.5 text-sm font-medium text-primary-700 dark:bg-primary-900/10 dark:text-primary-400">Vector Embedding (ChromaDB)</span>
                      <span className="rounded-full bg-primary-50 px-4 py-1.5 text-sm font-medium text-primary-700 dark:bg-primary-900/10 dark:text-primary-400">ChatGPT API Integration</span>
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
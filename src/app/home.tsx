import Link from 'next/link'
import Nav from '@/components/nav'
import ImageWithFallback from '@/components/image-with-fallback'
import { FaLinkedin } from 'react-icons/fa'

export default function Home() {
  return (
    <main>
      <Nav />
      <div className="min-h-screen pt-16">
        {/* Hero Section */}
        <section className="py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
              <div className="flex flex-col justify-center">
                <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
                  Hi, I'm Mitesh Trivedi
                </h1>
                <p className="mt-6 text-lg text-gray-600 dark:text-gray-400">
                  Offering 15 years of experience in backend architecture, cloud-native solutions, and scalable system design with a focus on optimizing performance
                  and resource utilization. Experienced in integrating advanced technologies such as Generative AI, distributed systems, and data pipelines to enhance
                  user engagement and operational efficiency. Skilled in leading cross-functional teams and driving development processes to deliver impactful,
                  innovative solutions.
                </p>
                <div className="mt-8 flex items-center gap-4">
                  <Link
                    href="/contact"
                    className="rounded-lg bg-primary-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
                  >
                    Get in touch
                  </Link>
                  <Link
                    href="/blog"
                    className="rounded-lg bg-gray-100 px-4 py-2 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-200 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700"
                  >
                    Read my blog
                  </Link>
                  <a
                    href="https://linkedin.com/in/miteshtrivedi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full p-2 text-[#0A66C2] hover:bg-[#0A66C2]/10 transition-colors"
                    aria-label="LinkedIn Profile"
                  >
                    <FaLinkedin className="w-6 h-6" />
                  </a>
                </div>
              </div>
              <div className="relative mx-auto max-w-xl lg:mx-0">
                <div className="relative mx-auto aspect-square w-1/2 overflow-hidden rounded-2xl bg-gray-100 dark:bg-gray-800">
                  <ImageWithFallback
                    src="/profile.jpg"
                    alt="Mitesh Trivedi"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Projects Section - Temporarily hidden
        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold tracking-tight">Featured Projects</h2>
            <div className="mt-8 grid gap-8 lg:grid-cols-2">
              <div className="relative isolate">
                <div className="relative">
                  <h3 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    AI-Powered Financial Advisory Platform
                  </h3>
                  <div className="mt-2 flex items-center gap-x-4 text-sm">
                    <span className="text-gray-500">2023 - Present</span>
                    <span className="relative z-10 rounded-full bg-gray-100 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700">
                      Principal Engineer
                    </span>
                  </div>
                  <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
                    Led the architectural design and implementation of a sophisticated financial advisory platform leveraging Generative AI capabilities. 
                    Spearheaded the development of a scalable, cloud-native infrastructure while ensuring robust security measures and optimal performance.
                  </p>
                </div>
              </div>

              <div className="relative isolate">
                <div className="relative">
                  <h3 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Enterprise Customer Data Platform Modernization
                  </h3>
                  <div className="mt-2 flex items-center gap-x-4 text-sm">
                    <span className="text-gray-500">Jul 2023 - Sep 2024</span>
                    <span className="relative z-10 rounded-full bg-gray-100 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700">
                      Staff Software Engineer @ Walmart
                    </span>
                  </div>
                  <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
                    Led critical infrastructure modernization initiatives, focusing on large-scale database migrations, 
                    performance optimization, and cloud-native transformations. Drove technical excellence through 
                    architectural improvements and team mentorship.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <Link
                href="/projects"
                className="text-sm font-semibold leading-6 text-primary-600 hover:text-primary-500"
              >
                View all projects <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </section>
        */}
      </div>
    </main>
  )
} 
import Nav from '@/components/nav'

interface Project {
  title: string
  period: string
  role: string
  description: string
  technologies: string[]
  achievements: string[]
}

const projects: Project[] = [
  {
    title: "AI-Powered Financial Advisory Platform",
    period: "2023 - Present",
    role: "Principal Engineer",
    description: "Led the architectural design and implementation of a sophisticated financial advisory platform leveraging Generative AI capabilities. Spearheaded the development of a scalable, cloud-native infrastructure while ensuring robust security measures and optimal performance.",
    technologies: [
      "Python", "FastAPI", "Spring Cloud Gateway", "Docker", "Kubernetes (AKS)",
      "Azure API Gateway", "ChromaDB", "ChatGPT API", "GitHub Actions",
      "OAuth 2.0", "Stripe API"
    ],
    achievements: [
      "Architected and implemented a high-performance Generative AI financial chatbot system using Python and FastAPI, emphasizing modular design and scalability",
      "Engineered a sophisticated OAuth-based authentication system with Google/Facebook SSO integration, resulting in a 30% increase in user engagement",
      "Designed and deployed a robust multi-replica infrastructure on Azure Kubernetes Service (AKS), implementing Spring Cloud Gateway and Azure API Gateway for secure, high-traffic routing",
      "Established a comprehensive monetization framework through Stripe API integration, enabling seamless subscription-based revenue generation",
      "Optimized CI/CD workflows using GitHub Actions and Azure Repos, implementing sophisticated Docker image versioning and storage strategies, achieving 40% improvement in deployment efficiency",
      "Led the refactoring of LLM-based Python workflows, implementing ChromaDB for vector data persistence and optimizing ChatGPT API integration"
    ]
  },
  {
    title: "Enterprise Customer Data Platform Modernization",
    period: "Jul 2023 - Sep 2024",
    role: "Staff Software Engineer",
    description: "Led critical infrastructure modernization initiatives at Walmart, focusing on large-scale database migrations, performance optimization, and cloud-native transformations. Drove technical excellence through architectural improvements and team mentorship.",
    technologies: [
      "Spring Reactive", "CosmosDB", "Apache Spark", "GCP Dataproc",
      "Kubernetes", "Prometheus", "Grafana", "Azure SQL",
      "Docker", "Agile Methodologies"
    ],
    achievements: [
      "Spearheaded the strategic migration of database systems from Azure SQL to CosmosDB, architecting solutions for enhanced scalability and operational efficiency",
      "Engineered high-performance data processing pipelines using Apache Spark on GCP Dataproc clusters, processing 20M+ customer records with 50% reduced runtime",
      "Led the modernization of legacy customer service architecture to Spring Reactive, achieving 20% reduction in resource utilization while improving system responsiveness",
      "Architected and implemented comprehensive monitoring solutions using Prometheus and Grafana, enabling data-driven operational insights and proactive issue resolution",
      "Served as technical lead for the membership team in global system integration initiatives, facilitating cross-team collaboration and architectural alignment",
      "Orchestrated the migration from VM-based deployments to Kubernetes, resulting in 20% infrastructure cost reduction and improved deployment flexibility",
      "Elevated team capabilities through technical mentorship and implementation of robust code review practices, fostering a culture of engineering excellence"
    ]
  }
  // Additional projects can be added here
]

export default function Projects() {
  return (
    <main>
      <Nav />
      <div className="min-h-screen pt-16">
        <div className="py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Technical Leadership & Projects</h1>
            <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">
              Showcasing architectural leadership and technical innovation across enterprise-scale projects.
            </p>

            <div className="mt-16 space-y-20">
              {projects.map((project, index) => (
                <div key={index} className="relative isolate">
                  <div className="relative">
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      {project.title}
                    </h2>
                    <div className="mt-2 flex items-center gap-x-4 text-sm">
                      <span className="text-gray-500">{project.period}</span>
                      <span className="relative z-10 rounded-full bg-gray-100 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700">
                        {project.role}
                      </span>
                    </div>
                    <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
                      {project.description}
                    </p>

                    <div className="mt-8">
                      <h3 className="text-lg font-semibold">Key Achievements</h3>
                      <ul className="mt-4 space-y-4 text-gray-600 dark:text-gray-400">
                        {project.achievements.map((achievement, i) => (
                          <li key={i} className="flex gap-x-3">
                            <span className="text-primary-600">•</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-8">
                      <h3 className="text-lg font-semibold">Technologies</h3>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {project.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-900 dark:bg-gray-800 dark:text-gray-200"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
} 
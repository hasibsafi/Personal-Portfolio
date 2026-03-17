import { ScrollReveal } from "@/components/scroll-reveal"

const experiences = [
  {
    period: "Aug 2023 — Present",
    role: "Full-Stack Software Engineer",
    company: "Machinery Resources",
    description:
      "Developed and deployed a production financing platform using Next.js, TypeScript, Firebase Firestore, and Firebase Storage, enabling businesses to submit and manage multi-step financing applications through a secure web interface. Architected an event-driven backend workflow using Firestore triggers, Cloud Run services, and IAM-secured APIs to automate application processing and routing to internal stakeholders. Implemented structured data persistence, multi-file uploads, and branded email notifications, while optimizing performance to achieve 100/100 Lighthouse scores across performance, SEO, and best practices.",
    tags: ["Next.js", "TypeScript", "Firebase", "Cloud Firestore", "Cloud Run"],
  },
  {
    period: "Aug 2023 — Present",
    role: "Full-Stack Software Engineer",
    company: "CCS Communications",
    description:
      "Built and optimized high-traffic web applications using React, Next.js, Node.js, and Firebase/Firestore, focusing on performance and scalable real-time features. Refactored React components with memoization and dependency optimization to eliminate redundant re-renders and improve UI responsiveness. Developed Node.js API integrations supporting real-time workflows, reducing request latency by 25%, and implemented role-based authentication and authorization across both frontend routes and backend APIs to strengthen application security.",
    tags: ["React", "Next.js", "Node.js", "Firebase", "Firestore"],
  },
  {
    period: "Jun 2024 — Dec 2024",
    role: "Project Intern",
    company: "ARCS at CSUN (NASA-sponsored)",
    description:
      "Delivered iterative software components aligned to research milestones, balancing edge cases and performance tradeoffs. Restructured REST API error-handling logic to synchronize frontend requests with backend response schemas. Translated UI mockups into reusable HTML/CSS component patterns.",
    tags: ["JavaScript", "REST APIs", "HTML/CSS"],
  },
]

export function Experience() {
  return (
    <section id="experience" className="relative px-6 py-16 md:py-20">
      <div className="glass-panel mx-auto max-w-6xl rounded-2xl p-7 sm:p-10">
        <ScrollReveal className="mb-12">
          <span className="mb-2 block font-mono text-xs uppercase tracking-widest text-cloud-cyan">
            Career
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Experience
          </h2>
          <p className="mt-3 max-w-lg text-muted-foreground">
            A timeline of where I{"'"}ve worked and what I{"'"}ve contributed.
          </p>
        </ScrollReveal>

        <ScrollReveal className="relative" delay={0.15}>
          {/* Timeline line */}
          <div className="absolute left-[7px] top-2 bottom-2 hidden w-px bg-gradient-to-b from-cloud-cyan/90 via-infra-cyan/40 to-transparent md:block" />

          <div className="flex flex-col gap-8 md:gap-0">
            {experiences.map((exp, i) => (
              <div key={i} className="group relative md:pl-12 md:pb-12 last:md:pb-0">
                {/* Timeline dot */}
                <div className="absolute left-0 top-2 hidden md:block">
                  <div className="relative flex h-[15px] w-[15px] items-center justify-center">
                    <div className="absolute h-[15px] w-[15px] rounded-full bg-cloud-cyan/30 transition-all group-hover:bg-cloud-cyan/45" />
                    <div className="h-[7px] w-[7px] rounded-full bg-cloud-cyan shadow-[0_0_10px_rgba(34,211,238,0.8)]" />
                  </div>
                </div>

                <div className="rounded-xl border border-white/15 bg-white/6 p-6 backdrop-blur-2xl transition-all duration-300 hover:border-cloud-cyan/50 hover:shadow-[0_0_32px_rgba(34,211,238,0.16)]">
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <h3 className="text-base font-semibold text-foreground">
                        {exp.role}
                      </h3>
                      <p className="text-sm text-cloud-cyan">
                        {exp.company}
                      </p>
                    </div>
                    <span className="font-mono text-xs text-muted-foreground">
                      {exp.period}
                    </span>
                  </div>

                  <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                    {exp.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md border border-cloud-cyan/40 bg-white/5 px-2 py-0.5 text-xs text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

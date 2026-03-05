import { ExternalLink } from "lucide-react"

const experiences = [
  {
    period: "Aug 2023 — Present",
    role: "Full Stack Engineer",
    company: "CCS Communications",
    companyUrl: "#",
    description:
      "Refactored high-traffic React/Next.js pages to eliminate redundant re-renders, improving client-side responsiveness. Built Node.js API integration flows backed by Firebase/Firestore for real-time features, reducing request latency by 25%. Implemented role-based authentication and authorization across frontend routes and backend APIs.",
    tags: ["React", "Next.js", "Node.js", "Firebase", "Firestore"],
  },
  {
    period: "Jun 2024 — Dec 2024",
    role: "Project Intern",
    company: "ARCS at CSUN (NASA-sponsored)",
    companyUrl: "#",
    description:
      "Delivered iterative software components aligned to research milestones, balancing edge cases and performance tradeoffs. Restructured REST API error-handling logic to synchronize frontend requests with backend response schemas. Translated UI mockups into reusable HTML/CSS component patterns.",
    tags: ["JavaScript", "REST APIs", "HTML/CSS"],
  },
]

export function Experience() {
  return (
    <section id="experience" className="relative px-6 py-14">
      <div className="mx-auto max-w-6xl rounded-2xl border border-glass-border/60 bg-glass/70 p-8 sm:p-10 backdrop-blur-sm">
        <div className="mb-12">
          <span className="mb-2 block font-mono text-xs uppercase tracking-widest text-neon">
            Career
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Experience
          </h2>
          <p className="mt-3 max-w-lg text-muted-foreground">
            A timeline of where I{"'"}ve worked and what I{"'"}ve contributed.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[7px] top-2 bottom-2 hidden w-px bg-gradient-to-b from-neon/50 via-glass-border to-transparent md:block" />

          <div className="flex flex-col gap-8 md:gap-0">
            {experiences.map((exp, i) => (
              <div key={i} className="group relative md:pl-12 md:pb-12 last:md:pb-0">
                {/* Timeline dot */}
                <div className="absolute left-0 top-2 hidden md:block">
                  <div className="relative flex h-[15px] w-[15px] items-center justify-center">
                    <div className="absolute h-[15px] w-[15px] rounded-full bg-neon/20 transition-all group-hover:bg-neon/40" />
                    <div className="h-[7px] w-[7px] rounded-full bg-neon" />
                  </div>
                </div>

                <div className="rounded-xl border border-glass-border bg-glass p-6 backdrop-blur-md transition-all duration-300 hover:border-neon/30 hover:shadow-[0_0_30px_rgba(0,210,211,0.06)]">
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <h3 className="text-base font-semibold text-foreground">
                        {exp.role}
                      </h3>
                      <a
                        href={exp.companyUrl}
                        className="inline-flex items-center gap-1 text-sm text-neon transition-opacity hover:opacity-80"
                      >
                        {exp.company}
                        <ExternalLink size={12} />
                      </a>
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
                        className="rounded-md border border-glass-border bg-secondary/50 px-2 py-0.5 text-xs text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
